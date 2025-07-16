// src/components/JournalInput.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const JournalInput = ({ entry, setEntry, setMood }) => {
  const [message, setMessage] = useState('');

  const handleAnalyze = () => {
    if (!entry.trim()) return;

    let mood = 'Neutral';
    const lower = entry.toLowerCase();
    if (lower.includes('sad') || lower.includes('tired')) mood = 'Sad';
    else if (lower.includes('happy') || lower.includes('great')) mood = 'Happy';
    else if (lower.includes('angry') || lower.includes('frustrated')) mood = 'Angry';

    setMood(mood);
    setMessage('Entry analyzed and saved!');

    // 👉 Save to localStorage
    const existing = JSON.parse(localStorage.getItem('journalEntries')) || [];
    const newEntry = {
      date: new Date().toISOString().split('T')[0],
      text: entry,
    };
    localStorage.setItem('journalEntries', JSON.stringify([newEntry, ...existing]));
    setEntry('');
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y:0 }} transition={{ duration:0.3, delay:0.1 }}>
      <textarea
        className="form-control mb-3"
        rows="6"
        placeholder="Write about your day..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <motion.button   whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }} className="btn btn-dark px-4 py-2 rounded-pill" onClick={handleAnalyze}>Analyze Mood</motion.button>
      {message && <div className="alert alert-success">{message}</div>}
    </motion.div>
  );
};

export default JournalInput;

