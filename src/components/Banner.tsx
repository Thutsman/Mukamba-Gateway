import React from 'react';
import { motion } from 'framer-motion';

const Banner: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We are not another Real Estate Advertising Company no one needs that,… we are the ecosystem that underpins your ability to sell your house on your terms under your control from anywhere in the world.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
