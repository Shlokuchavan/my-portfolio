import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(''); // Add this line

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(''); // Clear error when user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(''); // Clear previous errors

        try {
            // Replace with your actual EmailJS credentials
            const result = await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Your Name'
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            if (result.status === 200) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });

                // Reset form after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setError('Failed to send message. Please try again or email me directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Rest of your component remains the same...
    const contactInfo = [
        {
            icon: FiMail,
            title: 'Email',
            value: 'shlokchavan3011@gmail.com',
            link: 'mailto:shlokchavan3011@gmail.com'
        },
        /*{
            icon: FiPhone,
            title: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },*/
        {
            icon: FiMapPin,
            title: 'Location',
            value: 'Mumbai, India',
            link: '#'
        }
    ];

    const socialLinks = [
        { icon: FiGithub, url: 'https://github.com/shlokchavan', name: 'GitHub' },
        { icon: FiLinkedin, url: 'hthttps://www.linkedin.com/in/shlok-chavan-17926a356', name: 'LinkedIn' },
        { icon: FiInstagram, url: 'https://instagram.com/shlokchavan_1195', name: 'Instagram' }
    ];

    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Let's collaborate on your next project</p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Let's talk about everything!</h3>
                        <p>
                            Whether you have a project in mind, want to collaborate,
                            or just want to chat about technology and security, I'd love to hear from you.
                            Feel free to reach out through any of the channels below.
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={item.title}
                                    href={item.link}
                                    className="contact-item"
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.2, delay: index * 0.1 }}
                                >
                                    <div className="contact-icon">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <div className="contact-title">{item.title}</div>
                                        <div className="contact-value">{item.value}</div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="contact-social">
                            <h4>Follow me on</h4>
                            <div className="social-links">
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
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {isSubmitted ? (
                            <motion.div
                                className="success-message glass-effect"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                            >
                                <h3>Thank You! 🎉</h3>
                                <p>Your message has been sent successfully. I'll get back to you within 24 hours!</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="btn btn-primary"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <form className="contact-form glass-effect" onSubmit={handleSubmit}>
                                {error && (
                                    <motion.div
                                        className="error-message"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {error}
                                    </motion.div>
                                )}

                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message... Tell me about your project or just say hello!"
                                        rows={6}
                                        required
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-primary submit-btn"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            <FiSend size={20} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;