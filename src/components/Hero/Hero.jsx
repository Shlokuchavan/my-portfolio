/*import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const socialLinks = [
        { icon: FiGithub, url: 'https://github.com', name: 'GitHub' },
        { icon: FiLinkedin, url: 'https://linkedin.com', name: 'LinkedIn' },
        { icon: FiInstagram, url: 'https://instagram.com', name: 'Instagram' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const handleDownloadCV = () => {
        // Add your CV download logic here
        const link = document.createElement('a');
        link.href = '/path-to-your-cv.pdf';
        link.download = 'Your-Name-CV.pdf';
        link.click();
    };

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants} className="hero-title">
                        Hi, I'm <span className="gradient-text">Shlok Chavan</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="hero-subtitle">
                        Cybersecurity Specialist & Full Stack Developer
                    </motion.p>

                    <motion.p variants={itemVariants} className="hero-description">
                        Passionate about creating secure, innovative solutions through
                        cybersecurity research, IoT development, and modern programming practices.
                        I build robust applications with cutting-edge technologies.
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-actions">
                        <motion.button
                            className="btn btn-primary"
                            onClick={handleDownloadCV}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiDownload size={20} />
                            Download CV
                        </motion.button>

                        <motion.button
                            className="btn btn-secondary"
                            onClick={scrollToProjects}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                        </motion.button>
                    </motion.div>

                    <motion.div variants={itemVariants} className="social-links">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                className="social-link"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <link.icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="floating-card card-1 glass-effect"></div>
                    <div className="floating-card card-2 glass-effect"></div>
                    <div className="floating-card card-3 glass-effect"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero; */

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiDownload, FiCode, FiShield, FiCpu } from 'react-icons/fi';
import './Hero.css';
import profilePic from "../../photos/profilepic.jpg";


const Hero = () => {
    const socialLinks = [
        { icon: FiGithub, url: 'https://github.com/shlokuchavan', name: 'GitHub' },
        { icon: FiLinkedin, url: 'https://linkedin.com/in/shlok-chavan-17926a356', name: 'LinkedIn' },
        { icon: FiInstagram, url: 'https://instagram.com/shlok_chavan_1195/', name: 'Instagram' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const handleDownloadCV = () => {
        // Use an absolute path from the public folder
        const link = document.createElement('a');
        link.href = '/Shlok-Chavan-cv.pdf'; // public folder files are served from root
        link.download = 'Shlok-Chavan-cv.pdf';
        document.body.appendChild(link); // append link to DOM
        link.click(); // trigger download
        document.body.removeChild(link); // remove the link
    };;

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants} className="hero-title">
                        Hello, I'm <span className="gradient-text">Shlok Chavan</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="hero-subtitle-container">
                        <span className="hero-subtitle">
                            Tech Enthusiast
                        </span>
                        <div className="title-decoration"></div>
                    </motion.div>

                    <motion.p variants={itemVariants} className="hero-description">
                        Passionate about crafting digital experiences that blend innovation with functionality.
                        I specialize in building modern web applications while exploring the fascinating worlds
                        of <span className="highlight">Cybersecurity</span>, <span className="highlight">IoT</span>, <span className="highlight">Flutter Dart</span> and emerging technologies.
                        Currently turning ideas into reality through clean code and creative solutions.
                    </motion.p>

                    <motion.div variants={itemVariants} className="tech-interests">
                        <div className="interest-item">
                            <FiCode className="interest-icon" />
                            <span>Web Development</span>
                        </div>
                        <div className="interest-item">
                            <FiShield className="interest-icon" />
                            <span>Cybersecurity</span>
                        </div>
                        <div className="interest-item">
                            <FiCpu className="interest-icon" />
                            <span>IoT Projects</span>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="hero-actions">
                        <motion.button
                            className="btn btn-primary"
                            onClick={handleDownloadCV}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiDownload size={20} />
                            Download CV
                        </motion.button>

                        <motion.button
                            className="btn btn-secondary"
                            onClick={scrollToProjects}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.button>
                    </motion.div>

                    <motion.div variants={itemVariants} className="social-links">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                className="social-link"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <link.icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="image-wrapper">
                        <img
                            src={profilePic}
                            alt="Shlok Chavan"
                            className="hero-image"
                        />
                        <div className="image-glow"></div>
                    </div>

                    {/* Floating tech elements */}
                    <div className="floating-tech tech-1">
                        <FiCode size={24} />
                    </div>
                    <div className="floating-tech tech-2">
                        <FiShield size={24} />
                    </div>
                    <div className="floating-tech tech-3">
                        <FiCpu size={24} />
                    </div>
                </motion.div>
            </div>

            {/* Background decoration elements */}
            <div className="hero-bg-elements">
                <div className="bg-circle circle-1"></div>
                <div className="bg-circle circle-2"></div>
                <div className="bg-circle circle-3"></div>
            </div>
        </section>
    );
};

export default Hero;