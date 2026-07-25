import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './VirtualGarden.css'; 

const Firefly = ({ x, y, delay, duration, color = '#ffdd00', shadowColor = 'rgba(255, 221, 0, 0.8)' }) => (
  <motion.div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: color,
      boxShadow: `0 0 15px 5px ${shadowColor}`,
      zIndex: 100,
    }}
    initial={{ opacity: 0 }}
    animate={{
      y: [0, -30, 10, -40, 0],
      x: [0, 20, -10, 15, 0],
      opacity: [0, 1, 0.6, 1, 0],
      scale: [0.5, 1.2, 0.8, 1.2, 0.5]
    }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const RoseStage = ({ onComplete }) => {
  const [plucked, setPlucked] = useState([]);

  const handlePluck = (id) => {
    if (!plucked.includes(id)) {
      setPlucked([...plucked, id]);
    }
  };

  const messages = [
    "Pumitas ng mga bulaklak...",
    "Gusto niya ako...",
    "Hindi niya ako gusto...",
    "Gusto niya ako nang higit sa lahat." 
  ];

  const currentMessage = messages[plucked.length];

  const yellowFireflies = [
    { id: 1, x: '-15vmin', y: '20vmin', delay: 0, duration: 4 },
    { id: 2, x: '10vmin', y: '15vmin', delay: 1.5, duration: 5 },
    { id: 3, x: '-5vmin', y: '5vmin', delay: 2, duration: 4.5 },
    { id: 4, x: '20vmin', y: '25vmin', delay: 0.5, duration: 6 },
    { id: 5, x: '-25vmin', y: '30vmin', delay: 3, duration: 5 },
  ];

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#000',
    }}>
      
      <div className="night"></div>

      <h2 style={{
        position: 'absolute',
        top: '8%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'Playfair Display',
        color: '#a7ffee',
        fontSize: '2.5rem',
        textShadow: '0 0 10px rgba(167, 255, 238, 0.3)',
        zIndex: 50,
        textAlign: 'center'
      }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentMessage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-block' }}
          >
            {currentMessage}
          </motion.span>
        </AnimatePresence>
      </h2>

      <div className="flowers">
        <div style={{ position: 'absolute', left: '50%', bottom: 0, width: 0, height: '100%', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
          
        {yellowFireflies.map(f => <Firefly key={`yf-${f.id}`} {...f} />)}

        <div 
          className={`flower flower--1 ${plucked.includes(1) ? 'plucked' : ''}`}
          onClick={() => handlePluck(1)}
        >
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
            <div className="flower__line__leaf flower__line__leaf--5"></div>
            <div className="flower__line__leaf flower__line__leaf--6"></div>
          </div>
        </div>

        <div 
          className={`flower flower--2 ${plucked.includes(2) ? 'plucked' : ''}`}
          onClick={() => handlePluck(2)}
        >
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div 
          className={`flower flower--3 ${plucked.includes(3) ? 'plucked' : ''}`}
          onClick={() => handlePluck(3)}
        >
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '1.2s' }}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '2.4s' }}>
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '2.8s' }}>
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '2.8s' }}>
          <div className="flower__g-front">
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__line"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '3.2s' }}>
          <div className="flower__g-fr">
            <div className="leaf"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
          </div>
        </div>

        <div className="long-g long-g--0">
          <div className="grow-ans" style={{ '--d': '3s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '2.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.4s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--1">
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.8s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--2">
          <div className="grow-ans" style={{ '--d': '4s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.4s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--3">
          <div className="grow-ans" style={{ '--d': '4s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--4">
          <div className="grow-ans" style={{ '--d': '4s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--5">
          <div className="grow-ans" style={{ '--d': '4s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--6">
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.4s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.6s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.8s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--7">
          <div className="grow-ans" style={{ '--d': '3s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.5s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        {/* Far Left Side Grass */}
        <div className="long-g" style={{ left: '-60vmin', bottom: '5vmin', transform: 'scale(0.85) rotate(-10deg)' }}>
          <div className="grow-ans" style={{ '--d': '4.1s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.3s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.5s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.7s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g" style={{ left: '-75vmin', bottom: '-5vmin', transform: 'scale(0.7) rotate(-15deg)' }}>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.4s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.6s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.8s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        {/* Far Right Side Grass */}
        <div className="long-g" style={{ left: '60vmin', bottom: '0vmin', transform: 'scale(0.8) rotate(10deg)' }}>
          <div className="grow-ans" style={{ '--d': '4s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g" style={{ left: '75vmin', bottom: '-5vmin', transform: 'scale(0.65) rotate(15deg)' }}>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.4s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.6s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.8s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 200 }}>
        {plucked.length === 3 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
            onClick={onComplete}
            style={{
              padding: '1rem 3rem',
              fontSize: '1.2rem',
              fontFamily: 'Outfit',
              fontWeight: 500,
              backgroundColor: '#159faa',
              color: '#fff',
              borderRadius: '50px',
              boxShadow: '0 10px 25px rgba(21, 159, 170, 0.4)',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '1px'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(21, 159, 170, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            Gusto rin kita
          </motion.button>
        )}
      </div>

    </div>
  );
};

export default RoseStage;
