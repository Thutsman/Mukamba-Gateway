import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import WhyJoinEarly from './components/WhyJoinEarly';
import Footer from './components/Footer';
import SignupModal from './components/SignupModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onSignUp={openModal} />
      <Hero onSignUp={openModal} />
      <WhatWeDo onSignUp={openModal} />
      <WhyJoinEarly onSignUp={openModal} />
      <Footer />
      
      <AnimatePresence>
        {isModalOpen && (
          <SignupModal onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
