import React from 'react';
import { motion } from 'framer-motion';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: number;
}

const GlowingCard: React.FC<GlowingCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  hoverScale = 1.02
}) => {
  const glowColors = {
    blue: 'shadow-blue-500/25 hover:shadow-blue-500/40',
    purple: 'shadow-purple-500/25 hover:shadow-purple-500/40',
    cyan: 'shadow-cyan-500/25 hover:shadow-cyan-500/40',
    green: 'shadow-green-500/25 hover:shadow-green-500/40',
    pink: 'shadow-pink-500/25 hover:shadow-pink-500/40',
  };

  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        relative group cursor-pointer
        bg-gradient-to-br from-gray-900/80 to-gray-800/80 
        backdrop-blur-xl border border-gray-700/50
        rounded-2xl overflow-hidden
        shadow-2xl ${glowColors[glowColor as keyof typeof glowColors]}
        hover:border-gray-600/50 transition-all duration-500
        ${className}
      `}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default GlowingCard;