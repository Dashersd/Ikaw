import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScratchCardStage = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Create Rose Gold Metallic Gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#E8C3C9');
    gradient.addColorStop(0.3, '#F4D8DA');
    gradient.addColorStop(0.5, '#E8C3C9');
    gradient.addColorStop(0.7, '#C5939A');
    gradient.addColorStop(1, '#E8C3C9');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add embossed text to the cover
    ctx.font = 'bold 28px "Playfair Display"';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Text Shadow for engraved look
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText('Kuskusin para mabuksan', canvas.width / 2 + 1, canvas.height / 2 + 1);
    
    // Main Text
    ctx.fillStyle = '#590D22';
    ctx.fillText('Kuskusin para mabuksan', canvas.width / 2, canvas.height / 2);
  }, []);

  const getPointerPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    // Account for potential scaling of the canvas
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
      rawX: clientX,
      rawY: clientY
    };
  };

  const scratch = (e) => {
    if (!isDrawing || isScratched) return;
    e.preventDefault(); 

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { x, y, rawX, rawY } = getPointerPos(e);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();

    // Create a sparkle effect occasionally
    if (Math.random() > 0.7) {
      setParticles(prev => [...prev, { id: Date.now() + Math.random(), x: rawX, y: rawY }]);
      setTimeout(() => {
        setParticles(prev => prev.slice(1));
      }, 800);
    }

    checkScratched();
  };

  const checkScratched = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }

    const totalPixels = pixels.length / 4;
    const percentage = (transparentPixels / totalPixels) * 100;

    if (percentage > 45 && !isScratched) { 
      setIsScratched(true);
      // Smoothly fade out remaining canvas via CSS, but clear it for functionality
      setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-primary)',
        padding: '2rem',
        overflow: 'hidden'
      }}
    >
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ 
          marginBottom: '3rem', 
          fontSize: '2.5rem', 
          color: 'var(--text-main)', 
          textAlign: 'center',
          fontFamily: 'Playfair Display'
        }}
      >
        May lihim ako sa 'yo...
      </motion.h2>

      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '400px', 
          aspectRatio: '2/1', 
          borderRadius: '20px', 
          overflow: 'hidden', 
          boxShadow: '0 20px 50px rgba(0,0,0,0.15), inset 0 0 0 2px rgba(255,255,255,0.5)',
          backgroundColor: '#fff',
          cursor: isScratched ? 'default' : 'crosshair'
        }}
      >
        {/* Hidden Content */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #fff5f7 0%, #ffe4e8 100%)',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <motion.h3 
            animate={isScratched ? { scale: [0.9, 1.05, 1], opacity: [0, 1] } : {}}
            transition={{ duration: 0.8 }}
            style={{ 
              fontFamily: 'Playfair Display', 
              fontSize: '1.8rem', 
              color: '#590D22',
              textShadow: '0 2px 10px rgba(89, 13, 34, 0.2)'
            }}
          >
            Sobrang halaga at espesyal mo sa akin.
          </motion.h3>
        </div>

        {/* Scratchable Canvas */}
        <motion.canvas
          ref={canvasRef}
          width={800} // Double resolution for retina displays
          height={400}
          animate={{ opacity: isScratched ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            touchAction: 'none'
          }}
          onMouseDown={(e) => { setIsDrawing(true); scratch(e); }}
          onMouseMove={scratch}
          onMouseUp={() => setIsDrawing(false)}
          onMouseLeave={() => setIsDrawing(false)}
          onTouchStart={(e) => { setIsDrawing(true); scratch(e); }}
          onTouchMove={scratch}
          onTouchEnd={() => setIsDrawing(false)}
        />
      </motion.div>

      {/* Sparkles on scratch */}
      <AnimatePresence>
        {particles.map(p => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 0, x: p.x - 5, y: p.y - 5 }}
            animate={{ opacity: 0, scale: 1.5, y: p.y - 30 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              width: '10px',
              height: '10px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              boxShadow: '0 0 10px #C5939A',
              pointerEvents: 'none',
              zIndex: 100
            }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {isScratched && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={onComplete}
            style={{
              marginTop: '4rem',
              padding: '1rem 3rem',
              fontSize: '1.2rem',
              fontFamily: 'Outfit',
              fontWeight: 500,
              background: 'linear-gradient(45deg, #590D22, #C5939A)',
              color: '#fff',
              borderRadius: '50px',
              boxShadow: '0 10px 25px rgba(89, 13, 34, 0.4)',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '1px'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(89, 13, 34, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            Buksan ang totoong regalo 💌
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ScratchCardStage;

