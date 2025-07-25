import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiVuedotjs,
  SiNuxtdotjs,
  SiNestjs,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const PreviousRoles = ({ isVisible }) => {
  const previousRoles = [
    {
      position: "Fullstack Developer",
      company: "Moscow Anastesia Company",
      location: "Moscow",
      year: "2024 - 2025",
      description:
        "Built a sick ecommerce site for Ms Olympia products using Vue.js and Nuxt.js. Backend was crafted with Nest.js and TypeScript. Created a complete online shopping experience that actually works and looks good - no broken carts here!",
      technologies: [
        { name: "Vue.js", icon: <SiVuedotjs size={16} /> },
        { name: "Nuxt.js", icon: <SiNuxtdotjs size={16} /> },
        { name: "Nest.js", icon: <SiNestjs size={16} /> },
        { name: "TypeScript", icon: <SiTypescript size={16} /> },
      ],
      logo: "M",
    },
    {
      position: "Freelance Developer",
      company: "Book Store Management System",
      location: "Remote",
      year: "2024 - 2025",
      description:
        "Whipped up a quick book store management system using Next.js. Made inventory management and sales tracking actually bearable for the client. Delivered a system that didn't make them want to throw their computer out the window.",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs size={16} /> },
        { name: "JavaScript", icon: <SiJavascript size={16} /> },
        { name: "Git", icon: <FaGitAlt size={16} /> },
      ],
      logo: "B",
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