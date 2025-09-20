import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ShoppingCart, Star, Filter, ChevronDown } from 'lucide-react';

const MakeupPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Refs for section scrolling
  const lipstickRef = useRef(null);
  const eyeshadowRef = useRef(null);
  const foundationRef = useRef(null);
  const brushesRef = useRef(null);
  const concealerRef = useRef(null);

  // Check scroll position for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sample product data
  const products = {
    nailpolish: [
      { id: 1, name: 'Matte Red Nail Polish', price: 12.99, rating: 4.8, image: '/images/nailpolish.jpeg' },
      { id: 2, name: 'Nude Nail Polish', price: 24.99, rating: 4.5, image: '/images/nailpolish2.jpg' },
      { id: 3, name: 'Liquid Nail Polish - Berry', price: 15.99, rating: 4.9, image: '/images/nailpolish3.jpg' },
      { id: 4, name: 'Nail Polish Gift Set', price: 34.99, rating: 4.7, image: '/images/nailpolish4.jpg' },
    ],
    eyeshadow: [
      { id: 5, name: 'Neutral Palette', price: 29.99, rating: 4.6, image: '/images/makeup1.jpeg' },
      { id: 6, name: 'Sparkle Eyeshadow', price: 14.99, rating: 4.3, image: '/images/makeup2.jpeg' },
      { id: 7, name: 'Professional Palette', price: 45.99, rating: 4.9, image: '/images/makeup3.jpeg' },
      { id: 8, name: 'Matte Eyeshadow Set', price: 22.99, rating: 4.4, image: '/images/makeup4.jpeg' },
    ],
    foundation: [
      { id: 9, name: 'Liquid Foundation', price: 24.99, rating: 4.7, image: '/images/foundation.jpg' },
      { id: 10, name: 'Matte Foundation', price: 27.99, rating: 4.5, image: '/images/foundation2.jpg' },
    ],
    facewash: [
      { id: 13, name: 'Premium Face Wash', price: 49.99, rating: 4.9, image: '/images/facewash.jpeg' },
      { id: 14, name: 'Gentle Cleanser', price: 15.99, rating: 4.4, image: 'https://placehold.co/300x300/F5FFFA/000000?text=Gentle+Cleanser' },
      { id: 15, name: 'Exfoliating Face Wash', price: 29.99, rating: 4.6, image: 'https://placehold.co/300x300/F0FFFF/000000?text=Exfoliating+Face+Wash' },
      { id: 16, name: 'Hydrating Face Wash', price: 22.99, rating: 4.3, image: 'https://placehold.co/300x300/F0F8FF/000000?text=Hydrating+Face+Wash' },
    ],

  };

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all'
    ? Object.values(products).flat()
    : products[activeCategory];

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
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Premium Makeup Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Discover our exquisite range of cosmetics, from vibrant nail polishes to professional makeup tools
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-20 z-30 bg-white shadow-md py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === 'all' ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-700 hover:bg-pink-200'}`}
            >
              All Products
            </button>
            <button
              onClick={() => {
                setActiveCategory('nailpolish');
                scrollToSection(nailpolishRef);
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === 'nailpolish' ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-700 hover:bg-pink-200'}`}
            >
              Nail Polishes
            </button>
            <button
              onClick={() => {
                setActiveCategory('eyeshadow');
                scrollToSection(eyeshadowRef);
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === 'eyeshadow' ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-700 hover:bg-pink-200'}`}
            >
              Eyeshadows
            </button>
            <button
              onClick={() => {
                setActiveCategory('foundation');
                scrollToSection(foundationRef);
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === 'foundation' ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-700 hover:bg-pink-200'}`}
            >
              Foundations
            </button>
            <button
              onClick={() => {
                setActiveCategory('facewash');
                scrollToSection(facewashRef);
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === 'facewash' ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-700 hover:bg-pink-200'}`}
            >
              Face Wash
            </button>

          </div>
        </div>
      </section>

      {/* Sorting and Filter Section */}
      <section className="py-8 px-4 bg-white">
        {/* <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            Showing {filteredProducts.length} products
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Filter size={18} className="text-gray-600 mr-2" />
              <span className="text-gray-600 mr-2">Sort by:</span>
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* All Products View */}
      {activeCategory === 'all' && (
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
            >
              All Makeup Products
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < product.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-pink-600">{product.price}</span>
                      <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors">
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Sections (for when specific category is selected) */}
      {activeCategory !== 'all' && (
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section header with ref for scrolling */}
            <div ref={activeCategory === 'lipstick' ? lipstickRef :
              activeCategory === 'eyeshadow' ? eyeshadowRef :
                activeCategory === 'foundation' ? foundationRef :
                  activeCategory === 'brushes' ? brushesRef : concealerRef}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-800 mb-8 text-center capitalize"
              >
                {activeCategory} Collection
              </motion.h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < product.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-pink-600">${product.price}</span>
                      <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors">
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Back to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors z-40"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default MakeupPage;