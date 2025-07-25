import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const projects = [
    {
      title: "NASA Dashboard",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-nasa-282190.png",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "Use free NASA APIs in this dashboard"
    },
    {
      title: "McDonalds",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-mcdonalds-3-202791.png",
      image: "https://images.unsplash.com/photo-1619881590738-a111d176d906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "McDonalds Delivery App clone, developed on the FSW Week"
    },
    {
      title: "Note It",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-note-1439791-1214368.png",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      description: "Create notes quickly, save your theme and annotation settings!"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const handleNext = () => {
    setDirection(1);
    nextProject();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevProject();
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-light tracking-wider uppercase">Recent Projects</h2>
        <div className="flex space-x-2">
          <motion.button 
            onClick={handlePrev}
            className="w-7 h-7 flex items-center justify-center rounded-full border border-white/10"
            whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.3)" }}
          >
            <FaChevronLeft size={12} />
          </motion.button>
          <motion.button 
            onClick={handleNext}
            className="w-7 h-7 flex items-center justify-center rounded-full border border-white/10"
            whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.3)" }}
          >
            <FaChevronRight size={12} />
          </motion.button>
        </div>
      </div>
      
      <div className="relative h-[350px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full"
          >
            <div className="bg-black border border-white/10 rounded-lg overflow-hidden h-full">
              <div className="relative h-full">
                <img 
                  src={projects[currentIndex].image} 
                  alt={projects[currentIndex].title} 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <div className="flex items-center mb-2">
                    <div className="w-7 h-7 bg-white/10 rounded-md flex items-center justify-center mr-3">
                      <img src={projects[currentIndex].logo} alt={projects[currentIndex].title} className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-light">{projects[currentIndex].title}</h3>
                  </div>
                  <p className="text-xs text-gray-300 mb-3">{projects[currentIndex].description}</p>
                  <motion.button 
                    className="flex items-center text-xs font-light"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    View project <FaChevronRight size={8} className="ml-1" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectCarousel; 