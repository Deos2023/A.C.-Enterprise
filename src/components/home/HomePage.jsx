import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Phone, MapPin, Mail, Sparkles, Gem, Heart } from 'lucide-react';
import { li, nav } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const navigate = useNavigate()

  const heroSlides = [
    {
      title: "Premium Beauty Products",
      subtitle: "Discover the finest cosmetics and fragrances",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      cta: "Explore Collection",

    },
    {
      title: "Perfumes & Fragrances",
      subtitle: "Luxury fragrances for every occasion",
      image: "/images/perfume3.jpg",
      cta: "View Perfumes",

    },
    {
      title: "Wholesale & Retail",
      subtitle: "Quality products at competitive prices",
      image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
      cta: "Contact Us",

    }
  ];

  const categories = [
    {
      name: "Cosmetics",
      description: "Premium makeup products for all skin types",
      image: "/images/makeup1.jpeg",
      icon: <Sparkles className="text-pink-500" size={32} />
    },
    {
      name: "Perfumes",
      description: "Luxury fragrances for men and women",
      image: "/images/perfume2.jpeg",
      icon: <Gem className="text-blue-500" size={32} />
    },
    {
      name: "Hair Accessories",
      description: "Hair accessories collection",
      image: "/images/hairclip1.jpeg",
      icon: <Heart className="text-red-500" size={32} />
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      comment: "The quality of their cosmetics is exceptional. Highly recommended!",
      rating: 5
    },
    {
      name: "Rahul Kapoor",
      comment: "Great wholesale prices and excellent customer service.",
      rating: 4
    },
    {
      name: "Anjali Mehta",
      comment: "Their Emotion jewelry collection is stunning and affordable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
        ))}

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            {heroSlides[currentSlide].subtitle}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              if (heroSlides[currentSlide].cta === "Explore Collection") {
                navigate("/makeup");
              } else if (heroSlides[currentSlide].cta === "View Perfumes") {
                navigate("/perfumes");
              } else if (heroSlides[currentSlide].cta === "Contact Us") {
                navigate("/contact");
              }
            }}
            className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-3 rounded-full font-medium text-lg flex items-center mx-auto"
          >
            {heroSlides[currentSlide].cta}
            <ArrowRight className="ml-2" size={20} />
          </motion.button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Welcome to A.C. Enterprise</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Established on May 8, 2025, A.C. Enterprise has been providing premium cosmetics and emotion jewelry
              to wholesale and retail customers. Our commitment to quality and customer satisfaction has made us
              a trusted name in the industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold text-gray-800 ml-3">{category.name}</h3>
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                  <Link to={category.name === "Cosmetics" ? "/makeup" : category.name === "Perfumes" ? "/perfumes" : "/hair-accessories"}>
                    <button className="mt-4 text-pink-500 font-medium flex items-center">
                    Explore
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                  </Link>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our products and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-pink-50 rounded-xl p-6 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                <p className="font-medium text-gray-800">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to us for wholesale inquiries, product information, or any other questions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-pink-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600">+91 7044511739</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-pink-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600">acenterprise44@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-pink-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                52 Weston Street, 4th Floor Room No- 415, Kolkata - 700012
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
};

export default Homepage;