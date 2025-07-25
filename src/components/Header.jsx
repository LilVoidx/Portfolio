import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="flex justify-between items-start mb-8 sm:mb-12 lg:mb-16">
      {/* Left side - Logo and name */}
      <div className="flex items-center">
        <div className="mr-3 sm:mr-4 lg:mr-5 flex items-center justify-center">
          <span className="text-green-500 font-bold text-lg sm:text-xl lg:text-2xl">
            &lt;/&gt;
          </span>
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-white">
          VOID.DEV
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