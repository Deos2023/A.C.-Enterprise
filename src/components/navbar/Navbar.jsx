import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User, Phone, Sparkles } from 'lucide-react';
import logo from '../../../public/logo/logo.jpeg';
// ...existing code...
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovering, setIsHovering] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Makeup', path: '/makeup' },
        { name: 'Perfumes', path: '/perfumes' },
        { name: 'Hair Accessories', path: '/hair-accessories' },
        { name: 'About Us', path: '/aboutus' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white/80 backdrop-blur-sm py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 group">
                    <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-pink-400/40 transition-all duration-500 rotate-0 group-hover:rotate-12 overflow-hidden">
                            <img
                                src={logo}
                                alt="A.C. Enterprise Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-gray-800 tracking-wide uppercase">A.C. ENTERPRISE</h1>
                        <p className="text-xs text-rose-600 font-medium">Premium Beauty & Fragrances</p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => setIsHovering(item.name)}
                            onMouseLeave={() => setIsHovering(null)}
                        >
                            <Link
                                to={item.path}
                                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 flex items-center ${location.pathname === item.path
                                    ? 'text-rose-600'
                                    : 'text-gray-700 hover:text-rose-500'
                                    }`}
                            >
                                {item.name}
                                {item.subItems && (
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            {item.subItems && isHovering === item.name && (
                                <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl py-2 mt-2 border border-gray-100 animate-fadeIn">
                                    {item.subItems.map((subItem) => (
                                        <Link
                                            key={subItem}
                                            to={`${item.path}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-rose-600 transition-colors duration-200"
                                        >
                                            {subItem}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right Icons */}
                <div className="flex items-center space-x-4">
                    {/* <button className="p-2 text-gray-700 hover:text-rose-600 transition-colors duration-300">
                        <Search size={20} />
                    </button> */}
                    {/* <button className="p-2 text-gray-700 hover:text-rose-600 transition-colors duration-300">
                        <User size={20} />
                    </button> */}
                    <button className="relative p-2 text-gray-700 hover:text-rose-600 transition-colors duration-300">
                        <ShoppingBag size={20} />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center">
                            0
                        </span>
                    </button>

                    {/* CTA Button */}
                    <a
                        href="tel:+1234567890"
                        className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-pink-300/40"
                    >
                        <Phone size={16} />
                        <span>Contact Us</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 rounded-lg bg-pink-100 text-rose-600 hover:bg-pink-200 transition-colors ml-2"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute top-full left-0 right-0 animate-slideIn">
                    <div className="px-4 py-4 space-y-1">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                <Link
                                    to={item.path}
                                    onClick={() => !item.subItems && setIsMenuOpen(false)}
                                    className="flex py-3 px-4 rounded-lg font-medium text-gray-700 hover:text-rose-600 hover:bg-pink-50/50 transition-colors items-center justify-between"
                                >
                                    <span>{item.name}</span>
                                    {item.subItems && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Mobile Submenu */}
                                {item.subItems && (
                                    <div className="pl-6 pr-4 py-1 space-y-1 bg-gray-50/50 rounded-lg">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem}
                                                to={`${item.path}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block py-2 px-4 rounded-lg text-sm text-gray-600 hover:text-rose-600 hover:bg-pink-50/30 transition-colors"
                                            >
                                                {subItem}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <a
                            href="tel:+1234567890"
                            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-3 rounded-xl font-medium mt-4"
                        >
                            <Phone size={18} />
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;