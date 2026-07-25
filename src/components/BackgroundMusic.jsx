import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch((err) => {
            console.log("Autoplay prevented:", err);
          });
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = (e) => {
    e.stopPropagation(); // prevent triggering other stage events
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log("Play failed:", err));
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
      
      {/* Floating Music Control Button */}
      <motion.button
        onClick={togglePlay}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          border: '1px solid rgba(255, 77, 109, 0.4)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.2rem',
          cursor: 'pointer',
          zIndex: 9999,
          color: '#590D22'
        }}
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        <motion.span
          animate={isPlaying ? { rotate: [0, 15, -15, 0] } : { rotate: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          {isPlaying ? "🎵" : "🔇"}
        </motion.span>
      </motion.button>
    </>
  );
};

export default BackgroundMusic;
