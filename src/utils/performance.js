// Performance optimization utilities

/**
 * Throttle function calls to limit execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Debounce function calls to delay execution until after a pause
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Check if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Check if device is low-end based on hardware concurrency
 * @returns {boolean} True if device appears to be low-end
 */
export const isLowEndDevice = () => {
  return navigator.hardwareConcurrency <= 4;
};

/**
 * Optimize animation settings based on device capabilities
 * @returns {Object} Optimized animation settings
 */
export const getOptimizedAnimationSettings = () => {
  const reducedMotion = prefersReducedMotion();
  const lowEnd = isLowEndDevice();

  if (reducedMotion) {
    return {
      duration: 0.01,
      stiffness: 100,
      damping: 10,
      mass: 1,
    };
  }

  if (lowEnd) {
    return {
      duration: 0.3,
      stiffness: 200,
      damping: 20,
      mass: 1,
    };
  }

  return {
    duration: 0.2,
    stiffness: 400,
    damping: 25,
    mass: 1,
  };
};
