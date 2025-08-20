import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Check, Package, Palette, Crown } from 'lucide-react';

const TshirtCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const tshirtCategories = [
    {
      id: 'drop-shoulder',
      name: 'Drop Shoulder T-Shirts',
      icon: Package,
      description: 'Trendy drop shoulder t-shirts perfect for modern fashion and streetwear.',
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'Contemporary drop shoulder design',
        'Premium cotton blend fabric',
        'Available in S-XXL sizes',
        '12+ trendy colors',
        'Perfect for streetwear brands',
        'Bulk order discounts available'
      ],
      pricing: [
        { quantity: '1 T-Shirt', price: '₹450', originalPrice: '₹450', savings: null },
        { quantity: '3 T-Shirts', price: '₹999', originalPrice: '₹1,350', savings: '₹351', popular: true },
        { quantity: '10 T-Shirts', price: '₹2,999', originalPrice: '₹4,500', savings: '₹1,501' }
      ],
      colors: ['Black', 'White', 'Navy', 'Gray', 'Olive', 'Burgundy', 'Mustard', 'Pink', 'Light Blue', 'Charcoal', 'Cream', 'Brown'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 'printed',
      name: 'Printed T-Shirts',
      icon: Palette,
      description: 'Vibrant printed t-shirts with unique designs. Perfect for branding and custom orders.',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
      features: [
        'High-quality screen printing',
        'Custom design capabilities',
        'Durable print technology',
        'Available in S-XXL sizes',
        'Multiple color options',
        'Perfect for corporate branding'
      ],
      pricing: [
        { quantity: '1 T-Shirt', price: '₹450', originalPrice: '₹450', savings: null },
        { quantity: '3 T-Shirts', price: '₹999', originalPrice: '₹1,350', savings: '₹351', popular: true },
        { quantity: '10 T-Shirts', price: '₹2,999', originalPrice: '₹4,500', savings: '₹1,501' }
      ],
      colors: ['Black', 'White', 'Navy', 'Gray', 'Olive', 'Burgundy', 'Mustard', 'Pink', 'Light Blue', 'Charcoal', 'Cream', 'Brown'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 'premium-plain',
      name: 'Premium Plain T-Shirts',
      icon: Crown,
      description: 'Classic premium cotton t-shirts with superior comfort and durability.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      features: [
        '100% premium cotton fabric',
        'Classic crew neck design',
        'Superior comfort and breathability',
        'Available in S-XXL sizes',
        'Wide range of colors',
        'Perfect for everyday wear'
      ],
      pricing: [
        { quantity: '1 T-Shirt', price: '₹450', originalPrice: '₹450', savings: null },
        { quantity: '3 T-Shirts', price: '₹999', originalPrice: '₹1,350', savings: '₹351', popular: true },
        { quantity: '10 T-Shirts', price: '₹2,999', originalPrice: '₹4,500', savings: '₹1,501' }
      ],
      colors: ['Black', 'White', 'Navy', 'Gray', 'Olive', 'Burgundy', 'Mustard', 'Pink', 'Light Blue', 'Charcoal', 'Cream', 'Brown'],
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
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-white">
                T-Shirt Collection
              </h1>
              <p className="text-muted-300 text-xs sm:text-sm">Premium Quality, Bulk Pricing</p>
            </div>

            <div className="w-16 sm:w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container-custom py-8 sm:py-12">
        {/* Page Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">
            Premium <span className="text-gradient">T-Shirt</span> Collection
          </h2>
          <p className="text-lg sm:text-xl text-muted-200 max-w-3xl mx-auto px-4">
            Discover our three exclusive T-shirt categories, each designed for different styles and purposes. 
            All available with our special bundle pricing for maximum savings.
          </p>
        </motion.div>

        {/* T-Shirt Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 sm:space-y-16"
        >
          {tshirtCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-muted-800/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-muted-700 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                {/* Image Section */}
                <div className="relative h-72 sm:h-80 md:h-96 lg:h-full overflow-hidden">
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
                    style={{ 
                      opacity: 0, 
                      transition: 'opacity 0.3s ease-in-out',
                      minHeight: '100%',
                      minWidth: '100%',
                      objectPosition: 'center center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/60 to-transparent lg:from-charcoal-900/40" />
                  
                  {/* Category Icon */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                    <div className="bg-gold-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                      <category.icon size={24} className="text-charcoal-900 sm:w-8 sm:h-8" />
                    </div>
                  </div>

                  {/* Category Name */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 lg:hidden">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-200 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 lg:p-12">
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
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                          <Check size={14} className="text-gold-500 flex-shrink-0 sm:w-4 sm:h-4" />
                          <span className="text-muted-300 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Available Options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Available Colors</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {category.colors.slice(0, 8).map((color, colorIndex) => (
                          <span
                            key={colorIndex}
                            className="px-2 sm:px-3 py-1 bg-muted-700 rounded-full text-muted-300 text-xs"
                          >
                            {color}
                          </span>
                        ))}
                        {category.colors.length > 8 && (
                          <span className="px-2 sm:px-3 py-1 bg-gold-500/20 text-gold-500 rounded-full text-xs">
                            +{category.colors.length - 8} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Available Sizes</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {category.sizes.map((size, sizeIndex) => (
                          <span
                            key={sizeIndex}
                            className="px-2 sm:px-3 py-1 bg-muted-700 rounded-full text-muted-300 text-xs"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Bundle Pricing</h4>
                    <div className="space-y-2 sm:space-y-3">
                      {category.pricing.map((plan, planIndex) => (
                        <div
                          key={planIndex}
                          className={`relative p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-300 ${
                            plan.popular 
                              ? 'border-gold-500 bg-gold-500/10' 
                              : 'border-muted-600 bg-muted-700/30'
                          }`}
                        >
                          {plan.popular && (
                            <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-gold-500 text-charcoal-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                                Best Value
                              </span>
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <div>
                              <h5 className="font-semibold text-white text-sm sm:text-base">
                                {plan.quantity}
                              </h5>
                              {plan.savings && (
                                <p className="text-xs sm:text-sm text-muted-400 line-through">
                                  {plan.originalPrice}
                                </p>
                              )}
                            </div>
                            
                            <div className="text-right">
                              <div className="text-xl sm:text-2xl font-bold text-gold-500">
                                {plan.price}
                              </div>
                              {plan.savings && (
                                <div className="text-xs sm:text-sm text-green-400 font-medium">
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
                    className="w-full btn-primary text-base sm:text-lg py-3 sm:py-4"
                  >
                    <ShoppingCart size={18} className="mr-2 sm:w-5 sm:h-5" />
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
          className="text-center mt-16 sm:mt-20"
        >
          <div className="bg-muted-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-muted-700 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-white">
              Need Custom Quantities or Special Pricing?
            </h3>
            <p className="text-muted-200 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
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

export default TshirtCollection;
