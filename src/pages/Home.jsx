import React, {useState} from 'react';
import JournalInput from '../components/JournalInput';
import MoodDisplay from '../components/MoodDisplay';
import Suggestions from '../components/Suggestions';
import MoodChart from '../components/MoodChart';
import { motion } from 'framer-motion';


function Home({darkMode}){
    const [entry, setEntry] = useState('');
    const [mood, setMood] = useState('');

    return(

        <motion.div className="p-3 bg-white rounded shadow-sm" initial={{opacity:0, y:30}} animate={{ opacity:1, y: 0 }} transition={{ duration:0.4}} style={{ backgroundColor: darkMode ? '#222' : "#fff"}}>
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