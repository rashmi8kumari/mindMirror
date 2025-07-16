// src/components/History.jsx
import React, { useEffect, useState } from 'react';

const History = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setEntries(saved);
  }, []);

  return (
    <div className="p-3 bg-white rounded shadow-sm">
      <h4 className="mb-3">🕓 Journal History</h4>
      {entries.length === 0 && <p>No entries found.</p>}
      {entries.map((entry, idx) => (
        <div key={idx} className="card mb-2">
          <div className="card-header">
            <strong>{entry.date}</strong>
          </div>
          <div className="card-body">
            <p>{entry.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;

