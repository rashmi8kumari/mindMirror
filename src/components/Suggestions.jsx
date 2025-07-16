// src/components/Suggestions.jsx
import React from 'react';
import { motion } from 'framer-motion';

const suggestions = {
  Happy: ["Spread your happiness!", "Celebrate the little wins!"],
  Sad: ["Watch a calming video", "Take a walk outside", "Write 3 things you’re grateful for"],
  Angry: ["Do deep breathing", "Listen to soft music", "Take a 5-minute break"],
  Neutral: ["Drink some water", "Stretch a little", "Keep going slow and steady"],
};

const Suggestions = ({ mood }) => {
  const list = suggestions[mood] || [];

  return (
    <motion.div
      className="card mb-4 p-3 bg-light"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <h5 className="mb-2">Suggestions for you</h5>
      <ul className="list-group">
        {list.map((item, index) => (
          <li className="list-group-item" key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Suggestions;
