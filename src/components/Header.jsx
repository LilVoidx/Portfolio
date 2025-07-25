import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden mr-3">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-lg font-bold tracking-wider">EDUARDEV</h1>
      </div>
      <div className="flex items-center">
        <motion.button 
          className="text-xs text-green-500 border border-green-500 rounded-full px-3 py-1 mr-4"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Schedule a Call
        </motion.button>
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs">EN</span>
        </motion.div>
      </div>
    </header>
  );
};

export default Header; 