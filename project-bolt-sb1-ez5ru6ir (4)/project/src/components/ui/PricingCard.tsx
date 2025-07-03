import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { PaymentPackage } from '../../lib/stripe';
import GlowingCard from './GlowingCard';
import CyberButton from './CyberButton';
import HolographicText from './HolographicText';

interface PricingCardProps {
  package: PaymentPackage;
  onSelect: (packageId: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ package: pkg, onSelect }) => {
  return (
    <GlowingCard 
      className={`p-8 relative ${pkg.popular ? 'ring-2 ring-cyan-500/50' : ''}`}
      glowColor={pkg.popular ? 'cyan' : 'blue'}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
            <Zap className="h-4 w-4" />
            <span>MOST POPULAR</span>
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <HolographicText size="xl" className="mb-4">
          {pkg.name}
        </HolographicText>
        <p className="text-gray-400 mb-6">{pkg.description}</p>
        
        <div className="mb-6">
          <span className="text-5xl font-bold text-white">${pkg.price.toLocaleString()}</span>
          <span className="text-gray-400 ml-2">USD</span>
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        {pkg.features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3"
          >
            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Check className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-300">{feature}</span>
          </motion.div>
        ))}
      </div>
      
      <CyberButton
        onClick={() => onSelect(pkg.id)}
        variant={pkg.popular ? 'primary' : 'ghost'}
        size="lg"
        className="w-full"
      >
        SELECT PACKAGE
      </CyberButton>
    </GlowingCard>
  );
};

export default PricingCard;