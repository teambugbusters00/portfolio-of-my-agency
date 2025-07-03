import React from 'react';
import { motion } from 'framer-motion';

interface HolographicTextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

const HolographicText: React.FC<HolographicTextProps> = ({ 
  children, 
  className = '',
  size = 'lg'
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl'
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Main text */}
      <span className={`
        relative z-10 font-bold ${sizeClasses[size]}
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
        bg-clip-text text-transparent
        drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]
      `}>
        {children}
      </span>
      
      {/* Holographic effect layers */}
      <span className={`
        absolute inset-0 font-bold ${sizeClasses[size]}
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
        bg-clip-text text-transparent
        blur-sm opacity-50
        animate-pulse
      `}>
        {children}
      </span>
      
      <span className={`
        absolute inset-0 font-bold ${sizeClasses[size]}
        bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 
        bg-clip-text text-transparent
        blur-md opacity-30
        animate-pulse
        animation-delay-500
      `}>
        {children}
      </span>
    </motion.div>
  );
};

export default HolographicText;