import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, Heart, Target, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const AboutUs = () => {
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

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Values data
    const values = [
        {
            icon: <Star className="text-amber-400" size={32} />,
            title: "Quality Excellence",
            description: "We source only the highest quality cosmetics and jewelry to ensure customer satisfaction."
        },
        {
            icon: <Heart className="text-rose-500" size={32} />,
            title: "Customer Love",
            description: "Our customers are at the heart of everything we do. Their satisfaction is our priority."
        },
        {
            icon: <Target className="text-blue-500" size={32} />,
            title: "Our Mission",
            description: "To provide premium beauty products that enhance natural beauty and confidence."
        },
        {
            icon: <Users className="text-indigo-500" size={32} />,
            title: "Community",
            description: "Building a community of beauty enthusiasts who share tips, trends, and inspiration."
        }
    ];

    // Milestones data
    const milestones = [
        {
            month: "May",
            title: "Establishment",
            description: "A.C. Enterprise was founded with a vision to provide quality beauty products."
        },
        {
            month: "July",
            title: "Expansion",
            description: "Expanded our product range to include Emotion Jewelry collections."
        },
        {
            month: "August",
            title: "Recognition",
            description: "Became a trusted supplier for retail stores across the region."
        },
        {
            month: "Present",
            title: "Growth",
            description: "Continuing to grow while maintaining our commitment to quality and service."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 pt-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-600/10"></div>
                </div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About A.C. Enterprise</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Your trusted partner for premium cosmetics and exquisite jewelry since 2025
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-6 border border-pink-100">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
                                <p className="text-gray-600 mb-4">
                                    Established on May 8, 2025, A.C. Enterprise began with a simple vision: to provide high-quality
                                    cosmetics and emotion jewelry to both wholesale and retail customers. What started as a small
                                    venture has grown into a trusted name in the beauty industry.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    Our journey has been guided by a commitment to quality, customer satisfaction, and the belief
                                    that everyone deserves access to premium beauty products that make them feel confident and beautiful.
                                </p>
                                <p className="text-gray-600">
                                    Today, we continue to expand our product range while maintaining the values that have been at our
                                    core since day one.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-2xl p-6 shadow-lg">
                                <div className="text-4xl font-bold mb-2">2025</div>
                                <div className="text-sm">Year Established</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                                <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                                <div className="text-sm text-gray-600">Products Available</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                                <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
                                <div className="text-sm text-gray-600">Quality Guarantee</div>
                            </div>
                            <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-2xl p-6 shadow-lg">
                                <div className="text-3xl font-bold mb-2">24/7</div>
                                <div className="text-sm">Customer Support</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do at A.C. Enterprise
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="bg-pink-50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-16 px-4 bg-gradient-to-b from-white to-pink-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            From our beginnings to where we are today
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-400 to-rose-500 hidden md:block"></div>

                        <div className="space-y-12 md:space-y-0">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0">
                                        <div className={`bg-white rounded-2xl shadow-lg p-6 max-w-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                            <div className="text-pink-500 font-bold text-lg mb-2">{milestone.month}</div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                                            <p className="text-gray-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex md:w-1/2 items-center justify-center">
                                        <div className="w-6 h-6 rounded-full bg-pink-500 border-4 border-white shadow-lg"></div>
                                    </div>
                                    <div className="md:w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We'd love to hear from you. Reach out to us for any inquiries.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="bg-pink-50 rounded-2xl p-6 text-center shadow-md"
                        >
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="text-pink-600" size={28} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                            <p className="text-gray-600">+91 7044511739</p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="bg-pink-50 rounded-2xl p-6 text-center shadow-md"
                        >
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="text-pink-600" size={28} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                            <p className="text-gray-600">acenterprise44@gmail.com</p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="bg-pink-50 rounded-2xl p-6 text-center shadow-md"
                        >
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="text-pink-600" size={28} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
                            <p className="text-gray-600">
                                52 Weston Street, 4th Floor Room No- 415, Kolkata - 700012
                            </p>
                        </motion.div>
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Products?</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Discover our premium collection of cosmetics and jewelry that will enhance your beauty and confidence.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
                    >
                        Explore Our Collections
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutUs;