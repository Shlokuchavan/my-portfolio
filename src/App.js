import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { useTheme } from './hooks/useTheme';
import Footer from './components/Footer/Footer';
import ChatbotTerminal from './components/Footer/chatbot'; // Add this import
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
          <Footer />
          <ChatbotTerminal /> {/* Add this line */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;