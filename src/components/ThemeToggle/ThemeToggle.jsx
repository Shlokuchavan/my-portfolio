import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
        <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <motion.div
                className="toggle-track"
                initial={false}
                animate={{
                    backgroundColor: isDark ? 'var(--primary)' : 'var(--gray-light)'
                }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="toggle-thumb"
                    initial={false}
                    animate={{
                        x: isDark ? 24 : 0,
                        backgroundColor: isDark ? 'white' : 'var(--primary)'
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
                >
                    {isDark ? (
                        <FiMoon size={14} color="var(--primary)" />
                    ) : (
                        <FiSun size={14} color="white" />
                    )}
                </motion.div>
            </motion.div>

            {/* Alternative simple button version - uncomment if you prefer this */}
            {/* <div className="theme-icon">
        {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
      </div> */}
        </motion.button>
    );
};

export default ThemeToggle;