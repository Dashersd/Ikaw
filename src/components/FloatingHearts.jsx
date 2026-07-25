import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reasons = [
  "Kahit sa screen lang tayo nag-uusap, ramdam na ramdam ko pa rin ang halaga at init mo.",
  "Bawat notification mula sa 'yo, agad na nagpapangiti sa akin.",
  "Ang mga late-night chat natin ang pinakapaborito kong bahagi ng araw ko.",
  "Sobrang saya at dali mong kausap tungkol sa kahit anong bagay.",
  "Walang halaga ang distansya kapag ganito ko kadama ang koneksyon natin."
];

const FloatingHearts = ({ onComplete }) => {
  const [popped, setPopped] = useState([]);
  const [currentReason, setCurrentReason] = useState(null);

  const handlePop = (index) => {
    if (!popped.includes(index)) {
      setPopped([...popped, index]);
      setCurrentReason(reasons[index]);
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)' }}>
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ position: 'absolute', top: '10%', width: '100%', textAlign: 'center', zIndex: 10 }}
      >
        <h2 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>I-pop ang mga puso para malaman kung bakit...</h2>
      </motion.div>

      {/* Floating Hearts */}
      {reasons.map((_, index) => {
        if (popped.includes(index)) return null;
        
        // Randomize positions for each heart
        const leftPos = `${20 + (index * 15)}%`;
        const animDuration = 4 + (index % 3);
        const delay = index * 0.5;

        return (
          <motion.div
            key={index}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ 
              y: '-20vh', 
              opacity: 1,
              x: [0, -20, 20, 0] // subtle swaying
            }}
            transition={{ 
              y: { duration: animDuration, repeat: Infinity, ease: "linear", delay },
              x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 1 }
            }}
            style={{
              position: 'absolute',
              left: leftPos,
              fontSize: '3rem',
              cursor: 'pointer',
              zIndex: 5
            }}
            onClick={() => handlePop(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            💖
          </motion.div>
        );
      })}

      {/* Message Display Area */}
      <AnimatePresence mode='wait'>
        {currentReason && (
          <motion.div
            key={currentReason}
            initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              backgroundColor: 'rgba(253, 251, 247, 0.85)',
              padding: '2rem 3rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center',
              maxWidth: '80%',
              backdropFilter: 'blur(5px)',
              zIndex: 20
            }}
          >
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', color: 'var(--text-main)' }}>
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
            bottom: '15%',
            left: '50%',
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            backgroundColor: 'var(--romantic-rose)',
            color: '#fff',
            borderRadius: '50px',
            boxShadow: '0 4px 15px rgba(221, 161, 94, 0.4)',
            zIndex: 30,
            transition: 'all 0.3s ease'
          }}
          whileHover={{ scale: 1.05, backgroundColor: 'var(--romantic-accent)' }}
          whileTap={{ scale: 0.95 }}
        >
          May iba pa...
        </motion.button>
      )}
    </div>
  );
};

export default FloatingHearts;
