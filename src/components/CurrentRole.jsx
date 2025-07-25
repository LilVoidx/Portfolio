import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import PreviousRoles from './PreviousRoles';

const CurrentRole = () => {
  const [showPreviousRoles, setShowPreviousRoles] = useState(false);

  const currentTechnologies = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xs font-light tracking-wider uppercase mb-2 text-gray-400">Currently</h2>
      <div className="flex justify-between items-start">
        <div>
          <div className="mb-2">
            <h3 className="text-lg font-light">Frontend Developer</h3>
            <p className="text-xs text-gray-400">2024 - PRESENT</p>
          </div>
          <p className="text-xs text-gray-300 mb-3 font-light">
            React and Next.js application development for the public sector, focused on accessibility, security, and digital
            innovation.
          </p>
          <div className="flex items-center mb-3">
            {currentTechnologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="mr-3"
                whileHover={{ 
                  scale: 1.2,
                  filter: "brightness(1.3)"
                }}
              >
                {React.cloneElement(tech.icon, { size: 16 })}
              </motion.div>
            ))}
          </div>
          <motion.button 
            className="text-xs text-gray-400 mt-1 flex items-center"
            whileHover={{ color: "#ffffff" }}
            onClick={() => setShowPreviousRoles(!showPreviousRoles)}
          >
            <motion.div
              animate={{ rotate: showPreviousRoles ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="mr-1" size={10} />
            </motion.div>
            Previous roles
          </motion.button>
          
          <PreviousRoles isVisible={showPreviousRoles} />
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
            <span className="text-xs font-light">Govone</span>
          </div>
          <span className="text-xs text-gray-400 font-light">Remote</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentRole; 