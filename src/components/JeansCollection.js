import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Check, Zap, Shield, Crown } from 'lucide-react';

const JeansCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const jeansCategories = [
    {
      id: 'slim-fit',
      name: 'Slim Fit Jeans',
      icon: Zap,
      description: 'Modern slim fit jeans perfect for contemporary fashion. Comfortable stretch denim with a sleek silhouette.',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      features: [
        'Stretch denim for comfort',
        'Modern slim fit design',
        'Available in S-XXL sizes',
        'Multiple wash options',
        'Perfect for casual and smart casual',
        'Bulk order discounts available'
      ],
      pricing: [
        { quantity: '1 Pair of Jeans', price: '₹650', originalPrice: '₹650', savings: null },
        { quantity: '3 Pairs of Jeans', price: '₹1,499', originalPrice: '₹1,950', savings: '₹451', popular: true },
        { quantity: '10 Pairs of Jeans', price: '₹4,499', originalPrice: '₹6,500', savings: '₹2,001' }
      ],
      colors: ['Blue', 'Black', 'Gray', 'Light Blue', 'Dark Blue', 'Indigo', 'Charcoal', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 'regular-fit',
      name: 'Regular Fit Jeans',
      icon: Shield,
      description: 'Classic regular fit jeans with traditional styling. Comfortable and versatile for everyday wear.',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      features: [
        'Classic regular fit design',
        'Premium denim fabric',
        'Available in S-XXL sizes',
        'Traditional styling',
        'Perfect for all body types',
        'Bulk order discounts available'
      ],
      pricing: [
        { quantity: '1 Pair of Jeans', price: '₹650', originalPrice: '₹650', savings: null },
        { quantity: '3 Pairs of Jeans', price: '₹1,499', originalPrice: '₹1,950', savings: '₹451', popular: true },
        { quantity: '10 Pairs of Jeans', price: '₹4,499', originalPrice: '₹6,500', savings: '₹2,001' }
      ],
      colors: ['Blue', 'Black', 'Gray', 'Light Blue', 'Dark Blue', 'Indigo', 'Charcoal', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 'relaxed-fit',
      name: 'Relaxed Fit Jeans',
      icon: Crown,
      description: 'Comfortable relaxed fit jeans with extra room for movement. Perfect for active lifestyles and casual wear.',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      features: [
        'Comfortable relaxed fit',
        'Extra room for movement',
        'Available in S-XXL sizes',
        'Soft denim fabric',
        'Perfect for active lifestyles',
        'Bulk order discounts available'
      ],
      pricing: [
        { quantity: '1 Pair of Jeans', price: '₹650', originalPrice: '₹650', savings: null },
        { quantity: '3 Pairs of Jeans', price: '₹1,499', originalPrice: '₹1,950', savings: '₹451', popular: true },
        { quantity: '10 Pairs of Jeans', price: '₹4,499', originalPrice: '₹6,500', savings: '₹2,001' }
      ],
      colors: ['Blue', 'Black', 'Gray', 'Light Blue', 'Dark Blue', 'Indigo', 'Charcoal', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-charcoal-900">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-muted-800/50 backdrop-blur-sm border-b border-muted-700 sticky top-0 z-40"
      >
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackToHome}
              className="flex space-x-2 text-gold-500 hover:text-gold-400 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </motion.button>
            
            <div className="text-center">
              <h1 className="text-2xl font-serif font-bold text-white">
                Jeans Collection
              </h1>
              <p className="text-muted-300 text-sm">Premium Quality, Bulk Pricing</p>
            </div>

            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container-custom py-12">
        {/* Page Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Premium <span className="text-gradient">Denim</span> Collection
          </h2>
          <p className="text-xl text-muted-200 max-w-3xl mx-auto">
            Discover our three exclusive jeans categories, each designed for different styles and comfort preferences. 
            All available with our special bundle pricing for maximum savings.
          </p>
        </motion.div>

        {/* Jeans Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {jeansCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-muted-800/30 backdrop-blur-sm rounded-3xl border border-muted-700 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 sm:h-80 lg:h-96 xl:h-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80';
                    }}
                    onLoad={(e) => {
                      e.target.style.opacity = '1';
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/60 to-transparent lg:from-charcoal-900/40" />
                  
                  {/* Category Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gold-500 p-4 rounded-2xl">
                      <category.icon size={32} className="text-charcoal-900" />
                    </div>
                  </div>

                  {/* Category Name */}
                  <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-200">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                  {/* Desktop Category Name */}
                  <div className="hidden lg:block mb-6">
                    <h3 className="text-3xl font-serif font-bold text-white mb-3">
                      {category.name}
                    </h3>
                    <p className="text-muted-200 text-lg">
                      {category.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <Check size={16} className="text-gold-500 flex-shrink-0" />
                          <span className="text-muted-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Available Options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Available Colors</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.colors.map((color, colorIndex) => (
                          <span
                            key={colorIndex}
                            className="px-3 py-1 bg-muted-700 rounded-full text-muted-300 text-xs"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Available Sizes</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.sizes.map((size, sizeIndex) => (
                          <span
                            key={sizeIndex}
                            className="px-3 py-1 bg-muted-700 rounded-full text-muted-300 text-xs"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Bundle Pricing</h4>
                    <div className="space-y-3">
                      {category.pricing.map((plan, planIndex) => (
                        <div
                          key={planIndex}
                          className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                            plan.popular 
                              ? 'border-gold-500 bg-gold-500/10' 
                              : 'border-muted-600 bg-muted-700/30'
                          }`}
                        >
                          {plan.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-gold-500 text-charcoal-900 px-3 py-1 rounded-full text-sm font-bold">
                                Best Value
                              </span>
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <div>
                              <h5 className="font-semibold text-white">
                                {plan.quantity}
                              </h5>
                              {plan.savings && (
                                <p className="text-sm text-muted-400 line-through">
                                  {plan.originalPrice}
                                </p>
                              )}
                            </div>
                            
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gold-500">
                                {plan.price}
                              </div>
                              {plan.savings && (
                                <div className="text-sm text-green-400 font-medium">
                                  Save {plan.savings}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary text-lg py-4"
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    Order {category.name}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-muted-800/30 backdrop-blur-sm rounded-2xl p-8 border border-muted-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4 text-white">
              Need Custom Quantities or Special Pricing?
            </h3>
            <p className="text-muted-200 mb-6 max-w-2xl mx-auto">
              For bulk orders above 100 pieces or custom requirements, our team is here to help 
              you get the best possible pricing and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Contact Sales Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Request Quote
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JeansCollection;
