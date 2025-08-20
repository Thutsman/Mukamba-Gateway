import React from 'react';
import { motion } from 'framer-motion';
import { Home, DollarSign, Building } from 'lucide-react';

interface WhatWeDoProps {
  onSignUp: () => void;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ onSignUp }) => {
  const features = [
    {
      icon: Home,
      title: "Buy Homes",
      description: "Purchase properties outright or through flexible installment plans that work for you.",
      gradient: "from-[#7f1518] to-[#7f1518]"
    },
    {
      icon: DollarSign,
      title: "Sell Property",
      description: "List and sell your property without paying expensive agent fees and commissions.",
      gradient: "from-[#7f1518] to-[#7f1518]"
    },
    {
      icon: Building,
      title: "Manage Portfolios",
      description: "Easily manage portfolios of 10+ properties with our intuitive platform tools.",
      gradient: "from-[#7f1518] to-[#7f1518]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="what-we-do" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-blue-50/20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                     <motion.h2 
             className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
           >
             What We Do
           </motion.h2>
           <motion.p 
             className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             viewport={{ once: true }}
           >
             Mukamba Gateway is a new property platform designed for Zimbabwe and the region. We make it easier to buy, sell, and manage property.
           </motion.p>
        </motion.div>

                 <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
         >
           {features.map((feature, index) => (
             <motion.div
               key={index}
               variants={itemVariants}
               className="group relative bg-white rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 ease-out hover:duration-300"
               style={{
                 boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
               }}
               whileHover={{
                 y: -8,
                 transition: { duration: 0.3, ease: "easeOut" }
               }}
               whileFocus={{
                 y: -4,
                 transition: { duration: 0.2, ease: "easeOut" }
               }}
             >
               {/* Enhanced shadow on hover */}
               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
               
               {/* Card content */}
               <div className="relative z-10">
                 <motion.div 
                   className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:shadow-lg transition-all duration-300 ease-out transform group-hover:scale-110`}
                   whileHover={{ 
                     rotate: 5,
                     transition: { duration: 0.3, ease: "easeOut" }
                   }}
                 >
                   <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                 </motion.div>
                 
                 <motion.h3 
                   className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors duration-300 ease-out"
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ duration: 0.6, delay: index * 0.1 }}
                   viewport={{ once: true }}
                 >
                   {feature.title}
                 </motion.h3>
                 
                 <motion.p 
                   className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 ease-out"
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                   viewport={{ once: true }}
                 >
                   {feature.description}
                 </motion.p>
               </div>

               {/* Focus ring for accessibility */}
               <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-focus-within:ring-red-500/50 transition-all duration-300 ease-out"></div>
             </motion.div>
           ))}
         </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
