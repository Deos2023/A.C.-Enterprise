import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
// Removed import for logo from public folder. Use <img src="/logo/logo.jpeg" /> in JSX instead.
import { Link, useNavigate } from 'react-router-dom';
const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-600"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-pink-500/10 blur-xl"></div>
      <div className="absolute -bottom-20 -left-10 w-40 h-40 rounded-full bg-rose-600/10 blur-xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg mr-4 overflow-hidden">
                <img
                  src={logo}
                  alt="A.C. Enterprise Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">A.C. ENTERPRISE</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for premium cosmetics and exquisite jewelry since 2025.
              We provide quality products for both wholesale and retail customers.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-pink-500"></div>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Makeup', 'Perfumes', 'About Us', 'Contact'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link to={`/${item.toLowerCase().split(' ').join('')}`} className="text-gray-400 hover:text-pink-400 transition-colors">{item}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-pink-500"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-pink-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 7044511739</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-pink-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">acenterprise44@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-pink-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  52 Weston Street, 4th Floor<br />
                  Room No- 415, Kolkata - 700012
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-pink-500/10 to-rose-600/10 rounded-2xl p-8 mb-16 border border-pink-500/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get updates on new products and special offers</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-gray-800 border border-gray-700 rounded-l-lg rounded-r-lg sm:rounded-r-none px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 flex-grow"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium rounded-r-lg rounded-l-lg sm:rounded-l-none px-6 py-3 mt-2 sm:mt-0 whitespace-nowrap"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} A.C. Enterprise. All rights reserved.
          </p>
          <div className="flex items-center">
            <p className="text-gray-500 text-sm mr-4">
              Developed and maintained with <Heart size={14} className="inline text-pink-500" /> by <strong>Digital Exposure Online Services</strong>
            </p>
            <motion.button
              whileHover={{ y: -5 }}
              onClick={scrollToTop}
              className="bg-gradient-to-r from-pink-500 to-rose-600 w-10 h-10 rounded-full flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        href="https://wa.me/917044511739"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </motion.a>
    </footer>
  );
};

export default Footer;