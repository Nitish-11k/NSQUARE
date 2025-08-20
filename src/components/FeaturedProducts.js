import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, Truck } from 'lucide-react';

const FeaturedProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Drop Shoulder T-Shirts',
      category: 'T-Shirts',
      price: '₹450',
      description: 'Trendy drop shoulder t-shirts perfect for modern fashion. Available in multiple sizes and colors.',
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: ['Drop Shoulder Design', 'Multiple Sizes', 'Bulk Pricing Available'],
      rating: 4.8,
      reviews: 1247,
      type: 'drop-shoulder'
    },
    {
      id: 2,
      name: 'Printed T-Shirts',
      category: 'T-Shirts',
      price: '₹450',
      description: 'Vibrant printed t-shirts with unique designs. Perfect for branding and custom orders.',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
      features: ['Custom Prints', 'Multiple Sizes', 'Bulk Order Discounts'],
      rating: 4.9,
      reviews: 892,
      type: 'printed'
    },
    {
      id: 3,
      name: 'Premium Plain T-Shirts',
      category: 'T-Shirts',
      price: '₹450',
      description: 'Classic premium cotton t-shirts with superior comfort and durability.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      features: ['100% Premium Cotton', 'Multiple Sizes', 'Bulk Pricing Available'],
      rating: 4.8,
      reviews: 1247,
      type: 'premium-plain'
    },
    {
      id: 4,
      name: 'Premium Denim Jeans',
      category: 'Jeans',
      price: '₹650',
      description: 'High-quality denim jeans with superior comfort and durability. Perfect for wholesale orders.',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80',
      features: ['Premium Denim', 'Multiple Fits', 'Bulk Discounts'],
      rating: 4.9,
      reviews: 892,
      type: 'jeans'
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

  const handleViewCollection = (type) => {
    if (type === 'jeans') {
      navigate('/jeans-collection');
    } else {
      navigate('/tshirt-collection');
    }
  };

  return (
    <section id="products" className="section-padding bg-gradient">
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
            Featured <span className="text-gradient">Collections</span>
          </h2>
          <p className="text-xl text-muted-200 max-w-3xl mx-auto">
            Discover our premium T-shirts and Jeans collections, designed for businesses that demand quality and value.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-muted-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-muted-700 card-hover h-full">
                {/* Product Image */}
                <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <span className="bg-gold-500 text-charcoal-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-charcoal-900/80 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-2 flex items-center space-x-1">
                    <Star size={14} className="text-gold-500 fill-current sm:w-4 sm:h-4" />
                    <span className="text-white text-xs sm:text-sm font-medium">{product.rating}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-6 flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-serif font-bold mb-2 text-white">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl font-bold text-gold-500">
                      Starting at {product.price}
                    </span>
                    <span className="text-muted-400 text-xs sm:text-sm">
                      {product.reviews} reviews
                    </span>
                  </div>

                  <p className="text-muted-200 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm flex-grow">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4 sm:mb-6">
                    <ul className="space-y-1 sm:space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-muted-300">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gold-500 rounded-full" />
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleViewCollection(product.type)}
                    className="w-full btn-primary flex items-center justify-center space-x-2 mt-auto text-sm sm:text-base py-2 sm:py-3"
                  >
                    <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
                    <span>View Collection</span>
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
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-muted-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-muted-700">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-white">
              Ready to Scale Your Business?
            </h3>
            <p className="text-muted-200 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Join hundreds of businesses that trust us for their wholesale clothing needs. 
              Get started with a consultation today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
