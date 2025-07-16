// src/components/MoodDisplay.jsx
import React from 'react';
import { motion } from 'framer-motion';

const moodEmoji = {
  Happy: '😊',
  Sad: '😔',
  Angry: '😠',
  Neutral: '😐',
};

const moodMessage = {
  Happy: 'You seem happy today! Keep shining!',
  Sad: 'Feeling down? Take it easy today.',
  Angry: 'Take a breath — it’ll pass.',
  Neutral: 'Stay grounded and calm.',
};

const MoodDisplay = ({ mood }) => {
  return (
    <motion.div
      className="alert alert-info text-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness:120 }}
    >
      <h4>{moodEmoji[mood]} {mood}</h4>
      <p>{moodMessage[mood]}</p>
    </motion.div>
  );
};

export default MoodDisplay;
