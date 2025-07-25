import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const containerRef = useRef(null);
  const lastMouseMoveRef = useRef(null);
  const animationRef = useRef(null);

  // Throttle mouse move events
  const throttledMouseMove = useCallback((e) => {
    if (containerRef.current) {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      setIsMoving(true);

      if (lastMouseMoveRef.current) {
        clearTimeout(lastMouseMoveRef.current);
      }

      lastMouseMoveRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 200);
    }
  }, []);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      // Much fewer stars for cleaner look
      for (let i = 0; i < 30; i++) {
        const brightness = Math.random();
        newStars.push({
          id: i,
          size: Math.random() * 2 + 1, // 1-3px stars
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          animationDuration: Math.random() * 8 + 4, // Faster animations
          initialX: Math.random() * window.innerWidth,
          initialY: Math.random() * window.innerHeight,
          brightness: brightness > 0.7 ? 0.8 : brightness > 0.4 ? 0.6 : 0.4,
          // Much larger movement ranges
          floatX: (Math.random() - 0.5) * 0.8,
          floatY: (Math.random() - 0.5) * 0.8,
          floatDuration: Math.random() * 10 + 6, // Faster float duration
        });
      }
      setStars(newStars);
    };

    generateStars();

    // Throttled resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(generateStars, 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", throttledMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", throttledMouseMove);
      if (lastMouseMoveRef.current) {
        clearTimeout(lastMouseMoveRef.current);
      }
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    };
  }, [throttledMouseMove]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => {
        // Calculate mouse influence - stars move toward mouse direction
        const mouseInfluence = isMoving ? 1.2 : 0; // Increased influence
        const moveX = isMoving
          ? (mousePosition.x / window.innerWidth - 0.5) * mouseInfluence
          : 0;
        const moveY = isMoving
          ? (mousePosition.y / window.innerHeight - 0.5) * mouseInfluence
          : 0;

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
              // Simple, clean look without glow
              backgroundColor: "white",
              borderRadius: "50%",
            }}
            animate={{
              opacity: [
                star.brightness * 0.5,
                star.brightness,
                star.brightness * 0.5,
              ],
              // Much larger floating movement
              x: [star.floatX * 150, -star.floatX * 150, star.floatX * 150],
              y: [star.floatY * 150, -star.floatY * 150, star.floatY * 150],
              // Mouse influence - stars move toward mouse
              translateX: moveX * (star.size * 3),
              translateY: moveY * (star.size * 3),
            }}
            transition={{
              opacity: {
                duration: star.animationDuration,
                repeat: Infinity,
                ease: "easeInOut",
              },
              x: {
                duration: star.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: star.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
              },
              translateX: { duration: 0.6, ease: "easeOut" },
              translateY: { duration: 0.6, ease: "easeOut" },
            }}
          />
        );
      })}
    </div>
  );
};

export default StarBackground;
