import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Package, TrendingUp } from 'lucide-react';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingPlans = [
    {
      id: 'tshirts',
      title: 'Build Your T-Shirt Bundle',
      icon: Package,
      description: 'Premium cotton t-shirts with unbeatable bulk pricing',
      plans: [
        {
          quantity: '1 T-Shirt',
          price: '₹450',
          originalPrice: '₹450',
          savings: null,
          popular: false
        },
        {
          quantity: '3 T-Shirts',
          price: '₹999',
          originalPrice: '₹1,350',
          savings: '₹351',
          popular: true
        }
      ],
      features: [
        '100% Premium Cotton',
        'Multiple Sizes (S-XXL)',
        'Available in 12+ Colors',
        'Bulk Order Discounts',
        'Fast Production & Shipping'
      ],
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
    },
    {
      id: 'jeans',
      title: 'Stock Up on Premium Denim',
      icon: TrendingUp,
      description: 'High-quality denim jeans with superior comfort and durability',
      plans: [
        {
          quantity: '1 Pair of Jeans',
          price: '₹650',
          originalPrice: '₹650',
          savings: null,
          popular: false
        },
        {
          quantity: '3 Pairs of Jeans',
          price: '₹1,499',
          originalPrice: '₹1,950',
          savings: '₹451',
          popular: true
        }
      ],
      features: [
        'Premium Denim Fabric',
        'Multiple Fits (Slim, Regular, Relaxed)',
        'Available in 8+ Washes',
        'Bulk Order Discounts',
        'Quality Guaranteed'
      ],
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80'
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

  return (
    <section id="pricing" className="section-padding bg-charcoal-900">
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
            Bundle <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-200 max-w-3xl mx-auto">
            Our special bundle pricing ensures you get the best value when ordering in bulk. 
            The more you order, the more you save.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-muted-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-muted-700 card-hover">
                {/* Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
                  
                  {/* Plan Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-gold-500 p-3 rounded-full">
                      <plan.icon size={24} className="text-charcoal-900" />
                    </div>
                  </div>

                  {/* Plan Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-muted-200 text-sm">
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* Pricing Plans */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    {plan.plans.map((pricingPlan, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                          pricingPlan.popular 
                            ? 'border-gold-500 bg-gold-500/10' 
                            : 'border-muted-600 bg-muted-700/30'
                        }`}
                      >
                        {pricingPlan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gold-500 text-charcoal-900 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                              <Star size={14} className="fill-current" />
                              <span>Best Value</span>
                            </span>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-white mb-1">
                              {pricingPlan.quantity}
                            </h4>
                            {pricingPlan.savings && (
                              <p className="text-sm text-muted-400 line-through">
                                {pricingPlan.originalPrice}
                              </p>
                            )}
                          </div>
                          
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gold-500">
                              {pricingPlan.price}
                            </div>
                            {pricingPlan.savings && (
                              <div className="text-sm text-green-400 font-medium">
                                Save {pricingPlan.savings}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3 text-muted-300">
                          <Check size={16} className="text-gold-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-muted-800/30 backdrop-blur-sm rounded-2xl p-8 border border-muted-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4 text-white">
              Delivery & Additional Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gold-500 mb-2">Delivery Charges</h4>
                <p className="text-muted-200 text-sm">
                  Delivery charges are calculated at checkout based on your location and order size. 
                  Free delivery on orders above ₹5,000.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gold-500 mb-2">Bulk Orders</h4>
                <p className="text-muted-200 text-sm">
                  For orders above 100 pieces, contact us for custom pricing and dedicated support.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

