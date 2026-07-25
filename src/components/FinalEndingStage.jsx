import React from 'react';
import { motion } from 'framer-motion';

// Lightweight, GPU-friendly SVG Sky Lantern Component
const AmbientLantern = ({ x, startY = 105, size = 35, delay = 0, duration = 14 }) => {
  const driftX = Math.random() * 8 - 4;
  return (
    <motion.div
      initial={{ top: `${startY}vh`, left: `${x}vw`, opacity: 0, scale: 0.6 }}
      animate={{
        top: '-20vh',
        left: [`${x}vw`, `${x + driftX}vw`, `${x}vw`],
        opacity: [0, 0.9, 0.9, 0],
        scale: [0.6, 1, 1, 0.7]
      }}
      transition={{
        duration,
        delay,
        ease: 'linear',
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 5
      }}
    >
      <svg width={size} height={size * 1.3} viewBox="0 0 60 80" fill="none">
        {/* Outer Lantern Body */}
        <path
          d="M10 20 C10 10, 50 10, 50 20 L45 65 C45 72, 15 72, 15 65 Z"
          fill="url(#lanternGlow)"
          stroke="rgba(255, 236, 179, 0.6)"
          strokeWidth="1"
        />
        {/* Inner Flame */}
        <circle cx="30" cy="55" r="8" fill="#FFF59D" />
        <circle cx="30" cy="55" r="4" fill="#FFFFFF" />
        <ellipse cx="30" cy="18" rx="20" ry="4" fill="rgba(255, 248, 225, 0.4)" />
        <ellipse cx="30" cy="66" rx="15" ry="3" fill="rgba(255, 183, 77, 0.8)" />

        <defs>
          <linearGradient id="lanternGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFCC80" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FF7043" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#D84315" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

const FinalEndingStage = ({ onReplay }) => {
  // Smooth & lightweight set of 10 ambient sky lanterns to avoid lag or glitching
  const lanterns = [
    { id: 1, x: 10, startY: 105, size: 36, delay: 0, duration: 13 },
    { id: 2, x: 25, startY: 110, size: 44, delay: 2, duration: 15 },
    { id: 3, x: 40, startY: 115, size: 30, delay: 5, duration: 12 },
    { id: 4, x: 58, startY: 108, size: 48, delay: 1, duration: 16 },
    { id: 5, x: 75, startY: 112, size: 34, delay: 4, duration: 14 },
    { id: 6, x: 88, startY: 105, size: 42, delay: 6, duration: 13 },
    { id: 7, x: 18, startY: 120, size: 32, delay: 7, duration: 15 },
    { id: 8, x: 48, startY: 118, size: 46, delay: 3, duration: 17 },
    { id: 9, x: 68, startY: 122, size: 38, delay: 8, duration: 14 },
    { id: 10, x: 82, startY: 116, size: 30, delay: 9, duration: 13 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to top, #04060f 0%, #0d1326 60%, #161e36 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Ambient Twinkling Background Stars */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            backgroundColor: '#fff',
            borderRadius: '50%',
            zIndex: 1
          }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        />
      ))}

      {/* 10 Smooth Ambient Sky Lanterns */}
      {lanterns.map((l) => (
        <AmbientLantern key={l.id} {...l} />
      ))}

      {/* Center Message Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 20,
          backgroundColor: 'rgba(13, 19, 38, 0.75)',
          border: '1px solid rgba(255, 204, 128, 0.35)',
          borderRadius: '24px',
          padding: '3rem 2.5rem',
          maxWidth: '520px',
          width: '85%',
          textAlign: 'center',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(255, 112, 67, 0.2)'
        }}
      >
        <motion.h2
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '3.2rem',
            color: '#FFE0B2',
            margin: '0 0 1rem 0',
            textShadow: '0 0 15px rgba(255, 183, 77, 0.6)'
          }}
        >
          Maraming Salamat
        </motion.h2>

        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.45rem',
            lineHeight: '1.7',
            color: '#FFF8E1',
            margin: '0 0 1.5rem 0'
          }}
        >
          Salamat sa pagbabasa hanggang sa huli. Kahit anong mangyari, at kahit gaano man kalayo ang pagitan natin, sobrang nagpapasalamat ako na nakilala kita.
        </p>

        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.4rem',
            fontWeight: 'bold',
            color: '#FFB74D',
            margin: '0 0 2.5rem 0'
          }}
        >
          Nandito lang ako para sa 'yo. ✨
        </p>

        {/* Replay Button */}
        <motion.button
          onClick={onReplay}
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 183, 77, 0.7)' }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '0.8rem 2.2rem',
            fontSize: '1.1rem',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500,
            background: 'linear-gradient(45deg, #FF7043, #FFB74D)',
            color: '#060814',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(255, 112, 67, 0.4)',
            transition: 'all 0.3s ease'
          }}
        >
          Muling Panoorin 🔄
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FinalEndingStage;
