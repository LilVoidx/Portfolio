import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <>
      {/* Points */}
      <div className="flex justify-between items-center mb-5">
        <div className="text-xs text-gray-400 flex items-center">
          <span>125/150 points</span>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-3 w-3 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </motion.svg>
        </div>
      </div>
      
      {/* Profile Section */}
      <div className="flex mb-8">
        <motion.div 
          className="w-20 h-20 rounded-full bg-transparent border border-white/10 overflow-hidden mr-5 flex-shrink-0"
          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <motion.h2 
            className="text-xl font-light mb-1.5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I am Eduardo Rigo,
          </motion.h2>
          <motion.p 
            className="text-sm text-gray-300 mb-1.5 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            a frontend developer, specializing in UI design and creating engaging user
            experiences with a strong attention to detail.
          </motion.p>
          <motion.p 
            className="text-xs text-gray-400 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Buenos Aires, Argentina
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Profile; 