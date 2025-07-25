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
    <motion.div 
      className="mb-8 relative"
      variants={itemVariants}
    >
      <motion.div 
        className="absolute w-2.5 h-2.5 bg-white rounded-full -left-[5px] top-1.5 border border-black"
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(255,255,255,0.3)", "0 0 8px 2px rgba(255,255,255,0.7)", "0 0 0px 0px rgba(255,255,255,0.3)"]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-lg font-light">{item.degree || item.position}</h3>
        <p className="text-xs text-gray-400 font-light">{item.year}</p>
      </div>
      <p className="text-sm text-gray-300 font-light mb-1">{item.institution || item.company}</p>
      <p className="text-xs text-gray-400 mb-2 font-light">{item.description}</p>
      <div className="flex flex-wrap gap-3">
        {item.technologies.map((tech, techIndex) => (
          <motion.div 
            key={techIndex} 
            className="flex items-center"
            whileHover={{ 
              scale: 1.2,
              filter: "brightness(1.3)"
            }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="mb-8">
      <div className="flex mb-5 border-b border-white/10">
        <motion.button 
          className="flex items-center py-2 px-4 mr-6"
          animate={activeTab === 'education' ? 'active' : 'inactive'}
          variants={tabVariants}
          onClick={() => setActiveTab('education')}
          whileHover={{ color: "#ffffff" }}
        >
          <FaGraduationCap className="mr-2" size={14} />
          Education
        </motion.button>
        <motion.button 
          className="flex items-center py-2 px-4"
          animate={activeTab === 'work' ? 'active' : 'inactive'}
          variants={tabVariants}
          onClick={() => setActiveTab('work')}
          whileHover={{ color: "#ffffff" }}
        >
          <FaBriefcase className="mr-2" size={14} />
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
            <div className="relative pl-6 border-l border-white/10">
              {(activeTab === 'education' ? education : work).map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Timeline; 