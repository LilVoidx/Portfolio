import React, { useMemo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiMongodb,
} from "react-icons/si";

const TechStack = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Show 6 items per row

  const technologies = useMemo(
    () => [
      { name: "Next.js", icon: <SiNextdotjs size={28} /> },
      { name: "HTML 5", icon: <SiHtml5 size={28} /> },
      { name: "CSS 3", icon: <SiCss3 size={28} /> },
      { name: "TypeScript", icon: <SiTypescript size={28} /> },
      { name: "TailwindCSS", icon: <SiTailwindcss size={28} /> },
      { name: "Supabase", icon: <SiSupabase size={28} /> },
      { name: "React", icon: <SiReact size={28} /> },
      { name: "JavaScript", icon: <SiJavascript size={28} /> },
      { name: "Node.js", icon: <SiNodedotjs size={28} /> },
      { name: "Git", icon: <SiGit size={28} /> },
      { name: "Docker", icon: <SiDocker size={28} /> },
      { name: "MongoDB", icon: <SiMongodb size={28} /> },
    ],
    []
  );

  const totalPages = Math.ceil(technologies.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTechnologies = technologies.slice(startIndex, endIndex);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  return (
    <div className="mb-8 w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-light tracking-wider uppercase">
          Technologies
        </h2>
        <div className="flex space-x-2">
          <motion.button
            onClick={prevPage}
            className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full border border-white/10 interactive"
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <FaChevronLeft size={10} className="sm:w-3 sm:h-3" />
          </motion.button>
          <motion.button
            onClick={nextPage}
            className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full border border-white/10 interactive"
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <FaChevronRight size={10} className="sm:w-3 sm:h-3" />
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {currentTechnologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-black border border-white/10 p-3 sm:p-4 rounded-lg w-full h-[80px] sm:h-[100px] flex flex-col items-center justify-center interactive"
            initial={{ opacity: 0.7 }}
            whileHover={{
              scale: 1.03,
              borderColor: "rgba(255,255,255,0.3)",
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                filter: "brightness(1.2)",
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {tech.icon}
            </motion.div>
            <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-light">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
