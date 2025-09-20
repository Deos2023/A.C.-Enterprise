import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Filter, ChevronDown } from 'lucide-react';

const PerfumeSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState([]);

  // Sample perfume data
  const perfumes = {
    women: [
      {
        id: 1,
        name: 'Floral Elegance',
        price: 49.99,
        rating: 4.8,
        image: '/images/perfume1.jpeg',
        description: 'A delicate blend of jasmine and rose with hints of vanilla',
        size: '50ml'
      },
      {
        id: 2,
        name: 'Midnight Bloom',
        price: 59.99,
        rating: 4.9,
        image: '/images/perfume2.jpeg',
        description: 'Mysterious blend of night-blooming flowers and amber',
        size: '75ml'
      },
      {
        id: 3,
        name: 'Sunset Kiss',
        price: 45.99,
        rating: 4.6,
        image: '/images/perfume3.jpeg',
        description: 'Warm citrus notes with a touch of honey and musk',
        size: '50ml'
      },
      {
        id: 4,
        name: 'Velvet Petals',
        price: 65.99,
        rating: 4.7,
        image: 'https://placehold.co/300x400/FADADD/000000?text=Women+Perfume+4',
        description: 'Luxurious blend of peony, orchid, and white musk',
        size: '100ml'
      },
    ],
    men: [
      {
        id: 5,
        name: 'Wooden Mystique',
        price: 54.99,
        rating: 4.7,
        image: '/images/perfume1.jpeg',
        description: 'Rich blend of sandalwood, cedar, and bergamot',
        size: '75ml'
      },
      {
        id: 6,
        name: 'Noir Essence',
        price: 62.99,
        rating: 4.9,
        image: '/images/perfume1.jpeg',
        description: 'Dark and mysterious with notes of leather and tobacco',
        size: '100ml'
      },
      {
        id: 7,
        name: 'Fresh Aqua',
        price: 48.99,
        rating: 4.5,
        image: '/images/perfume3.jpg',
        description: 'Crisp aquatic notes with citrus and marine accents',
        size: '50ml'
      },
      {
        id: 8,
        name: 'Urban Legend',
        price: 69.99,
        rating: 4.8,
        image: 'https://placehold.co/300x400/2F4F4F/FFFFFF?text=Men+Perfume+4',
        description: 'Bold combination of spice, amber, and vetiver',
        size: '100ml'
      },
    ]
  };

  // Toggle favorite status
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filter perfumes based on active category
  const filteredPerfumes = activeCategory === 'all'
    ? [...perfumes.women, ...perfumes.men]
    : activeCategory === 'women'
      ? perfumes.women
      : perfumes.men;

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
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Luxury Fragrance Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Discover our exquisite range of perfumes for men and women
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-20 z-30 bg-white shadow-md py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
            >
              All Perfumes
            </button>
            <button
              onClick={() => setActiveCategory('women')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === 'women' ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-700 hover:bg-pink-200'}`}
            >
              Women's Fragrances
            </button>
            <button
              onClick={() => setActiveCategory('men')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === 'men' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
            >
              Men's Fragrances
            </button>
          </div>
        </div>
      </section>

      {/* Sorting and Filter Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            Showing {filteredPerfumes.length} products
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Filter size={18} className="text-gray-600 mr-2" />
              <span className="text-gray-600 mr-2">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </div>
      </section>

      {/* Perfume Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredPerfumes.map((perfume) => (
              <motion.div
                key={perfume.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group relative"
              >
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(perfume.id)}
                  className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <Heart
                    size={20}
                    className={favorites.includes(perfume.id) ? "text-red-500 fill-red-500" : "text-gray-600"}
                  />
                </button>

                {/* Product Image */}
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{perfume.name}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {perfume.size}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{perfume.description}</p>

                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < perfume.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{perfume.rating}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">${perfume.price}</span>
                    <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Can't Find Your Signature Scent?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Contact us for personalized fragrance recommendations
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+917044511739"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
            >
              Call for Consultation
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/917044511739"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
            >
              WhatsApp Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PerfumeSection;