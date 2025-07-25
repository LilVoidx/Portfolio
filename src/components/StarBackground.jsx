import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const containerRef = useRef(null);
  const lastMouseMoveRef = useRef(null);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      // Reduced number of stars for better performance
      for (let i = 0; i < 120; i++) {
        const brightness = Math.random();
        // Make stars smaller and less bright
        newStars.push({
          id: i,
          size: Math.random() * 1.5 + 0.5, // Smaller stars
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          animationDuration: Math.random() * 5 + 3,
          initialX: Math.random() * window.innerWidth,
          initialY: Math.random() * window.innerHeight,
          // Reduced brightness
          brightness: brightness > 0.9 ? 0.8 : brightness > 0.7 ? 0.6 : 0.3,
          velocityX: (Math.random() - 0.5) * 0.2,
          velocityY: (Math.random() - 0.5) * 0.2,
        });
      }
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
        setIsMoving(true);
        
        // Clear any existing timeout
        if (lastMouseMoveRef.current) {
          clearTimeout(lastMouseMoveRef.current);
        }
        
        // Set a timeout to reset isMoving after mouse stops
        lastMouseMoveRef.current = setTimeout(() => {
          setIsMoving(false);
        }, 100);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop for continuous star movement
    const animationFrame = requestAnimationFrame(function animate() {
      setStars(prevStars => {
        return prevStars.map(star => {
          let newX = star.x + star.velocityX;
          let newY = star.y + star.velocityY;
          
          // Wrap around screen edges
          if (newX < 0) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = 0;
          if (newY < 0) newY = window.innerHeight;
          if (newY > window.innerHeight) newY = 0;
          
          return {
            ...star,
            x: newX,
            y: newY
          };
        });
      });
      
      requestAnimationFrame(animate);
    });
    
    return () => {
      window.removeEventListener('resize', generateStars);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
      if (lastMouseMoveRef.current) {
        clearTimeout(lastMouseMoveRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0">
      {stars.map((star) => {
        // Calculate movement based on mouse position when mouse is moving
        const moveX = isMoving ? (mousePosition.x / window.innerWidth - 0.5) * 20 : 0;
        const moveY = isMoving ? (mousePosition.y / window.innerHeight - 0.5) * 20 : 0;
        
        return (
          <motion.div
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}px`,
              top: `${star.y}px`,
              opacity: star.brightness,
              // Reduced glow effect
              boxShadow: `0 0 ${star.size}px ${star.size / 2}px rgba(255, 255, 255, ${star.brightness * 0.5})`,
            }}
            animate={{
              opacity: [star.brightness * 0.6, star.brightness, star.brightness * 0.6],
              x: isMoving ? moveX * (star.size / 3) : 0,
              y: isMoving ? moveY * (star.size / 3) : 0,
            }}
            transition={{
              opacity: {
                duration: star.animationDuration,
                repeat: Infinity,
                ease: "easeInOut"
              },
              x: { duration: 0.3, ease: "easeOut" },
              y: { duration: 0.3, ease: "easeOut" }
            }}
          />
        );
      })}
    </div>
  );
};

export default StarBackground; 