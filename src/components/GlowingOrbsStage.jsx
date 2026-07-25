import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reasons = [
  "Kahit sa screen lang tayo nag-uusap, ramdam na ramdam ko pa rin ang halaga at init mo.",
  "Bawat notification mula sa 'yo, agad na nagpapangiti sa akin.",
  "Ang mga late-night chat natin ang pinakapaborito kong bahagi ng araw ko.",
  "Sobrang saya at dali mong kausap tungkol sa kahit anong bagay.",
  "Walang halaga ang distansya kapag ganito ko kadama ang koneksyon natin.",
  "Hindi na ako makapaghintay sa araw na sa wakas ay magkikita na tayo nang personal."
];

// Define positions for stars in percentage (x, y)
const starPositions = [
  { x: 15, y: 40 }, // moved down
  { x: 35, y: 35 }, // moved down and away from title
  { x: 65, y: 30 }, // right side
  { x: 80, y: 55 }, // further down
  { x: 60, y: 75 }, // bottom right
  { x: 25, y: 65 }  // bottom left
];

const Star = ({ index, position, isPopped, isActive, onClick }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        cursor: 'pointer',
        zIndex: 10,
        // center the element on its coordinates
        transform: 'translate(-50%, -50%)' 
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isPopped ? 1.5 : (isActive ? 1.2 : 1), 
        opacity: 1 
      }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={!isPopped ? { scale: 1.3 } : {}}
      whileTap={!isPopped ? { scale: 0.9 } : {}}
      onClick={!isPopped ? onClick : undefined}
    >
      <motion.div
        animate={isPopped ? {
          boxShadow: ['0 0 10px #fff', '0 0 25px #fff', '0 0 10px #fff']
        } : {
          boxShadow: ['0 0 5px rgba(255,255,255,0.5)', '0 0 15px rgba(255,255,255,0.8)', '0 0 5px rgba(255,255,255,0.5)']
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: isPopped ? '14px' : '10px',
          height: isPopped ? '14px' : '10px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          filter: isPopped ? 'drop-shadow(0 0 10px white)' : 'none'
        }}
      />
    </motion.div>
  );
};

const GlowingOrbsStage = ({ onComplete }) => {
  const [popped, setPopped] = useState([]);
  const [currentReason, setCurrentReason] = useState(null);

  useEffect(() => {
    let timer;
    if (currentReason) {
      timer = setTimeout(() => {
        setCurrentReason(null);
      }, 3500);
    }
    return () => clearTimeout(timer);
  }, [currentReason]);

  const handlePop = (index) => {
    if (!popped.includes(index)) {
      setPopped([...popped, index]);
      setCurrentReason(reasons[index]);
    }
  };

  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw', 
      position: 'relative', 
      overflow: 'hidden', 
      background: 'linear-gradient(135deg, #0b1021 0%, #1b2845 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      
      {/* Background ambient stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`bg-star-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            zIndex: 1
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ 
            duration: Math.random() * 3 + 2, 
            repeat: Infinity, 
            delay: Math.random() * 2,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ position: 'absolute', top: '10%', width: '100%', textAlign: 'center', zIndex: 20 }}
      >
        <h2 style={{ fontSize: '2.5rem', color: '#fff', fontFamily: 'Playfair Display', textShadow: '0 2px 10px rgba(0,0,0,0.5)', margin: 0 }}>
          Dahil...
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginTop: '0.5rem', fontFamily: 'Inter, sans-serif' }}>
          Idugtong ang mga bituin
        </p>
      </motion.div>

      {/* SVG Lines for Constellation */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 5, pointerEvents: 'none' }}>
        {popped.map((starIndex, i) => {
          if (i === 0) return null;
          const prevIndex = popped[i - 1];
          const prevPos = starPositions[prevIndex];
          const currentPos = starPositions[starIndex];

          return (
            <motion.line
              key={`line-${prevIndex}-${starIndex}`}
              x1={`${prevPos.x}%`}
              y1={`${prevPos.y}%`}
              x2={`${currentPos.x}%`}
              y2={`${currentPos.y}%`}
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth="2"
              strokeDasharray="4,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {/* Interactive Stars */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
        {reasons.map((_, index) => (
          <Star 
            key={index}
            index={index}
            position={starPositions[index]}
            isPopped={popped.includes(index)}
            isActive={!popped.includes(index)}
            onClick={() => handlePop(index)}
          />
        ))}
      </div>

      {/* Message Display Area */}
      <AnimatePresence mode='wait'>
        {currentReason && (
          <motion.div
            key={currentReason}
            initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              backgroundColor: 'rgba(11, 16, 33, 0.7)',
              padding: '2rem 3rem',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              textAlign: 'center',
              maxWidth: '80%',
              backdropFilter: 'blur(10px)',
              zIndex: 30
            }}
          >
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', color: '#fff', margin: 0 }}>
              {currentReason}
            </h3>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Continue Button */}
      {popped.length === reasons.length && (
        <motion.button
          initial={{ opacity: 0, y: 20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          transition={{ delay: 1 }}
          onClick={onComplete}
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            backgroundColor: '#ffffff',
            color: '#0b1021',
            borderRadius: '50px',
            border: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
            zIndex: 40,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(255,255,255,0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          Iyon na ba ang lahat?
        </motion.button>
      )}
    </div>
  );
};

export default GlowingOrbsStage;
