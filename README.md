# MindMirror – Journal & Mood Analyzer
## A beautiful, interactive mental wellness journal powered by React, Bootstrap 5, and Framer Motion.

🚀 Features

📝 Write Daily Journal Entries

🎯 AI-like Mood Detection (based on text)

📈 Mood Trend Visualization (with Recharts)

🎨 Light / Dark Mode Toggle

✨ Smooth Animations with Framer Motion

📜 Persistent Journal History (using localStorage)

🔍 Responsive & Minimal UI (Bootstrap 5)

## Tech Stack

React - 	Component-based architecture

Bootstrap 5 - 	Responsive and modern styling

Framer Motion - 	Smooth animations

Recharts - 	Mood trend visualization

localStorage	 - Journal data persistence

mindmirror/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── JournalInput.jsx
│   │   ├── MoodDisplay.jsx
│   │   ├── MoodChart.jsx
│   │   ├── Suggestions.jsx
│   │   └── History.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md

## How It Works

User writes a journal entry.

On clicking "Analyze Mood", keywords are scanned (e.g. happy, sad, angry).

Mood is detected and:

Displayed with emoji and message

Suggestions shown (motivational tips)

Mood chart updated

Entry saved to localStorage

User can toggle between Light/Dark mode

Past entries shown in the History page.

🔧 Customization

Modify mood keywords → JournalInput.jsx

Add your own quotes/suggestions → Suggestions.jsx

Replace dummy chart data → MoodChart.jsx

📈 Future Improvements

 Export PDF of journal entries

 Speech-to-text for journaling

 Emoji lock screen / passcode

 Cloud-based journal syncing

 Mood-based theme colors

🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📄 License

MIT License. Feel free to fork, modify and share! 💙

🙌 Acknowledgements

React

Bootstrap 5

Framer Motion

Recharts

✨ Made with ❤️ by Rashmi Kumari

