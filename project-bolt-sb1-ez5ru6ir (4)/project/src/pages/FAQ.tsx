import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does ZIRON AI LABS offer?',
          answer: 'We specialize in AI development, machine learning, full-stack web development using MERN stack, Web3 and blockchain solutions, mobile app development, and UI/UX design. We provide end-to-end development services for startups and enterprises.'
        },
        {
          question: 'How experienced is your team?',
          answer: 'Our team consists of highly skilled developers and designers with 3+ years of combined experience in cutting-edge technologies. We stay updated with the latest industry trends and best practices to deliver exceptional results.'
        },
        {
          question: 'Do you work with startups or only established companies?',
          answer: 'We work with both startups and established enterprises. We understand the unique challenges faced by startups and offer flexible engagement models and competitive pricing to help them grow and scale their businesses.'
        }
      ]
    },
    {
      category: 'Project Management',
      questions: [
        {
          question: 'What is your typical project timeline?',
          answer: 'Project timelines vary based on complexity and scope. Simple projects may take 4-8 weeks, while complex enterprise solutions can take 12-24 weeks. We provide detailed project timelines during our initial consultation phase.'
        },
        {
          question: 'How do you handle project communication?',
          answer: 'We maintain transparent communication through regular updates, weekly progress reports, and dedicated project management tools. You\'ll have direct access to our team and can track project progress in real-time.'
        },
        {
          question: 'What happens if project requirements change?',
          answer: 'We understand that requirements can evolve. We follow an agile development approach that accommodates changes. Any scope changes are discussed, documented, and approved before implementation to ensure transparency.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'Which technologies do you specialize in?',
          answer: 'We specialize in MERN stack (MongoDB, Express.js, React, Node.js), Python for AI/ML, blockchain technologies (Ethereum, Solidity), mobile development (React Native, Flutter), and cloud platforms (AWS, Google Cloud).'
        },
        {
          question: 'Do you provide ongoing support and maintenance?',
          answer: 'Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature enhancements to ensure your application continues to perform optimally.'
        },
        {
          question: 'How do you ensure code quality and security?',
          answer: 'We follow industry best practices including code reviews, automated testing, security audits, and continuous integration/deployment. All our applications undergo rigorous testing before deployment.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          question: 'How do you structure your pricing?',
          answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and requirements. We provide detailed quotes after understanding your specific needs.'
        },
        {
          question: 'What are your payment terms?',
          answer: 'We typically work with milestone-based payments for larger projects. For smaller projects, we may request 50% upfront and 50% upon completion. Payment terms are discussed and agreed upon before project commencement.'
        },
        {
          question: 'Do you offer any guarantees?',
          answer: 'We stand behind our work with a quality guarantee. If there are any issues with our deliverables within the agreed warranty period, we\'ll fix them at no additional cost. We also offer money-back guarantees for certain services.'
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

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
              Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Find answers to common questions about our services, processes, and how we can help 
              transform your digital ideas into reality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={fadeInUp}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 mr-4"></span>
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const currentIndex = questionIndex++;
                    return (
                      <div
                        key={faqIndex}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(currentIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                        >
                          <span className="text-lg font-semibold text-white pr-4">
                            {faq.question}
                          </span>
                          <div className="flex-shrink-0">
                            {openIndex === currentIndex ? (
                              <Minus className="h-5 w-5 text-blue-400" />
                            ) : (
                              <Plus className="h-5 w-5 text-blue-400" />
                            )}
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {openIndex === currentIndex && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4">
                                <p className="text-gray-300 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Help Section */}
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
              Need More <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Help?</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Can't find what you're looking for? We're here to help you with any questions or concerns.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <MessageSquare className="h-12 w-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Live Chat</h3>
              <p className="text-gray-300 mb-6">
                Get instant answers to your questions through our live chat support.
              </p>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Start Chat
              </button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Mail className="h-12 w-12 text-purple-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Email Support</h3>
              <p className="text-gray-300 mb-6">
                Send us your questions and we'll respond within 24 hours.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
              >
                Send Email
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Phone className="h-12 w-12 text-green-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Phone Support</h3>
              <p className="text-gray-300 mb-6">
                Speak directly with our experts for complex technical questions.
              </p>
              <a
                href="tel:+919876543210"
                className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Popular Topics */}
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
              className="text-3xl font-bold text-white mb-8"
            >
              Popular <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Topics</span>
            </motion.h2>
            
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                'AI Development Process',
                'Project Timeline & Milestones',
                'Technology Stack Selection',
                'Pricing & Payment Options',
                'Support & Maintenance',
                'Security & Quality Assurance'
              ].map((topic, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 flex items-center space-x-3 cursor-pointer"
                >
                  <HelpCircle className="h-5 w-5 flex-shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-12 border border-gray-700"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Still Have Questions?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Our team is ready to provide personalized answers to your specific questions. 
              Let's discuss how we can help with your project.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 space-x-2"
              >
                <span>Contact Us</span>
                <MessageSquare className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;