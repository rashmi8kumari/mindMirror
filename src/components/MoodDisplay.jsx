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
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h4>{moodEmoji[mood]} {mood}</h4>
      <p>{moodMessage[mood]}</p>
    </motion.div>
  );
};

export default MoodDisplay;
