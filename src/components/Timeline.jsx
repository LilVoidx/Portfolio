import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiReact, SiPython, SiNodedotjs, 
  SiCplusplus, SiDocker, SiGo, SiAmazonaws 
} from 'react-icons/si';

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('work');

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      year: "2020-2022",
      description: "Specialized in Artificial Intelligence and Machine Learning",
      technologies: [
        { name: "React", icon: <SiReact size={16} /> },
        { name: "TypeScript", icon: <SiTypescript size={16} /> },
        { name: "Python", icon: <SiPython size={16} /> }
      ]
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "MIT",
      year: "2016-2020",
      description: "Graduated with honors, GPA 3.9/4.0",
      technologies: [
        { name: "JavaScript", icon: <SiJavascript size={16} /> },
        { name: "Node.js", icon: <SiNodedotjs size={16} /> },
        { name: "C++", icon: <SiCplusplus size={16} /> }
      ]
    }
  ];

  const work = [
    {
      position: "Senior Software Engineer",
      company: "Google",
      year: "2022-Present",
      description: "Leading frontend development for Google Cloud Platform",
      technologies: [
        { name: "React", icon: <SiReact size={16} /> },
        { name: "TypeScript", icon: <SiTypescript size={16} /> },
        { name: "Docker", icon: <SiDocker size={16} /> },
        { name: "Go", icon: <SiGo size={16} /> }
      ]
    },
    {
      position: "Software Engineer",
      company: "Microsoft",
      year: "2020-2022",
      description: "Full-stack development for Azure services",
      technologies: [
        { name: "JavaScript", icon: <SiJavascript size={16} /> },
        { name: "Python", icon: <SiPython size={16} /> },
        { name: "AWS", icon: <SiAmazonaws size={16} /> }
      ]
    }
  ];

  const tabVariants = {
    active: { 
      borderBottom: "2px solid white",
      color: "#ffffff",
      fontWeight: 400
    },
    inactive: { 
      borderBottom: "2px solid transparent",
      color: "#9ca3af",
      fontWeight: 300
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.4,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const TimelineItem = ({ item, index }) => (
    <motion.div className="mb-8 sm:mb-12 relative" variants={itemVariants}>
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>

      {/* Glowing ball positioned on the line */}
      <motion.div
        className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full left-[-4px] sm:left-[-6px] top-3 border border-black z-10"
        animate={{
          boxShadow: [
            "0 0 0px 0px rgba(255,255,255,0.3)",
            "0 0 8px 2px rgba(255,255,255,0.7)",
            "0 0 0px 0px rgba(255,255,255,0.3)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content with proper spacing and new layout */}
      <div className="pl-6 sm:pl-8">
        {/* Company/Institution Name */}
        <h3 className="text-lg sm:text-xl font-light text-white mb-1">
          {item.institution || item.company}
        </h3>

        {/* Date Range */}
        <p className="text-xs sm:text-sm text-gray-400 font-light mb-8 sm:mb-12">
          {item.year}
        </p>

        {/* Job Title/Degree */}
        <h4 className="text-base sm:text-lg font-light text-white mb-2 sm:mb-3">
          {item.degree || item.position}
        </h4>

        {/* Job Description */}
        <p className="text-xs sm:text-sm text-gray-300 font-light mb-3 sm:mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {item.technologies.map((tech, techIndex) => (
            <motion.div
              key={techIndex}
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
    </motion.div>
  );

  return (
    <div className="mb-8">
      <div className="flex mb-4 sm:mb-6 border-b border-white/10 overflow-x-auto">
        <motion.button
          className="flex items-center py-2 px-3 sm:px-4 mr-4 sm:mr-6 text-sm sm:text-lg whitespace-nowrap"
          animate={activeTab === "education" ? "active" : "inactive"}
          variants={tabVariants}
          onClick={() => setActiveTab("education")}
          whileHover={{ color: "#ffffff" }}
        >
          <FaGraduationCap className="mr-1 sm:mr-2" size={16} />
          Education
        </motion.button>
        <motion.button
          className="flex items-center py-2 px-3 sm:px-4 text-sm sm:text-lg whitespace-nowrap"
          animate={activeTab === "work" ? "active" : "inactive"}
          variants={tabVariants}
          onClick={() => setActiveTab("work")}
          whileHover={{ color: "#ffffff" }}
        >
          <FaBriefcase className="mr-1 sm:mr-2" size={16} />
          Work
        </motion.button>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
            className="relative"
          >
            <div className="relative">
              {(activeTab === "education" ? education : work).map(
                (item, index) => (
                  <TimelineItem key={index} item={item} index={index} />
                )
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Timeline; 