import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Phishing Link Detector',
            description: 'Real-time analysis and detection of Phishing links with all its stats and comprehensive reporting dashboard.',
            category: 'cybersecurity',
            technologies: ['Python', 'Nodejs', 'React'],
            //githubUrl: 'https://github.com',
            liveUrl: 'https://cybershieldai.vercel.app',
            image: '/cybershieldai.png',
        },
        /* {
             id: 2,
             title: 'Smart Home IoT System',
             description: 'Complete home automation solution with security monitoring, energy management, and voice control integration.',
             category: 'iot',
             technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'Node.js', 'React Native'],
             githubUrl: 'https://github.com',
             liveUrl: 'https://example.com',
             image: '/api/placeholder/400/250'
         },*/
        {
            id: 3,
            title: 'Weather Forecast and Hospital Management',
            description: 'MEAN Full-stack Weather Forecast and Hospital Management System which gives weather details, precaution measures to be follow with alerts and emergency services.',
            category: 'programming',
            technologies: ['React', 'Node.js', 'MongoDB', 'Vercel', 'Onrender'],
            // githubUrl: 'https://github.com',
            liveUrl: 'https://weather-final-rn65.vercel.app',
            image: '/weatherforecast.png'
        },

        {
            id: 5,
            title: 'Smart Blind Assistance System (Goggles) using IoT ',
            description: 'uses computer vision to detect obstacles and provide real-time alerts through vibration and voice assistant through earphones. ',
            category: 'iot',
            technologies: ['ESP32', 'Raspberry pi 5', 'Python', 'Computer vision'],
            //githubUrl: 'https://github.com',
            //  liveUrl: 'https://example.com',
            image: '/blind.jpg',
            pdfUrl: '/IOTBLINDGOGGLE.pdf'
        },
        /* {
             id: 6,
             title: 'Task Management App',
             description: 'Collaborative project management tool with real-time updates, file sharing, and team communication features.',
             category: 'programming',
             technologies: ['Vue.js', 'Firebase', 'Vuetify', 'PWA', 'WebSockets'],
             githubUrl: 'https://github.com',
             liveUrl: 'https://example.com',
             image: '/api/placeholder/400/250'
         }*/
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'cybersecurity', name: 'Cybersecurity' },
        { id: 'iot', name: 'IoT Projects' },
        { id: 'programming', name: 'Programming' }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="projects section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-subtitle">Showcasing my work across different domains and technologies</p>
                </motion.div>

                <div className="category-filters">
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className="projects-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-card glass-effect"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            {project.pdfUrl ? (
                                                <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer">
                                                    📄
                                                </a>
                                            ) : project.githubUrl && (
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <FiGithub size={20} />
                                                </a>
                                            )}

                                            {project.liveUrl && (
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <FiExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-technologies">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;