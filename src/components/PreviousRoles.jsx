import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiReact, SiJavascript, SiCss3 } from 'react-icons/si';

const PreviousRoles = ({ isVisible }) => {
  const previousRole = {
    position: "Frontend Developer",
    company: "Amazon",
    year: "2018-2020",
    description: "Developed and maintained e-commerce web applications using React and Redux",
    technologies: [
      { name: "React", icon: <SiReact size={16} /> },
      { name: "JavaScript", icon: <SiJavascript size={16} /> },
      { name: "CSS", icon: <SiCss3 size={16} /> },
    ]
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="mt-5 pt-5 border-t border-white/10">
            <div className="flex justify-between items-start">
              <div>
                <div className="mb-2">
                  <h3 className="text-lg font-light">{previousRole.position}</h3>
                  <p className="text-xs text-gray-400">{previousRole.year}</p>
                </div>
                <p className="text-xs text-gray-300 mb-3 font-light">
                  {previousRole.description}
                </p>
                <div className="flex items-center mb-3">
                  {previousRole.technologies.map((tech, index) => (
                    <motion.div 
                      key={index}
                      className="mr-3"
                      whileHover={{ 
                        scale: 1.2,
                        filter: "brightness(1.3)"
                      }}
                    >
                      {tech.icon}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
                  <span className="text-xs font-light">{previousRole.company}</span>
                </div>
                <span className="text-xs text-gray-400 font-light">Remote</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreviousRoles; 