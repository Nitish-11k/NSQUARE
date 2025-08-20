import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, TrendingDown, Users, Award, Clock, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Shield,
      title: 'Unmatched Quality',
      description: 'We source only the finest cotton and denim for superior comfort and durability. Every piece meets our rigorous quality standards.',
      features: ['Premium Materials', 'Quality Control', 'Durability Tested']
    },
    {
      icon: TrendingDown,
      title: 'Affordable Bulk Pricing',
      description: 'Our direct-to-business model ensures you get premium apparel without the premium price tag. Scale your business with confidence.',
      features: ['Direct Pricing', 'Bulk Discounts', 'No Middleman Markup']
    },
    {
      icon: Users,
      title: 'Reliable Partnership',
      description: 'Consistent stock, timely delivery, and dedicated support for your business. We\'re here to help you succeed.',
      features: ['24/7 Support', 'Fast Delivery', 'Stock Guarantee']
    }
  ];

  const stats = [
    { number: '500+', label: 'Businesses Served', icon: Users },
    { number: '50K+', label: 'Products Delivered', icon: Award },
    { number: '99%', label: 'On-Time Delivery', icon: Clock },
    { number: '24/7', label: 'Customer Support', icon: Headphones }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Why Choose <span className="text-gradient">Us?</span>
          </h2>
          <p className="text-xl text-muted-200 max-w-3xl mx-auto">
            We're not just another supplier. We're your partner in business growth, 
            committed to delivering exceptional quality and service.
          </p>
        </motion.div>

        {/* Main Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-muted-800/50 backdrop-blur-sm rounded-2xl p-8 border border-muted-700 card-hover h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gold-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-500/30 transition-colors duration-300"
                >
                  <reason.icon size={32} className="text-gold-500" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-muted-200 mb-6 leading-relaxed">
                  {reason.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {reason.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-muted-300">
                      <div className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-muted-800/30 backdrop-blur-sm rounded-2xl p-8 border border-muted-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/30 transition-colors duration-300">
                    <stat.icon size={24} className="text-gold-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-muted-800/30 backdrop-blur-sm rounded-2xl p-8 border border-muted-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-6 text-white">
              Ready to Experience the Difference?
            </h3>
            <p className="text-muted-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied businesses that have transformed their operations 
              with our premium clothing solutions. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Start Your Order
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

