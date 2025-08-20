import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const footerSections = [
    {
      title: 'Company Info',
      links: [
        { name: 'About NSQUARE', href: '#about' },
        { name: 'Our Mission', href: '#mission' },
        { name: 'Quality Standards', href: '#quality' },
        { name: 'Careers', href: '#careers' }
      ]
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'T-Shirts Collection', href: '#tshirts' },
        { name: 'Jeans Collection', href: '#jeans' },
        { name: 'Bundle Pricing', href: '#pricing' },
        { name: 'Bulk Orders', href: '#bulk' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms & Conditions', href: '#terms' },
        { name: 'Shipping Policy', href: '#shipping' },
        { name: 'Return Policy', href: '#returns' }
      ]
    },
    {
      title: 'Contact Info',
      links: [
        { name: 'Soon disclose', href: '#', icon: Phone },
        { name: 'Soon disclose', href: '#', icon: Mail },
        { name: 'Soon disclose', href: '#', icon: MapPin },
        { name: 'Soon disclose', href: '#', icon: Clock }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin }
  ];

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage
      navigate('/');
    } else {
      // If already on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-charcoal-900 border-t border-muted-800">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Logo & Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <motion.div 
                  className="flex items-center space-x-3 mb-4 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogoClick}
                >
                  <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                    <span className="text-charcoal-900 font-bold text-2xl">N</span>
                  </div>
                  <span className="text-3xl font-serif font-bold text-gold-500">
                    SQUARE
                  </span>
                </motion.div>
                <p className="text-muted-300 leading-relaxed max-w-md">
                  Premium NSQUARE solutions that help businesses scale with confidence. 
                  Quality, reliability, and value in every order.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-muted-800 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <social.icon 
                      size={20} 
                      className="text-muted-300 group-hover:text-charcoal-900 transition-colors duration-300" 
                    />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + sectionIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="flex items-center space-x-2 text-muted-300 hover:text-gold-500 transition-colors duration-300 group"
                      >
                        {link.icon && (
                          <link.icon 
                            size={16} 
                            className="text-muted-400 group-hover:text-gold-500 transition-colors duration-300" 
                          />
                        )}
                        <span className="text-sm">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-8 border-t border-muted-800"
        >
          <div className="text-center">
            <h3 className="text-xl font-serif font-bold mb-4 text-white">
              Stay Updated with Our Latest Offers
            </h3>
            <p className="text-muted-300 mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for exclusive deals, new collections, and business insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-4 py-3 bg-muted-800 border border-muted-700 rounded-lg text-white placeholder-muted-400 focus:outline-none focus:border-gold-500 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-6 border-t border-muted-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-400 text-sm">
              © {currentYear} NSQUARE. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-400">
              <a href="#privacy" className="hover:text-gold-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-gold-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-gold-500 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
