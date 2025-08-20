import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onSignUp: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignUp }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
         <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg safe-top">
      <div className="container-custom">
                 <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 flex items-center"
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-1"
            >
                             <Logo logoType="image" imageSrc="/logo.svg" size="xl" />
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
                         <motion.button
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               onClick={() => scrollToSection('what-we-do')}
               className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium"
             >
               What We Do
             </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={onSignUp}
              className="btn-primary text-sm px-6 py-2"
            >
              Sign Up
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={toggleMenu}
                         className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Toggle menu"
          >
                         {isMenuOpen ? (
               <X className="w-6 h-6 text-gray-800" />
             ) : (
               <Menu className="w-6 h-6 text-gray-800" />
             )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
                 <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{
             opacity: isMenuOpen ? 1 : 0,
             height: isMenuOpen ? 'auto' : 0
           }}
           transition={{ duration: 0.3, ease: "easeInOut" }}
           className="md:hidden overflow-hidden bg-white shadow-lg border-t border-gray-200"
         >
          <div className="py-4 space-y-4">
                         <button
               onClick={() => scrollToSection('what-we-do')}
               className="block w-full text-left px-4 py-3 text-gray-800 hover:text-primary hover:bg-gray-100 transition-colors duration-300 font-medium text-base sm:text-lg"
             >
               What We Do
             </button>
            <div className="px-4">
              <button
                onClick={onSignUp}
                className="w-full btn-primary text-sm sm:text-base py-3"
              >
                Sign Up
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
