import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header isDark={isDark} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <footer className="footer">
            <div className="container">
              <p>&copy; 2024 Your Name. All rights reserved.</p>
              <p>Built with React & Framer Motion</p>
            </div>
          </footer>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;