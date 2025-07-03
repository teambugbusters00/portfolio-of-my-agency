import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Clients = () => {
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      testimonial: 'ZIRON AI LABS transformed our business with their innovative AI solutions. The team\'s expertise and dedication exceeded our expectations.',
      project: 'AI-Powered Analytics Platform'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Digital Dynamics',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      testimonial: 'Outstanding full-stack development services. They delivered a robust, scalable solution that perfectly matched our requirements.',
      project: 'E-commerce Platform Development'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'BlockChain Ventures',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      testimonial: 'Their blockchain expertise helped us launch our DeFi platform successfully. Professional, reliable, and highly skilled team.',
      project: 'DeFi Trading Platform'
    },
    {
      name: 'David Kumar',
      role: 'Product Manager',
      company: 'FinTech Solutions',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      testimonial: 'Exceptional mobile app development. The app they built has over 100K downloads and excellent user ratings.',
      project: 'Financial Management App'
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'Growth Analytics',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      testimonial: 'The data analytics dashboard they created has revolutionized how we make business decisions. Highly recommended!',
      project: 'Real-time Analytics Dashboard'
    },
    {
      name: 'James Wilson',
      role: 'Startup Founder',
      company: 'InnovateTech',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      testimonial: 'From concept to launch, ZIRON AI LABS was with us every step. Their technical expertise and project management are top-notch.',
      project: 'MVP Development'
    }
  ];

  const clientLogos = [
    { name: 'TechStart Inc.', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Digital Dynamics', logo: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'BlockChain Ventures', logo: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'FinTech Solutions', logo: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Growth Analytics', logo: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'InnovateTech', logo: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=150' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
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
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              We're proud to work with innovative companies and visionary leaders 
              who trust us to bring their digital ambitions to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
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
              className="text-2xl font-semibold text-gray-400 mb-12"
            >
              Trusted by Forward-Thinking Companies
            </motion.h2>
            
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
            >
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-gray-800/50 p-4 hover:bg-gray-700/50 transition-colors"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-16 object-cover rounded filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800/50">
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
              What Our Clients <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Say</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Real feedback from real clients who have experienced the ZIRON AI LABS difference
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-blue-400 mb-4 opacity-50" />
                
                <p className="text-gray-300 mb-4 italic">"{testimonial.testimonial}"</p>
                
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-sm text-blue-400 font-medium">Project: {testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
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
              Success <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Metrics</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Numbers that showcase our commitment to client success
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: '25+', label: 'Happy Clients', description: 'Satisfied customers across various industries' },
              { number: '50+', label: 'Projects Delivered', description: 'Successful projects completed on time' },
              { number: '99%', label: 'Client Satisfaction', description: 'Clients who would recommend us' },
              { number: '24/7', label: 'Support Available', description: 'Round-the-clock technical support' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {metric.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.label}</h3>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-12 border border-gray-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Featured Case Study
                </h2>
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                  AI-Powered E-commerce Platform
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We helped TechStart Inc. increase their conversion rate by 300% through 
                  an AI-powered recommendation engine and intelligent search functionality. 
                  The platform now serves over 50,000 users monthly.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    AI/ML
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="relative">
                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Case Study"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to Join Our Success Stories?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Let's collaborate to create your next success story. Your project could be our next featured case study.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;