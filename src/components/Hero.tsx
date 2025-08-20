import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onSignUp: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignUp }) => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden safe-top">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

             {/* Content */}
       <div className="relative z-10 container-custom text-center text-white pt-24 sm:pt-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mukamba Gateway
          </motion.h1>
          
          {/* Red underline accent */}
          <motion.div 
            className="w-32 h-1 bg-primary mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Sell Smarter. Pay less
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Launching soon! Landlords, Sellers, Tenants and Buyers in one place
          </motion.p>

          <motion.div 
            className="flex flex-col items-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <button 
              onClick={onSignUp}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[44px] w-full sm:w-auto"
            >
              Sign Up for Early Access
            </button>
          </motion.div>

          <motion.p 
            className="text-sm text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Already signed up? You will get an email as soon as we are ready to launch
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
