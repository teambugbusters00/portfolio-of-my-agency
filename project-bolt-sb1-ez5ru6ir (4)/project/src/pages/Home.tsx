import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code, Globe, Users, Award, ChevronDown, Cpu, Database, Shield } from 'lucide-react';
import ParticleBackground from '../components/ui/ParticleBackground';
import GlowingCard from '../components/ui/GlowingCard';
import HolographicText from '../components/ui/HolographicText';
import NeuralNetwork from '../components/ui/NeuralNetwork';
import CyberButton from '../components/ui/CyberButton';
import FloatingText from '../components/ui/FloatingText';

const Home = () => {
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

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingTexts = [
    "BUILDING TOMORROW'S",
    "ARCHITECTING FUTURE'S",
    "CREATING QUANTUM'S",
    "DESIGNING NEURAL'S"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-900 via-blue-50 dark:via-blue-900/30 to-purple-50 dark:to-purple-900/30 transition-colors duration-300" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/15 rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        {/* Neural Network Background */}
        <div className="absolute inset-0">
          <NeuralNetwork />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Floating AI Icon */}
            <motion.div
              animate={floatingAnimation}
              className="mx-auto w-24 h-24 mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-6">
                  <img 
                    src="/src/assets/files_5016007-1751526505545-files_5016007-1751478043215-image.png" 
                    alt="ZIRON AI LABS" 
                    className="h-12 w-12 object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Text Animation */}
            <motion.div variants={fadeInUp} className="mb-8">
              <FloatingText 
                texts={floatingTexts}
                className="mb-4"
                interval={2500}
              />
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-colors duration-300">
                DIGITAL REALITY
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                  ZIRON AI LABS
                </span>{' '}
                pioneers the future with{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Artificial Intelligence</span>,{' '}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">Machine Learning</span>, and{' '}
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Quantum-Ready Development</span>.
                We don't just build applications—we architect digital ecosystems that evolve.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link to="/contact">
                <CyberButton size="lg" icon={ArrowRight}>
                  INITIATE PROJECT
                </CyberButton>
              </Link>
              <Link to="/pricing">
                <CyberButton variant="ghost" size="lg">
                  VIEW PRICING
                </CyberButton>
              </Link>
            </motion.div>

            {/* Futuristic Feature Cards */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto"
            >
              {[
                { 
                  icon: Brain, 
                  title: 'NEURAL AI SYSTEMS', 
                  description: 'Self-evolving algorithms that learn, adapt, and transcend',
                  color: 'blue'
                },
                { 
                  icon: Code, 
                  title: 'QUANTUM DEVELOPMENT', 
                  description: 'Next-gen applications built for tomorrow\'s infrastructure',
                  color: 'purple'
                },
                { 
                  icon: Globe, 
                  title: 'METAVERSE READY', 
                  description: 'Immersive experiences that bridge reality and digital realms',
                  color: 'cyan'
                },
              ].map((feature, index) => (
                <GlowingCard key={index} glowColor={feature.color} className="p-8">
                  <motion.div
                    animate={floatingAnimation}
                    transition={{ delay: index * 0.2, ...floatingAnimation.transition }}
                  >
                    <feature.icon className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-colors duration-300" />
                  </motion.div>
                  <HolographicText size="xl" className="mb-4">
                    {feature.title}
                  </HolographicText>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{feature.description}</p>
                </GlowingCard>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Holographic Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-50 animate-pulse" />
            <ChevronDown className="relative h-8 w-8 text-blue-600 dark:text-blue-400 animate-bounce transition-colors duration-300" />
          </div>
        </motion.div>
      </section>

      {/* Quantum Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 dark:from-blue-900/10 to-purple-50 dark:to-purple-900/10 transition-colors duration-300" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '50+', label: 'QUANTUM PROJECTS', icon: Cpu },
              { number: '25+', label: 'NEURAL CLIENTS', icon: Brain },
              { number: '∞', label: 'POSSIBILITIES', icon: Award },
              { number: '99.9%', label: 'UPTIME MATRIX', icon: Shield },
            ].map((stat, index) => (
              <GlowingCard key={index} className="p-8">
                <motion.div
                  animate={floatingAnimation}
                  transition={{ delay: index * 0.1, ...floatingAnimation.transition }}
                >
                  <stat.icon className="h-12 w-12 text-cyan-600 dark:text-cyan-400 mx-auto mb-4 transition-colors duration-300" />
                </motion.div>
                <HolographicText size="2xl" className="mb-2">
                  {stat.number}
                </HolographicText>
                <div className="text-gray-600 dark:text-gray-400 font-semibold tracking-wider transition-colors duration-300">{stat.label}</div>
              </GlowingCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advanced Services Preview */}
      <section className="py-20 relative">
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
              className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300"
            >
              <HolographicText size="3xl">NEURAL SERVICES</HolographicText>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300"
            >
              Transcending conventional development with quantum-inspired solutions
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'NEURAL AI DEVELOPMENT',
                description: 'Self-learning systems that evolve beyond programming',
                icon: Brain,
                color: 'blue',
                features: ['Quantum Neural Networks', 'Consciousness Simulation', 'Predictive Evolution']
              },
              {
                title: 'REALITY SYNTHESIS',
                description: 'Merging physical and digital realms seamlessly',
                icon: Globe,
                color: 'purple',
                features: ['AR/VR Integration', 'Holographic Interfaces', 'Spatial Computing']
              },
              {
                title: 'QUANTUM DEVELOPMENT',
                description: 'Applications built for tomorrow\'s computing paradigms',
                icon: Code,
                color: 'cyan',
                features: ['Quantum Algorithms', 'Parallel Processing', 'Future-Proof Architecture']
              },
              {
                title: 'BLOCKCHAIN EVOLUTION',
                description: 'Next-generation decentralized ecosystems',
                icon: Database,
                color: 'green',
                features: ['Smart Contracts 3.0', 'Cross-Chain Reality', 'Quantum Security']
              },
              {
                title: 'BIOMETRIC INTERFACES',
                description: 'Thought-responsive user experiences',
                icon: Users,
                color: 'pink',
                features: ['Neural Interfaces', 'Emotion Recognition', 'Adaptive UX']
              },
              {
                title: 'CYBER SECURITY',
                description: 'Quantum-resistant protection systems',
                icon: Shield,
                color: 'orange',
                features: ['Quantum Encryption', 'AI Threat Detection', 'Autonomous Defense']
              },
            ].map((service, index) => (
              <GlowingCard key={index} glowColor={service.color} className="p-8 group">
                <motion.div
                  animate={floatingAnimation}
                  transition={{ delay: index * 0.1, ...floatingAnimation.transition }}
                  className="mb-6"
                >
                  <service.icon className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto group-hover:scale-110 transition-all duration-300" />
                </motion.div>
                <HolographicText size="xl" className="mb-4">
                  {service.title}
                </HolographicText>
                <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-500 transition-colors duration-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link to="/services">
                  <CyberButton variant="ghost" size="sm">
                    EXPLORE MATRIX
                  </CyberButton>
                </Link>
              </GlowingCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quantum CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 dark:from-blue-900/20 via-purple-50 dark:via-purple-900/20 to-cyan-50 dark:to-cyan-900/20 transition-colors duration-300" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <GlowingCard className="p-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
              >
                <HolographicText size="3xl">
                  READY TO TRANSCEND REALITY?
                </HolographicText>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300"
              >
                Join the quantum revolution. Let's architect solutions that don't just meet today's needs—
                they anticipate tomorrow's possibilities.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <CyberButton size="lg" icon={ArrowRight}>
                    INITIATE QUANTUM LEAP
                  </CyberButton>
                </Link>
                <Link to="/pricing">
                  <CyberButton variant="ghost" size="lg">
                    VIEW QUANTUM PRICING
                  </CyberButton>
                </Link>
              </motion.div>
            </motion.div>
          </GlowingCard>
        </div>
      </section>
    </div>
  );
};

export default Home;