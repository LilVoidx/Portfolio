import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub size={16} />, href: "#", label: "GitHub" },
    { icon: <FaTwitter size={16} />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin size={16} />, href: "#", label: "LinkedIn" },
    { icon: <FaEnvelope size={16} />, href: "#", label: "Email" }
  ];

  return (
    <footer className="text-center py-5 border-t border-white/10">
      <div className="flex justify-center space-x-5 mb-3">
        {socialLinks.map((social, index) => (
          <motion.a 
            key={index}
            href={social.href} 
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            transition={{ type: "spring", stiffness: 400 }}
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
      <p className="text-gray-500 text-xs font-light">my socials</p>
    </footer>
  );
};

export default Footer; 