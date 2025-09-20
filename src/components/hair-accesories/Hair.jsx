import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Filter, ChevronDown } from 'lucide-react';

const HairAccessoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState([]);

  // Sample hair accessories data
  const hairAccessories = {
    hairBands: [
      { 
        id: 1, 
        name: 'Silk Scrunchies Set', 
        price: 12.99, 
        rating: 4.8, 
        image: '../../../public/images/hairband.jpeg',
        description: 'Luxury silk scrunchies in assorted colors',
        colors: ['Pink', 'Blue', 'Black', 'White'],
        material: 'Silk'
      },
      { 
        id: 2, 
        name: 'Pearl Hair Band', 
        price: 24.99, 
        rating: 4.9, 
        image: '../../../public/images/hairband2.jpeg',
        description: 'Elegant pearl-embellished hair band',
        colors: ['White', 'Ivory'],
        material: 'Plastic with pearls'
      },
      { 
        id: 3, 
        name: 'Bohemian Headband', 
        price: 18.99, 
        rating: 4.6, 
        image: 'https://placehold.co/300x400/F5F5DC/000000?text=Bohemian+Headband',
        description: 'Colorful boho-style fabric headband',
        colors: ['Multicolor'],
        material: 'Cotton'
      },
      { 
        id: 4, 
        name: 'Velvet Hair Band', 
        price: 15.99, 
        rating: 4.7, 
        image: 'https://placehold.co/300x400/800020/FFFFFF?text=Velvet+Hair+Band',
        description: 'Luxurious velvet hair band for special occasions',
        colors: ['Burgundy', 'Navy', 'Black'],
        material: 'Velvet'
      },
    ],
    hairClips: [
      { 
        id: 5, 
        name: 'Gold Hair Claw Clip', 
        price: 14.99, 
        rating: 4.7, 
        image: '../../../public/images/hairclip1.jpeg',
        description: 'Elegant gold-finished large claw clip',
        colors: ['Gold', 'Rose Gold'],
        material: 'Metal with coating'
      },
      { 
        id: 6, 
        name: 'Butterfly Hair Clips', 
        price: 9.99, 
        rating: 4.5, 
        image: '../../../public/images/hairclip2.jpeg',
        description: 'Cute butterfly-shaped hair clips set',
        colors: ['Pink', 'Blue', 'Purple'],
        material: 'Plastic'
      },
      { 
        id: 7, 
        name: 'Pearl Barrette Set', 
        price: 16.99, 
        rating: 4.8, 
        image: 'https://placehold.co/300x400/FFFFFF/000000?text=Pearl+Barrettes',
        description: 'Set of elegant pearl-adorned hair barrettes',
        colors: ['White', 'Gold'],
        material: 'Metal with pearls'
      },
      { 
        id: 8, 
        name: 'Tortoise Shell Clips', 
        price: 22.99, 
        rating: 4.9, 
        image: 'https://placehold.co/300x400/8B4513/FFFFFF?text=Tortoise+Clips',
        description: 'Premium tortoise shell design hair clips',
        colors: ['Tortoise'],
        material: 'Acetate'
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

  // Filter accessories based on active category
  const filteredAccessories = activeCategory === 'all' 
    ? [...hairAccessories.hairBands, ...hairAccessories.hairClips] 
    : activeCategory === 'hairBands' 
      ? hairAccessories.hairBands 
      : hairAccessories.hairClips;

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
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Hair Accessories Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Discover our beautiful range of hair bands and hair clips to complete your look
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-20 z-30 bg-white shadow-md py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === 'all' ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`}
            >
              All Accessories
            </button>
            <button
              onClick={() => setActiveCategory('hairBands')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === 'hairBands' ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-700 hover:bg-pink-200'}`}
            >
              Hair Bands
            </button>
            <button
              onClick={() => setActiveCategory('hairClips')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === 'hairClips' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
            >
              Hair Clips
            </button>
          </div>
        </div>
      </section>

      {/* Sorting and Filter Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            Showing {filteredAccessories.length} products
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
        </div>
      </section>

      {/* Accessories Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredAccessories.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group relative"
              >
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <Heart 
                    size={20} 
                    className={favorites.includes(item.id) ? "text-red-500 fill-red-500" : "text-gray-600"} 
                  />
                </button>

                {/* Product Image */}
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < item.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{item.rating}</span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">Material:</span> {item.material}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {item.colors.map((color, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-purple-600">${item.price}</span>
                    <button className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors">
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
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Complete Your Hair Style
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Contact us for bulk orders or custom hair accessory designs
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
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
            >
              Call for Bulk Orders
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/917044511739"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
            >
              WhatsApp Inquiry
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HairAccessoriesSection;