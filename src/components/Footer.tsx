import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Mail,
      text: "info@mukambagateway.com",
      href: "mailto:info@mukambagateway.com"
    }
  ];





  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-4">
              <div className="bg-white/90 rounded-lg p-4 inline-block">
                <Logo logoType="image" imageSrc="/logo.svg" size="lg" />
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
              Your trusted real estate platform connecting Zimbabwean diaspora with local property opportunities. 
              We're building bridges between communities and creating investment opportunities for the future.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 flex justify-center">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <contact.icon className="w-5 h-5 text-primary" />
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Mukamba Gateway. All rights reserved. | 
            Connecting Zimbabwean diaspora with local property opportunities.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
