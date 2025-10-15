import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FiGithub, url: 'https://github.com/shlokchavan', name: 'GitHub' },
        { icon: FiLinkedin, url: 'https://www.linkedin.com/in/shlok-chavan-17926a356', name: 'LinkedIn' },
        { icon: FiInstagram, url: 'https://instagram.com/shlokchavan_1195', name: 'Instagram' },
        { icon: FiMail, url: 'mailto:shlokchavan3011@gmail.com', name: 'Email' }
    ];

    const quickLinks = [
        { name: 'Home', url: '#home' },
        { name: 'About', url: '#about' },
        { name: 'Projects', url: '#projects' },
        { name: 'Contact', url: '#contact' }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Professional Footer */}
            <footer className="professional-footer">
                <div className="footer-content">
                    <div className="container">
                        <div className="footer-main">
                            {/* Brand Section */}
                            <motion.div
                                className="footer-brand"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="brand-name">Shlok Chavan</h3>
                                <p className="brand-tagline">
                                    Full Stack Developer & Cybersecurity Specialist
                                </p>
                                <div className="social-links">
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.url}
                                            className="social-link"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            transition={{ duration: 0.2, delay: index * 0.1 }}
                                        >
                                            <link.icon />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Quick Links */}
                            <motion.div
                                className="footer-links"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <h4 className="links-title">Quick Links</h4>
                                <ul className="links-list">
                                    {quickLinks.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.url}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                className="footer-contact"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h4 className="contact-title">Get In Touch</h4>
                                <div className="contact-info">
                                    <p className="contact-item">
                                        <FiMail className="contact-icon" />
                                        shlokchavan3011@gmail.com
                                    </p>

                                </div>
                            </motion.div>
                        </div>

                        {/* Footer Bottom */}
                        <motion.div
                            className="footer-bottom"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="footer-divider"></div>
                            <div className="bottom-content">
                                <div className="copyright">
                                    <p>
                                        &copy; {currentYear} Shlok Chavan. All rights reserved.
                                    </p>
                                    <p className="made-with">
                                        Made with <FiHeart className="heart-icon" /> using React & Framer Motion
                                    </p>
                                </div>
                                <div className="footer-actions">
                                    <button
                                        className="back-to-top"
                                        onClick={scrollToTop}
                                    >
                                        Back to Top
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;