import React, { useState } from "react";
import JournalInput from "../components/JournalInput";
import MoodDisplay from "../components/MoodDisplay";
import Suggestions from "../components/Suggestions";
import MoodChart from "../components/MoodChart";
import { motion } from "framer-motion";

function Home({ darkMode }) {
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState("");

  return (
    <motion.div
      className="alert alert-primary shadow-sm py-3 px-4 rounded-4 mb-4"
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "linear-gradient(135deg, #d0e6ff, #c0d4ff)",
        color: "#003366",
        fontSize: "1.25rem",
        fontWeight: "500",
        letterSpacing: "0.5px",
        border: "1px solid #a9c5f5",
      }}
    >
      <h2 className="mb-4">How are you feeling today?</h2>
      <JournalInput entry={entry} setEntry={setEntry} setMood={setMood} />
      {mood && (
        <>
          <MoodDisplay mood={mood} />
          <Suggestions mood={mood} />
          <MoodChart mood={mood} />
        </>
      )}
    </motion.div>
  );
}

export default Home;
