import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [mouseDirection, setMouseDirection] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [permanentOffset, setPermanentOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const lastMouseMoveRef = useRef(null);
  const lastMousePositionRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });

  // Track mouse/touch direction with velocity
  const handlePointerMove = useCallback(
    (e) => {
      // Disable mouse following on mobile
      if (isMobile) return;

      if (containerRef.current) {
        const { clientX, clientY } = e;
        const currentPosition = { x: clientX, y: clientY };

        // Calculate direction and velocity
        if (
          lastMousePositionRef.current.x !== 0 &&
          lastMousePositionRef.current.y !== 0
        ) {
          const deltaX = currentPosition.x - lastMousePositionRef.current.x;
          const deltaY = currentPosition.y - lastMousePositionRef.current.y;

          // Calculate velocity (speed of movement)
          const velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

          if (velocity > 1) {
            // Lower threshold for mobile
            // Normalize the direction vector
            const magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (magnitude > 0) {
              setMouseDirection({
                x: deltaX / magnitude,
                y: deltaY / magnitude,
              });
              velocityRef.current = { x: deltaX, y: deltaY };

              // Add to permanent offset - this stays forever
              setPermanentOffset((prev) => ({
                x: prev.x + deltaX * 0.1, // Reduced sensitivity for smoother movement
                y: prev.y + deltaY * 0.1,
              }));
            }
          }
        }

        lastMousePositionRef.current = currentPosition;
        setIsMoving(true);

        if (lastMouseMoveRef.current) {
          clearTimeout(lastMouseMoveRef.current);
        }

        lastMouseMoveRef.current = setTimeout(() => {
          setIsMoving(false);
          setMouseDirection({ x: 0, y: 0 });
          velocityRef.current = { x: 0, y: 0 };
        }, 300); // Increased timeout for smoother movement
      }
    },
    [isMobile]
  );

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      return mobile;
    };

    const generateStars = () => {
      const newStars = [];
      const mobile = checkMobile();
      // Much fewer stars for mobile performance
      const starCount = mobile ? 50 : 200; // Reduced from 150 to 50 for mobile

      for (let i = 0; i < starCount; i++) {
        const brightness = Math.random();
        newStars.push({
          id: i,
          size: Math.random() * 3 + 0.5, // Smaller minimum size for mobile
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          animationDuration: Math.random() * 8 + 4,
          initialX: Math.random() * window.innerWidth,
          initialY: Math.random() * window.innerHeight,
          brightness: brightness > 0.7 ? 0.9 : brightness > 0.4 ? 0.7 : 0.5, // Brighter stars
          // Enhanced floating movement
          floatX: (Math.random() - 0.5) * 0.8,
          floatY: (Math.random() - 0.5) * 0.8,
          floatDuration: Math.random() * 15 + 10, // Longer duration
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

    // Only add mouse events on desktop
    if (!isMobile) {
      window.addEventListener("mousemove", handlePointerMove, {
        passive: true,
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      if (lastMouseMoveRef.current) {
        clearTimeout(lastMouseMoveRef.current);
      }
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    };
  }, [handlePointerMove, isMobile]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => {
        // Disable mouse following on mobile
        const mouseInfluence = isMobile ? 0 : isMoving ? 1.5 : 0;
        const currentMoveX = isMobile
          ? 0
          : mouseDirection.x * mouseInfluence * (star.size * 1.5);
        const currentMoveY = isMobile
          ? 0
          : mouseDirection.y * mouseInfluence * (star.size * 1.5);

        // Disable permanent offset on mobile
        const permanentMoveX = isMobile
          ? 0
          : permanentOffset.x * (star.size * 0.3);
        const permanentMoveY = isMobile
          ? 0
          : permanentOffset.y * (star.size * 0.3);

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
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${
                star.brightness * 0.5
              })`, // Add glow effect
            }}
            animate={{
              opacity: [
                star.brightness * 0.3,
                star.brightness,
                star.brightness * 0.3,
              ],
              x: [star.floatX * 150, -star.floatX * 150, star.floatX * 150], // Increased movement range
              y: [star.floatY * 150, -star.floatY * 150, star.floatY * 150],
              translateX: permanentMoveX + currentMoveX,
              translateY: permanentMoveY + currentMoveY,
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
              translateX: { duration: isMobile ? 0 : 0.8, ease: "easeOut" }, // No transition on mobile
              translateY: { duration: isMobile ? 0 : 0.8, ease: "easeOut" },
            }}
          />
        );
      })}
    </div>
  );
};

export default StarBackground;
