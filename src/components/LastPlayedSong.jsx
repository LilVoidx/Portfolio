import React from 'react';
import { motion } from 'framer-motion';

const LastPlayedSong = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-light tracking-wider uppercase">Last Played Song</h2>
        <motion.button 
          className="text-xs text-gray-400 flex items-center"
          whileHover={{ scale: 1.05, color: "#fff" }}
        >
          <span className="mr-1">Refresh</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
              alt="Album cover" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium">Destination Calabria - Radio Edit</p>
            <p className="text-xs text-gray-400">Alex Gaudino, Crystal Waters</p>
            <p className="text-xs text-gray-500 mt-1">19 hours ago</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LastPlayedSong; 