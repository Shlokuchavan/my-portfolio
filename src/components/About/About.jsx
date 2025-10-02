/*import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiShield, FiCpu, FiDatabase } from 'react-icons/fi';
import './About.css';

const About = () => {
    const skills = [
        {
            icon: FiShield,
            title: 'Cybersecurity',
            description: 'Network security, threat analysis, penetration testing, and security protocols implementation.',
            technologies: ['Wireshark', 'Metasploit', 'Kali Linux', 'SIEM']
        },
        {
            icon: FiCpu,
            title: 'IoT Development',
            description: 'Building connected devices and systems with sensors, microcontrollers, and cloud integration.',
            technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'Node-RED']
        },
        {
            icon: FiCode,
            title: 'Web Development',
            description: 'Full-stack development with modern frameworks and best practices.',
            technologies: ['React', 'Node.js', 'Python', 'MongoDB']
        },
        {
            icon: FiDatabase,
            title: 'Backend Systems',
            description: 'Scalable server architecture, API development, and database management.',
            technologies: ['Express', 'Django', 'PostgreSQL', 'Docker']
        }
    ];

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
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Passionate developer with expertise across multiple domains</p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Creating Digital Solutions That Matter</h3>
                        <p>
                            I'm a passionate developer with over 3 years of experience in cybersecurity,
                            IoT development, and full-stack programming. My journey started with curiosity
                            about how things work, which evolved into building secure and innovative solutions.
                        </p>
                        <p>
                            I believe in writing clean, efficient code and implementing robust security
                            measures from the ground up. Whether it's protecting networks, building smart
                            devices, or creating web applications, I approach each project with attention
                            to detail and a focus on user experience.
                        </p>

                        <div className="stats">
                            <div className="stat">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Projects Completed</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">3+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">20+</div>
                                <div className="stat-label">Happy Clients</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="skills-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                className="skill-card glass-effect"
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="skill-icon">
                                    <skill.icon size={32} />
                                </div>
                                <h4>{skill.title}</h4>
                                <p>{skill.description}</p>
                                <div className="skill-technologies">
                                    {skill.technologies.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;*/
/*
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiShield, FiCpu, FiDatabase, FiAward, FiUsers, FiCoffee } from 'react-icons/fi';
import './About.css';

const About = () => {
    const skills = [
        {
            icon: FiShield,
            title: 'Cybersecurity',
            description: 'Exploring network security fundamentals, ethical hacking concepts, and implementing security best practices in applications.',
            technologies: ['Network Basics', 'OWASP', 'Encryption']
        },
        {
            icon: FiCpu,
            title: 'IoT Development',
            description: 'Building smart devices and automation systems with microcontrollers and sensor integration.',
            technologies: ['Arduino', 'Raspberry Pi', 'Sensors']
        },
        {
            icon: FiCode,
            title: 'Web Development',
            description: 'Creating responsive and interactive web applications using modern frameworks and technologies.',
            technologies: ['React', 'JavaScript', 'HTML/CSS', 'Node.js']
        },
        {
            icon: FiDatabase,
            title: 'Backend Development',
            description: 'Building robust server-side applications and managing databases for scalable solutions.',
            technologies: ['MongoDB', 'Express', 'APIs', 'REST']
        }
    ];

    const passions = [
        {
            icon: FiAward,
            title: 'Continuous Learning',
            description: 'Always exploring new technologies and frameworks to stay updated with industry trends.'
        },
        {
            icon: FiUsers,
            title: 'Collaborative Projects',
            description: 'Enjoy working in teams to build innovative solutions and learn from peers.'
        },
        {
            icon: FiCoffee,
            title: 'Problem Solving',
            description: 'Love tackling challenging problems and finding creative technical solutions.'
        }
    ];

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
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Passionate tech enthusiast exploring the digital world</p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Building the Future, One Line of Code at a Time</h3>
                        <p>
                            I'm a passionate technology enthusiast currently exploring the vast landscape of{' '}
                            <span className="highlight">cybersecurity</span>,{' '}
                            <span className="highlight">IoT development</span>, and{' '}
                            <span className="highlight">full-stack programming</span>. My journey began with
                            curiosity about how technology shapes our world, and it has evolved into a
                            dedicated pursuit of creating meaningful digital solutions.
                        </p>
                        <p>
                            What drives me is the endless possibility of technology to solve real-world
                            problems. Whether it's securing digital assets, building connected devices,
                            or crafting beautiful web applications, I believe in approaching every
                            challenge with creativity, attention to detail, and a user-centric mindset.
                        </p>
                        <p>
                            I'm constantly learning and growing, embracing new technologies and
                            methodologies to enhance my skills. My goal is to contribute to projects
                            that make a difference while continuously expanding my knowledge in this
                            ever-evolving field.
                        </p>

                        <div className="passions-grid">
                            {passions.map((passion, index) => (
                                <motion.div
                                    key={passion.title}
                                    className="passion-item"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="passion-icon">
                                        <passion.icon size={24} />
                                    </div>
                                    <div>
                                        <h4>{passion.title}</h4>
                                        <p>{passion.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="skills-section">
                        <motion.div
                            className="skills-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.title}
                                    className="skill-card"
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -15,
                                        scale: 1.03,
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="skill-header">
                                        <div className="skill-icon-wrapper">
                                            <skill.icon size={28} />
                                        </div>
                                        <h4>{skill.title}</h4>
                                    </div>
                                    <p>{skill.description}</p>
                                    <div className="skill-technologies">
                                        {skill.technologies.map((tech) => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="skill-glow"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;*/


