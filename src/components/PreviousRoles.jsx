import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiLaravel,
  SiWordpress,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const PreviousRoles = ({ isVisible }) => {
  const previousRoles = [
    {
      position: "Software Developer",
      company: "Grumft",
      location: "Sao Paulo",
      year: "2022 - 2024",
      description:
        "Development of websites and web applications using React, TypeScript, and Next.js, including dashboards and management panels. Systems management with Node.js, version control with Git and AWS, and backend in Laravel, with experience in WordPress.",
      technologies: [
        { name: "JavaScript", icon: <SiJavascript size={16} /> },
        { name: "Laravel", icon: <SiLaravel size={16} /> },
        { name: "Git", icon: <FaGitAlt size={16} /> },
        { name: "WordPress", icon: <SiWordpress size={16} /> },
      ],
      logo: "G",
    },
    {
      position: "System Analyst",
      company: "GOIDEA",
      location: "Sao Paulo",
      year: "2019 - 2022",
      description:
        "Development of small to medium applications, such as responsive apps and websites. Responsible for creating web application prototypes, managing, and automating services.",
      technologies: [
        { name: "HTML5", icon: <SiHtml5 size={16} /> },
        { name: "CSS3", icon: <SiCss3 size={16} /> },
        { name: "JavaScript", icon: <SiJavascript size={16} /> },
      ],
      logo: "GO",
    },
  ];

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
          <div className="mt-6 sm:mt-8 ml-2 sm:ml-4">
            {previousRoles.map((role, roleIndex) => (
              <div key={roleIndex} className="mb-8 sm:mb-12 last:mb-0">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div className="flex-1">
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                        {role.position}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">
                        {role.year}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-5 font-light leading-relaxed">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {role.technologies.map((tech, index) => (
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
                      <div className="w-3 h-3 bg-gray-500 rounded-sm mr-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {role.logo}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-light text-gray-400">
                        {role.company}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-light">
                      {role.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreviousRoles; 