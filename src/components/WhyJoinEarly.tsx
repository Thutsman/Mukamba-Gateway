import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Home, Globe } from 'lucide-react';

interface WhyJoinEarlyProps {
  onSignUp: () => void;
}

const WhyJoinEarly: React.FC<WhyJoinEarlyProps> = ({ onSignUp }) => {
  const benefits = [
    {
      icon: DollarSign,
      title: "$0 Fees",
      description: "By joining early access you get $0 charges for onboarding up to 10 units before launch",
      color: "text-red-500"
    },
    {
      icon: Zap,
      title: "6 months Concierge Access for\u00A0free",
      description: "Buyers joining early get 6 months free concierge access to buying homes in instalments",
      color: "text-red-500"
    },
    {
      icon: Home,
      title: "Notifications before anyone else",
      description: "All instalment plan houses in SA and Zim straight to your inbox before launch",
      color: "text-red-500"
    },
    {
      icon: Globe,
      title: "Diaspora Friendly",
      description: "Seamless international payments and remote property management",
      color: "text-red-500"
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
        duration: 0.6
      }
    }
  };

  return (
    <section id="why-join-early" className="section-padding bg-gray-800 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
            Why Join Early Access?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Be among the first to experience the future of property transactions in Zimbabwe
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 rounded-xl p-4 sm:p-6 text-center group hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
            >
                             <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-[#7f1518] flex items-center justify-center group-hover:bg-[#6a1215] transition-all duration-300">
                 <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
               </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 leading-tight card-title">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button 
            onClick={onSignUp}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px] w-full sm:w-auto"
          >
            Join the Early Access List
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinEarly;
