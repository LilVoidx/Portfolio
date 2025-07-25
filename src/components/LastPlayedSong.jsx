import React from 'react';
import { motion } from 'framer-motion';

const LastPlayedSong = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-light tracking-wider uppercase">
          Last Played Song
        </h2>
        <motion.button
          className="text-xs text-gray-400 flex items-center"
          whileHover={{ scale: 1.05, color: "#fff" }}
        >
          <span className="mr-1">Refresh</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </motion.button>
      </div>
      <motion.div
        className="bg-black border border-white/10 p-3 rounded-lg"
        whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
      >
        <div className="flex items-center">
          <div className="w-9 h-9 bg-gray-700 rounded-full overflow-hidden mr-3 flex-shrink-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/58/Drake_-_Search_%26_Rescue.png"
              alt="Search & Rescue album cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium">Search & Rescue</p>
            <p className="text-xs text-gray-400">Drake</p>
            <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LastPlayedSong; 