import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import RoseStage from './components/RoseStage';
import GlowingOrbsStage from './components/GlowingOrbsStage';
import ScratchCardStage from './components/ScratchCardStage';
import Envelope from './components/Envelope';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  const [stage, setStage] = useState(0);

  const nextStage = () => setStage(prev => prev + 1);

  return (
    <>
      <BackgroundMusic />
      <AnimatePresence mode='wait'>
        {stage === 0 && <Preloader key="preloader" onComplete={nextStage} />}
        {stage === 1 && <RoseStage key="rose" onComplete={nextStage} />}
        {stage === 2 && <GlowingOrbsStage key="orbs" onComplete={nextStage} />}
        {stage === 3 && <ScratchCardStage key="scratch" onComplete={nextStage} />}
        {stage === 4 && <Envelope key="envelope" />}
      </AnimatePresence>
    </>
  );
}

export default App;
