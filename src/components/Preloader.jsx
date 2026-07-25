import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    // Wait 5 seconds for the animation to play out nicely
    const timer = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Generate random particles for the background sparks
  const sparks = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2, // 2px to 6px
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 2, // 2s to 5s
    delay: Math.random() * 2,
    opacity: Math.random() * 0.5 + 0.3 // 0.3 to 0.8
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a0508', // Deep dramatic dark background
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Floating Sparks */}
      {sparks.map(spark => (
        <motion.div
          key={spark.id}
          initial={{ y: '100vh', opacity: 0, x: 0 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, spark.opacity, 0],
            x: [0, (Math.random() - 0.5) * 50] // drift slightly left or right
          }}
          transition={{ 
            duration: spark.duration,
            delay: spark.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: spark.left,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            backgroundColor: 'var(--romantic-rose)',
            borderRadius: '50%',
            filter: 'blur(1px)',
            zIndex: 1
          }}
        />
      ))}

      <div style={{ width: '100%', maxWidth: '600px', height: '200px', position: 'relative', zIndex: 10 }}>
        <svg viewBox="0 0 500 200" width="100%" height="100%">
          
          {/* Continuous Neon EKG and Heart */}
          <motion.path
            d="M 0 130 
               L 80 130 L 90 110 L 100 130 
               L 120 130 L 130 70 L 140 160 L 150 130 
               L 220 130 L 250 150 
               C 150 50 200 0 250 50 
               C 300 0 350 50 250 150 
               L 280 130 L 350 130 
               L 360 160 L 370 70 L 380 130 
               L 400 130 L 410 110 L 420 130 
               L 500 130"
            fill="transparent"
            stroke="var(--romantic-rose)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            style={{
              filter: 'drop-shadow(0 0 8px var(--romantic-rose)) drop-shadow(0 0 15px var(--romantic-rose))',
            }}
          />
        </svg>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 1 }}
        style={{ 
          fontFamily: 'Playfair Display', 
          fontWeight: 400,
          color: '#FFE5EC', // Light pink text for dark background
          fontSize: '1.8rem',
          marginTop: '1rem',
          textAlign: 'center',
          padding: '0 1rem',
          zIndex: 10
        }}
      >
        Ang tibok ng puso ko kapag kausap kita...
      </motion.h2>
    </motion.div>
  );
};

export default Preloader;
