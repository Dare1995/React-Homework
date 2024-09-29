import React from 'react';
import '../styles/mooddisplay.css'

function MoodDisplay({ mood, emoji }) {
  if (!mood) return null;

  return (
    <div>
      <h2>Current Mood: {mood}</h2>
      <span>{emoji}</span>
    </div>
  );
}

export default MoodDisplay;