// src/components/JournalInput.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const JournalInput = ({ entry, setEntry, setMood, darkMode }) => {
  const [message, setMessage] = useState("");

  const handleAnalyze = () => {
    if (!entry.trim()) return;

    let mood = "Neutral";
    const lower = entry.toLowerCase();
    if (lower.includes("sad") || lower.includes("tired")) mood = "Sad";
    else if (lower.includes("happy") || lower.includes("great")) mood = "Happy";
    else if (lower.includes("angry") || lower.includes("frustrated"))
      mood = "Angry";

    setMood(mood);
    setMessage("Entry analyzed and saved!");

    // 👉 Save to localStorage
    const existing = JSON.parse(localStorage.getItem("journalEntries")) || [];
    const newEntry = {
      date: new Date().toISOString().split("T")[0],
      text: entry,
    };
    localStorage.setItem(
      "journalEntries",
      JSON.stringify([newEntry, ...existing])
    );
    setEntry("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <motion.textarea
        className="form-control shadow-sm p-3 rounded-4 border-0"
        rows="5"
        placeholder="Write about your day..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        style={{
          background: darkMode
            ? "rgba(255, 255, 255, 0.05)"
            : "linear-gradient(135deg, #eef5ff, #e6f0ff)",
          color: darkMode ? "#f8f9fa" : "#333",
          resize: "none",
          fontSize: "1rem",
          border: darkMode ? "1px solid #555" : "1px solid #cbdaf5",
          transition: "all 0.3s ease-in-out",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="mt-4 text-end">
        {" "}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-dark px-4 py-2 rounded-pill"
          onClick={handleAnalyze}
        >
          Analyze Mood
        </motion.button>
      </div>

      {message && <div className="alert alert-success">{message}</div>}
    </motion.div>
  );
};

export default JournalInput;
