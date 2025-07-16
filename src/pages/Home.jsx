import React, {useState} from 'react';
import JournalInput from '../components/JournalInput';
import MoodDisplay from '../components/MoodDisplay';
import Suggestions from '../components/Suggestions';
import MoodChart from '../components/MoodChart';

function Home(){
    const [entry, setEntry] = useState('');
    const [mood, setMood] = useState('');

    return(
        <div className="p-3 bg-white rounded shadow-sm">
            <h2 className="mb-4">How are you feeling today?</h2>
            <JournalInput entry={entry} setEntry={setEntry} setMood={setMood} />
            {mood && (
                <>
                <MoodDisplay mood={mood} />
                <Suggestions mood={mood} />
                <MoodChart mood={mood} />
                </>
            )}
        </div>
    );
}

export default Home;