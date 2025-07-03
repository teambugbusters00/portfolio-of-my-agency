import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

const FloatingText: React.FC<FloatingTextProps> = ({ 
  texts, 
  className = '',
  interval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative h-20 flex items-center justify-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ 
            opacity: 0, 
            y: 50,
            scale: 0.8,
            rotateX: -90
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: 1,
            rotateX: 0
          }}
          exit={{ 
            opacity: 0, 
            y: -50,
            scale: 0.8,
            rotateX: 90
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] text-center leading-tight">
            {texts[currentIndex]}
          </span>
        </motion.div>
      </AnimatePresence>
      
      {/* Holographic effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse" />
    </div>
  );
};

export default FloatingText;