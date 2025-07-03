import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import toast, { Toaster } from 'react-hot-toast';
import { paymentPackages, createCheckoutSession } from '../lib/stripe';
import PricingCard from '../components/ui/PricingCard';
import HolographicText from '../components/ui/HolographicText';
import ParticleBackground from '../components/ui/ParticleBackground';

const Pricing = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handlePackageSelect = async (packageId: string) => {
    const selectedPackage = paymentPackages.find(pkg => pkg.id === packageId);
    if (!selectedPackage) return;

    try {
      toast.loading('Initializing quantum payment portal...', { id: 'checkout' });
      
      // In a real implementation, you would call your backend API
      // For demo purposes, we'll simulate the process
      setTimeout(() => {
        toast.success('Payment portal activated! Redirecting to secure checkout...', { id: 'checkout' });
        // Simulate redirect to Stripe checkout
        setTimeout(() => {
          navigate('/contact', { 
            state: { 
              selectedPackage: selectedPackage.name,
              message: `I'm interested in the ${selectedPackage.name} package ($${selectedPackage.price.toLocaleString()}).`
            }
          });
        }, 2000);
      }, 1500);
    } catch (error) {
      toast.error('Quantum interference detected. Please try again.', { id: 'checkout' });
    }
  };

  return (
    <div className="min-h-screen pt-16 relative">
      <ParticleBackground />
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#ffffff',
            border: '1px solid #374151'
          }
        }}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              <HolographicText size="3xl">QUANTUM PRICING</HolographicText>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Choose your path to digital transcendence. Each package is designed to 
              accelerate your journey into the quantum realm of technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {paymentPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <PricingCard 
                  package={pkg} 
                  onSelect={handlePackageSelect}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-800/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              <HolographicText size="2xl">QUANTUM GUARANTEES</HolographicText>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Quantum Security',
                description: 'Military-grade encryption and quantum-resistant security protocols'
              },
              {
                title: 'Neural Scalability',
                description: 'Self-adapting architecture that grows with your business needs'
              },
              {
                title: 'Reality Support',
                description: '24/7 support from our team of quantum engineers and AI specialists'
              }
            ].map((guarantee, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 bg-gray-900/50 rounded-xl border border-gray-700"
              >
                <HolographicText size="lg" className="mb-4">
                  {guarantee.title}
                </HolographicText>
                <p className="text-gray-300">{guarantee.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;