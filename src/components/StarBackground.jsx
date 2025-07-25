import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [mouseDirection, setMouseDirection] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [permanentOffset, setPermanentOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const lastMouseMoveRef = useRef(null);
  const lastMousePositionRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });

  // Track mouse direction with velocity
  const handleMouseMove = useCallback((e) => {
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

        if (velocity > 2) {
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
              x: prev.x + deltaX * 0.2,
              y: prev.y + deltaY * 0.2,
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
      }, 150);
    }
  }, []);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      // More stars for better effect
      for (let i = 0; i < 100; i++) {
        const brightness = Math.random();
        newStars.push({
          id: i,
          size: Math.random() * 2 + 1,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          animationDuration: Math.random() * 8 + 4,
          initialX: Math.random() * window.innerWidth,
          initialY: Math.random() * window.innerHeight,
          brightness: brightness > 0.7 ? 0.8 : brightness > 0.4 ? 0.6 : 0.4,
          // Restored floating movement
          floatX: (Math.random() - 0.5) * 0.6,
          floatY: (Math.random() - 0.5) * 0.6,
          floatDuration: Math.random() * 12 + 8,
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
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (lastMouseMoveRef.current) {
        clearTimeout(lastMouseMoveRef.current);
      }
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    };
  }, [handleMouseMove]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => {
        // Current mouse movement
        const mouseInfluence = isMoving ? 2 : 0;
        const currentMoveX =
          mouseDirection.x * mouseInfluence * (star.size * 2);
        const currentMoveY =
          mouseDirection.y * mouseInfluence * (star.size * 2);

        // Permanent offset that never resets
        const permanentMoveX = permanentOffset.x * (star.size * 0.5);
        const permanentMoveY = permanentOffset.y * (star.size * 0.5);

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
            }}
            animate={{
              opacity: [
                star.brightness * 0.5,
                star.brightness,
                star.brightness * 0.5,
              ],
              x: [star.floatX * 100, -star.floatX * 100, star.floatX * 100],
              y: [star.floatY * 100, -star.floatY * 100, star.floatY * 100],
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
              translateX: { duration: 0.2, ease: "easeOut" },
              translateY: { duration: 0.2, ease: "easeOut" },
            }}
          />
        );
      })}
    </div>
  );
};

export default StarBackground;
