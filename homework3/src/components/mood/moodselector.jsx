import React from 'react';
import '../styles/moodselector.css'

function MoodSelector({ setCurrentMood }) {
  const moods = ['Happy', 'Sad', 'Excited', 'Tired'];

  return (
    <div>
      {moods.map((mood) => (
        <button key={mood} onClick={() => setCurrentMood(mood)}>{mood}</button>
      ))}
    </div>
  );
}

export default MoodSelector;