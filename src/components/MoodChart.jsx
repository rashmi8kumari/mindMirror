// src/components/MoodChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dummyData = [
  { mood: 'Happy', count: 5 },
  { mood: 'Sad', count: 2 },
  { mood: 'Angry', count: 1 },
  { mood: 'Neutral', count: 3 },
];

const MoodChart = () => {
  return (
    <div className="mt-4">
      <h5>Mood Tracker (Dummy Data)</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dummyData}>
          <XAxis dataKey="mood" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodChart;
