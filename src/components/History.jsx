// src/components/History.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const History = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setEntries(saved);
  }, []);

  return (
    <motion.div className="p-3 bg-white rounded shadow-sm"  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}>
      <h4 className="mb-3">🕓 Journal History</h4>
      {entries.length === 0 && <p>No entries found.</p>}
      {entries.map((entry, idx) => (
        <motion.div key={idx} className="card mb-2"   initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }} >
          <div className="card-header">
            <strong>{entry.date}</strong>
          </div>
          <div className="card-body">
            <p>{entry.text}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default History;

