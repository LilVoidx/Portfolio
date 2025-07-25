import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      {/* Points and icons row */}
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        {/* Left side - Points */}
        <div className="flex items-center">
          <span className="text-xs sm:text-sm text-gray-400">
            105/200 points
          </span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </motion.svg>
        </div>

        {/* Right side - Moon, EN, person icons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <motion.div
            className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </motion.div>
          <span className="text-xs sm:text-sm text-gray-400">EN</span>
          <motion.div
            className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Profile section with picture and text */}
      <div className="flex flex-col sm:flex-row">
        {/* Profile Picture - Much bigger */}
        <motion.div
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-transparent border border-white/10 overflow-hidden mb-4 sm:mb-0 sm:mr-6 lg:mr-10 flex-shrink-0 self-center sm:self-start"
          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/125039715?v=4"
            alt="Youssef Magdy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content - Aligned with the large profile picture */}
        <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I am Youssef Magdy,
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-gray-300 mb-2 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            a Software Engineer who doesn't give two shits if you like his work
            or nah but promise to always cook and deliver on time.
          </motion.p>
          <motion.p
            className="text-sm sm:text-base text-gray-400 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Kazan, Russia
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Profile; 