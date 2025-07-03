import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Github } from 'lucide-react';
import HolographicText from '../ui/HolographicText';
import GlowingCard from '../ui/GlowingCard';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 dark:bg-gray-900 border-t border-cyan-500/30">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-blue-900/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <GlowingCard className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-lg opacity-50" />
                <div className="relative p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <img 
                    src="/src/assets/files_5016007-1751526505545-files_5016007-1751478043215-image.png" 
                    alt="ZIRON AI LABS" 
                    className="h-6 w-6 object-contain"
                  />
                </div>
              </div>
              <HolographicText size="lg">
                ZIRON AI LABS
              </HolographicText>
            </div>
            <p className="text-gray-400 dark:text-gray-400 text-sm mb-6 leading-relaxed">
              Pioneering the quantum frontier of technology. Building neural networks that think, 
              applications that evolve, and experiences that transcend reality.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/vijay-jangid", color: "hover:text-blue-400" },
                { icon: Instagram, href: "https://www.instagram.com/x_yh__?igsh=MXIyaTlqNTRmZWkzeQ==", color: "hover:text-pink-400" },
                { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
                { icon: Github, href: "#", color: "hover:text-purple-400" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800/50 dark:bg-gray-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/50`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </GlowingCard>

          {/* Quick Links */}
          <GlowingCard className="p-6">
            <HolographicText size="lg" className="mb-6">
              NEURAL LINKS
            </HolographicText>
            <ul className="space-y-3">
              {[
                { name: 'About Matrix', path: '/about' },
                { name: 'Quantum Services', path: '/services' },
                { name: 'Digital Portfolio', path: '/portfolio' },
                { name: 'Join Network', path: '/careers' },
                { name: 'Data Queries', path: '/faq' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 dark:text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </GlowingCard>

          {/* Services */}
          <GlowingCard className="p-6">
            <HolographicText size="lg" className="mb-6">
              QUANTUM SERVICES
            </HolographicText>
            <ul className="space-y-3">
              {[
                'Neural AI Development',
                'Quantum Computing',
                'Reality Synthesis',
                'Blockchain Evolution',
                'Biometric Interfaces',
                'Cyber Security Matrix',
              ].map((service) => (
                <li key={service} className="flex items-center text-gray-400 dark:text-gray-400 text-sm group">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse" />
                  <span className="group-hover:text-purple-400 transition-colors">{service}</span>
                </li>
              ))}
            </ul>
          </GlowingCard>

          {/* Contact Info */}
          <GlowingCard className="p-6">
            <HolographicText size="lg" className="mb-6">
              NEURAL CONTACT
            </HolographicText>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'zironaillabs@gmail.com', color: 'text-blue-400' },
                { icon: Phone, text: '+91 8949906332', color: 'text-green-400' },
                { icon: MapPin, text: 'Near JIET Campus, Pali Road, NH 62, New Pali Road, Jodhpur', color: 'text-purple-400' },
              ].map((contact, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="p-2 bg-gray-800/50 dark:bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-colors flex-shrink-0 mt-1">
                    <contact.icon className={`h-4 w-4 ${contact.color}`} />
                  </div>
                  <span className="text-gray-400 dark:text-gray-400 text-sm group-hover:text-white transition-colors">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </GlowingCard>
        </div>

        <div className="border-t border-cyan-500/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-400 text-sm">
              © 2025 ZIRON AI LABS. All quantum rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Matrix', 'Terms Protocol'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-400 dark:text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;