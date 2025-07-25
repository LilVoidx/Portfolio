import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import PreviousRoles from "./PreviousRoles";

const CurrentRole = () => {
  const [showPreviousRoles, setShowPreviousRoles] = useState(false);

  const currentTechnologies = [
    { name: "Next.js", icon: <SiNextdotjs size={16} /> },
    { name: "TypeScript", icon: <SiTypescript size={16} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={16} /> },
  ];

  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      {/* CURRENTLY heading */}
      <h2 className="text-xs sm:text-sm font-light tracking-wider uppercase mb-4 sm:mb-6 text-gray-400">
        Currently
      </h2>

      {/* Current Role */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 sm:mb-8">
        <div className="flex-1">
          <div className="mb-3 sm:mb-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Frontend Developer
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mt-1">
              2024 - PRESENT
            </p>
          </div>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-5 font-light leading-relaxed">
            React and Next.js application development for the public sector,
            focused on accessibility, security, and digital innovation.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {currentTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                whileHover={{
                  scale: 1.2,
                  filter: "brightness(1.3)",
                }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Company info - right aligned */}
        <div className="flex flex-col items-start lg:items-end mt-4 lg:mt-0 lg:ml-8">
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 bg-green-500 rounded-sm mr-2 flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span className="text-sm sm:text-base font-light text-gray-400">
              Govone
            </span>
          </div>
          <span className="text-xs sm:text-sm text-gray-400 font-light">
            Remote
          </span>
        </div>
      </div>

      {/* Previous roles link */}
      <motion.button
        className="text-sm sm:text-base text-gray-400 mt-4 sm:mt-6 flex items-center interactive"
        whileHover={{ color: "#ffffff" }}
        onClick={() => setShowPreviousRoles(!showPreviousRoles)}
      >
        <motion.div
          animate={{ rotate: showPreviousRoles ? -90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronLeft className="mr-2" size={12} />
        </motion.div>
        Previous roles
      </motion.button>

      {/* Previous Roles */}
      <PreviousRoles isVisible={showPreviousRoles} />
    </div>
  );
};

export default CurrentRole; 