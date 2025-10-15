import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiSend } from 'react-icons/fi';
import './chatbot.css';
const ChatbotTerminal = () => {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [terminalInput, setTerminalInput] = useState('');
    const [terminalOutput, setTerminalOutput] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const terminalEndRef = useRef(null);

    const commands = {
        help: "Available commands: about, skills, contact, projects, clear, social, status",
        about: "Shlok Chavan - Full Stack Developer & Cybersecurity Enthusiast. Passionate about building secure, innovative digital solutions.",
        skills: "React, Node.js, Python, Cybersecurity, IoT, MongoDB, JavaScript, TypeScript",
        contact: "Reach me at: shlok@example.com | LinkedIn: /in/shlokchavan | GitHub: @shlokchavan",
        projects: "Check my projects above! Network tools, IoT systems, Web apps, Security utilities",
        social: "GitHub • LinkedIn • Instagram • Twitter",
        status: "🟢 SYSTEM ONLINE | 🛡️ SECURITY ACTIVE | 💻 DEVELOPMENT MODE",
        clear: "clear"
    };

    const executeCommand = (cmd) => {
        const lowerCmd = cmd.toLowerCase().trim();

        if (lowerCmd === 'clear') {
            setTerminalOutput([]);
            return;
        }

        if (commands[lowerCmd]) {
            addToTerminal(`> ${cmd}`, 'user');
            setTimeout(() => {
                addToTerminal(commands[lowerCmd], 'system');
            }, 500);
        } else {
            addToTerminal(`> ${cmd}`, 'user');
            setTimeout(() => {
                addToTerminal(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
            }, 500);
        }
    };

    const addToTerminal = (text, type = 'system') => {
        setTerminalOutput(prev => [...prev, { text, type, id: Date.now() }]);
    };

    const handleTerminalSubmit = (e) => {
        e.preventDefault();
        if (terminalInput.trim()) {
            executeCommand(terminalInput);
            setTerminalInput('');
        }
    };

    useEffect(() => {
        if (terminalEndRef.current) {
            terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [terminalOutput]);

    useEffect(() => {
        if (isChatbotOpen) {
            setIsTyping(true);
            setTimeout(() => {
                addToTerminal("🛡️ CYBER TERMINAL v2.1.3 - SYSTEM READY", 'system');
                addToTerminal("Type 'help' for available commands", 'system');
                setIsTyping(false);
            }, 1000);
        }
    }, [isChatbotOpen]);

    return (
        <div className="chatbot-container">
            <AnimatePresence>
                {isChatbotOpen && (
                    <motion.div
                        className="cyber-terminal chatbot-terminal"
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ duration: 0.3, type: "spring" }}
                    >
                        <div className="terminal-header">
                            <div className="terminal-title">
                                <FiTerminal />
                                CYBER_TERMINAL — ROOT@SHLOK-SYSTEM
                            </div>
                            <button
                                className="terminal-close"
                                onClick={() => setIsChatbotOpen(false)}
                            >
                                ×
                            </button>
                        </div>

                        <div className="terminal-body">
                            <div className="output-container">
                                {terminalOutput.map((line) => (
                                    <div
                                        key={line.id}
                                        className={`output-line ${line.type}`}
                                    >
                                        {line.text}
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="output-line system">
                                        <span className="typing-indicator">█</span>
                                    </div>
                                )}
                                <div ref={terminalEndRef} />
                            </div>

                            <form onSubmit={handleTerminalSubmit} className="input-form">
                                <span className="prompt">root@shlok:~$</span>
                                <input
                                    type="text"
                                    value={terminalInput}
                                    onChange={(e) => setTerminalInput(e.target.value)}
                                    className="terminal-input"
                                    placeholder="Type 'help' for commands..."
                                    autoFocus
                                />
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className="cyber-btn chatbot-toggle"
                onClick={() => setIsChatbotOpen(!isChatbotOpen)}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
            >
                <FiTerminal />
                {isChatbotOpen ? 'CLOSE_TERMINAL' : 'OPEN_TERMINAL'}
            </motion.button>
        </div>
    );
};

export default ChatbotTerminal;