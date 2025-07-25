import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="flex justify-between items-start mb-8 sm:mb-12 lg:mb-16">
      {/* Left side - Logo and name */}
      <div className="flex items-center">
        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-700 rounded-full mr-3 sm:mr-4 lg:mr-5 flex items-center justify-center">
          <span className="text-white font-bold text-sm sm:text-lg lg:text-xl">
            e
          </span>
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-white">
          EDUARDEV
        </h1>
      </div>

      {/* Right side - Schedule a Call button */}
      <div className="flex items-center">
        <motion.button
          className="text-xs text-green-500 border border-green-500 rounded-full px-2 py-1 sm:px-3 sm:py-1"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(34, 197, 94, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="hidden sm:inline">Schedule a Call</span>
          <span className="sm:hidden">Call</span>
        </motion.button>
      </div>
    </header>
  );
};

export default Header; 