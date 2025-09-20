import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, User, ChevronDown } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendViaWhatsApp = (e) => {
    e.preventDefault();
    
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/917044511739?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const mapVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            We'd love to hear from you. Reach out to us for any inquiries about our products.
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Feel free to reach out to us through any of the following channels. We're here to assist you with all your beauty product needs.
                </p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Phone className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone Number</h3>
                    <p className="text-gray-600">+91 7044511739</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 10:00 AM - 7:00 PM</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Mail className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Address</h3>
                    <p className="text-gray-600">acenterprise44@gmail.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <MapPin className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      52 Weston Street, 4th Floor Room No- 415<br />
                      Kolkata - 700012<br />
                      Landmark: CCN News Channel Office
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Clock className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll contact you via WhatsApp shortly.
              </p>

              <form onSubmit={sendViaWhatsApp} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors appearance-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Wholesale Order">Wholesale Order</option>
                      <option value="Retail Purchase">Retail Purchase</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDown size={20} className="text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {isSubmitted ? (
                    <>Message Sent!</>
                  ) : (
                    <>
                      <MessageCircle size={20} className="mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  By clicking "Send via WhatsApp", you agree to our Privacy Policy and consent to contact via WhatsApp.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Find Us Here</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visit our location in Kolkata. We're conveniently located near CCN News Channel Office.
            </p>
          </motion.div>

          <motion.div
            variants={mapVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-xl overflow-hidden h-96 relative"
          >
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.771036742676!2d88.3518895758324!3d22.551544333208855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a5c71a3b29%3A0x2a8a9cc89b66c19!2sWeston%20St%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1719399921235!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="A.C. Enterprise Location"
              className="absolute inset-0"
            ></iframe>
            
            {/* Map Overlay Info */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <h3 className="font-semibold text-gray-800 mb-1">A.C. Enterprise</h3>
              <p className="text-sm text-gray-600">
                52 Weston Street, 4th Floor<br />
                Room No- 415, Kolkata - 700012
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions About Our Products?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're here to help you find the perfect cosmetics and jewelry for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+917044511739"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              Call Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/917044511739"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactUs;