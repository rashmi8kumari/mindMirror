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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <textarea
        className="form-control mb-3"
        rows="6"
        placeholder="Write about your day..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button className="btn btn-primary mb-3" onClick={handleAnalyze}>Analyze Mood</button>
      {message && <div className="alert alert-success">{message}</div>}
    </motion.div>
  );
};

export default JournalInput;

