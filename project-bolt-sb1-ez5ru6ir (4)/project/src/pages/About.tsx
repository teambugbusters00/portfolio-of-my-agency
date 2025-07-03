import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Award, Target, Eye, Heart, ExternalLink } from 'lucide-react';

const About = () => {
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

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 dark:from-gray-900 via-blue-50 dark:via-blue-900/20 to-purple-50 dark:to-purple-900/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300"
            >
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ZIRON AI LABS</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300"
            >
              A forward-thinking tech agency dedicated to building the future through innovative AI, 
              Machine Learning, and Full-Stack Development solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            >
              Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Leadership</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300"
            >
              Passionate leaders driving innovation and excellence in everything we do
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          >
            {/* Founder */}
            <motion.div variants={fadeInUp} className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                  <img
                    src="/src/assets/1748434108460.jpg"
                    alt="VIJAY JANGID"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">VIJAY JANGID</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 transition-colors duration-300">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                ZIRON AI LABS specializes in delivering cutting-edge AI, Machine Learning, and full-stack 
                development solutions. As the Founder & CEO, actively shaping scalable digital products 
                with a focus on MERN stack, Web3, and blockchain technologies. The organization thrives 
                on collaboration, supporting startups and enterprises with tailored, innovative solutions.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/vijay-jangid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-100 dark:bg-blue-600 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 text-blue-600 dark:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/x_yh__?igsh=MXIyaTlqNTRmZWkzeQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-pink-100 dark:bg-pink-600 rounded-lg hover:bg-pink-200 dark:hover:bg-pink-700 transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5 text-pink-600 dark:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/_vijay_jangid?igsh=N3NwNDhkb3pqMmxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-pink-100 dark:bg-pink-600 rounded-lg hover:bg-pink-200 dark:hover:bg-pink-700 transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5 text-pink-600 dark:text-white" />
                </a>
                <a
                  href="https://zesty-truffle-1f6c5c.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-purple-100 dark:bg-purple-600 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors duration-300"
                >
                  <ExternalLink className="h-5 w-5 text-purple-600 dark:text-white" />
                </a>
              </div>
            </motion.div>

            {/* Co-founder */}
            <motion.div variants={fadeInUp} className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full p-1">
                  <img
                    src="/src/assets/IMG_20250619_144100 copy.png"
                    alt="Vaibhav Sharma"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Vaibhav Sharma</h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4 transition-colors duration-300">Co-Founder</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                A passion for technology, creativity, and entrepreneurship. Driven by problem-solving 
                and innovation, I'm focused on exploring the potential of AI, engineering, and tech-driven 
                solutions. Eager to collaborate, learn, and make an impact in the world of technology and beyond.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/vaibhavsharmajiet?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRz5lquSgThi0MC6VX0NjBA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-100 dark:bg-blue-600 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 text-blue-600 dark:text-white" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center p-8 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <Target className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-6 transition-colors duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                To help businesses innovate and grow by leveraging cutting-edge technology 
                and data-driven insights to create scalable, intelligent solutions.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center p-8 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <Eye className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-6 transition-colors duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                To be the leading tech agency that transforms ideas into revolutionary 
                digital products, shaping the future of technology and business.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center p-8 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <Heart className="h-12 w-12 text-cyan-600 dark:text-cyan-400 mx-auto mb-6 transition-colors duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Values</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Quality, collaboration, innovation, and integrity drive everything we do. 
                We believe in building lasting partnerships with our clients.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;