import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiNextdotjs, SiHtml5, SiCss3, SiTypescript, SiTailwindcss, 
  SiSupabase, SiReact 
} from 'react-icons/si';

const TechStack = () => {
  const technologies = [
    { name: "Next.js", icon: <SiNextdotjs size={24} /> },
    { name: "HTML 5", icon: <SiHtml5 size={24} /> },
    { name: "CSS 3", icon: <SiCss3 size={24} /> },
    { name: "TypeScript", icon: <SiTypescript size={24} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={24} /> },
    { name: "Supabase", icon: <SiSupabase size={24} /> },
    { name: "React", icon: <SiReact size={24} /> },
  ];

  return (
    <div className="mb-8 w-full">
      <h2 className="text-xs font-light tracking-wider uppercase mb-4">Technologies</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <motion.div 
            key={index} 
            className="bg-black border border-white/10 p-3 rounded-lg w-[80px] h-[80px] flex flex-col items-center justify-center"
            initial={{ opacity: 0.7 }}
            whileHover={{ 
              scale: 1.05, 
              borderColor: "rgba(255,255,255,0.3)",
              opacity: 1
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.2,
                filter: "brightness(1.3)"
              }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              {tech.icon}
            </motion.div>
            <span className="mt-2 text-xs font-light">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack; 