import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiShield, FiCpu, FiDatabase, FiZap, FiTrendingUp, FiTarget } from 'react-icons/fi';
import './About.css';

const About = () => {
    const skills = [
        {
            icon: FiShield,
            title: 'Cybersecurity',
            description: 'Exploring network security fundamentals, ethical hacking concepts, and implementing security best practices in applications.',
            technologies: ['Network Basics', 'OWASP', 'Encryption'],
            progress: 75,
            color: '#10B981'
        },
        {
            icon: FiCpu,
            title: 'IoT Development',
            description: 'Building smart devices and automation systems with microcontrollers and sensor integration.',
            technologies: ['Arduino', 'Raspberry Pi', 'Sensors'],
            progress: 70,
            color: '#3B82F6'
        },
        {
            icon: FiCode,
            title: 'Web Development',
            description: 'Creating responsive and interactive web applications using modern frameworks and technologies.',
            technologies: ['React', 'JavaScript', 'HTML/CSS', 'Node.js'],
            progress: 85,
            color: '#8B5CF6'
        },
        {
            icon: FiDatabase,
            title: 'Backend Development',
            description: 'Building robust server-side applications and managing databases for scalable solutions.',
            technologies: ['MongoDB', 'Express', 'APIs', 'REST'],
            progress: 80,
            color: '#F59E0B'
        }
    ];

    const skillMetrics = [
        {
            icon: FiZap,
            title: 'Fast Learner',
            value: '90%',
            description: 'Quickly adapt to new technologies and frameworks'
        },
        {
            icon: FiTarget,
            title: 'Project Completion',
            value: '95%',
            description: 'Consistently deliver projects on time'
        },
        {
            icon: FiTrendingUp,
            title: 'Skill Growth',
            value: '85%',
            description: 'Continuous improvement in technical abilities'
        }
    ];

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
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Crafting digital experiences with passion and precision</p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Building the Future, One Line of Code at a Time</h3>
                        <p>
                            I'm a passionate technology enthusiast currently exploring the vast landscape of{' '}
                            <span className="highlight">cybersecurity</span>,{' '}
                            <span className="highlight">IoT development</span>, {' '}
                            <span className="highlight">flutter dart</span> and{' '}
                            <span className="highlight">full-stack programming</span>. My journey began with
                            curiosity about how technology shapes our world, and it has evolved into a
                            dedicated pursuit of creating meaningful digital solutions.
                        </p>
                        <p>
                            What drives me is the endless possibility of technology to solve real-world
                            problems. Whether it's securing digital assets, building connected devices,
                            or crafting beautiful web applications, I believe in approaching every
                            challenge with creativity, attention to detail, and a user-centric mindset.
                        </p>
                        { /* <p>
                            I'm constantly learning and growing, embracing new technologies and
                            methodologies to enhance my skills. My goal is to contribute to projects
                            that make a difference while continuously expanding my knowledge in this
                            ever-evolving field.
                        </p>*/}

                        {/* Skill Metrics */}
                        <div className="metrics-grid">
                            {skillMetrics.map((metric, index) => (
                                <motion.div
                                    key={metric.title}
                                    className="metric-card"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="metric-icon">
                                        <metric.icon size={24} />
                                    </div>
                                    <div className="metric-content">
                                        <div className="metric-value">{metric.value}</div>
                                        <div className="metric-title">{metric.title}</div>
                                        <div className="metric-description">{metric.description}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="skills-section">
                        <motion.div
                            className="skills-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.title}
                                    className="skill-card"
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -15,
                                        scale: 1.03,
                                        boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="skill-header">
                                        <div className="skill-icon-wrapper" style={{ background: skill.color }}>
                                            <skill.icon size={28} />
                                        </div>
                                        <div className="skill-title-section">
                                            <h4>{skill.title}</h4>
                                            <div className="progress-container">
                                                <div
                                                    className="progress-bar"
                                                    style={{
                                                        width: `${skill.progress}%`,
                                                        background: skill.color
                                                    }}
                                                ></div>
                                                <span className="progress-text">{skill.progress}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p>{skill.description}</p>
                                    <div className="skill-technologies">
                                        {skill.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="tech-tag"
                                                style={{ background: skill.color }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="skill-glow" style={{ background: skill.color }}></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;