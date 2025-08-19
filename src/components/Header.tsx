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
         <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm">
      <div className="container-custom">
                 <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-1"
            >
                             <Logo logoType="combined" imageSrc="/logo.jpeg" size="xl" showText={true} color="white" />
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={() => scrollToSection('what-we-do')}
              className="text-white hover:text-primary transition-colors duration-300 font-medium"
            >
              What We Do
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => scrollToSection('why-join-early')}
              className="text-white hover:text-primary transition-colors duration-300 font-medium"
            >
              Early Access
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
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
          className="md:hidden overflow-hidden bg-black/90 backdrop-blur-sm border-t border-white/20"
        >
          <div className="py-4 space-y-4">
            <button
              onClick={() => scrollToSection('what-we-do')}
              className="block w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-white/10 transition-colors duration-300 font-medium"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection('why-join-early')}
              className="block w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-white/10 transition-colors duration-300 font-medium"
            >
              Early Access
            </button>
            <div className="px-4">
              <button
                onClick={onSignUp}
                className="w-full btn-primary text-sm py-3"
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
