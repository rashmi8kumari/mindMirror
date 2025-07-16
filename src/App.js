// src/App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import History from './components/History';
import { motion, AnimatePresence } from 'framer-motion';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('mindmirror-theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('mindmirror-theme', newMode ? 'dark' : 'light');
  };

  return (
    <div className={`min-vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} mb-4 shadow-sm px-3`}>
        <Link className="navbar-brand" to="/">🧠 MindMirror</Link>
        <div className="ms-auto d-flex align-items-center gap-2">
  <Link className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-primary'}`} to="/">Journal</Link>
  <Link className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-success'}`} to="/history">History</Link>

  {/* Animated Toggle Button */}
  <motion.button
    whileTap={{ scale: 0.85, rotate: 15 }}
    onClick={toggleTheme}
    className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'} d-flex align-items-center gap-2`}
  >
    <AnimatePresence mode="wait" initial={false}>
      {darkMode ? (
        <motion.span
          key="light"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          ☀ Light
        </motion.span>
      ) : (
        <motion.span
          key="dark"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          🌙 Dark
        </motion.span>
      )}
    </AnimatePresence>
  </motion.button>
</div>

      </nav>

      <div className="container pb-5">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/history" element={<History darkMode={darkMode} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

