import React, { useState } from 'react';
import MoodSelector from './components/mood/moodselector';
import MoodDisplay from './components/mood/mooddisplay';
import Parent from './components/familytree/parent';

const moodEmojiMap = {
  Happy: "😊",
  Sad: "😢",
  Excited: "🤩",
  Tired: "😴",
};

function App() {
  const [currentMood, setCurrentMood] = useState(null); // probaj da narpavish arrow function!

  return (
    <div>
      <MoodSelector setCurrentMood={setCurrentMood} />
      <MoodDisplay mood={currentMood} emoji={moodEmojiMap[currentMood]} />
    </div>
  );
}

// const family = {
//   name: "John (Parent)",
//   children: [
//     {
//       name: "Alex (Child)",
//       age: 30,
//       grandchildren: [
//         { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
//         { name: "Sophia (Grandchild)", hobby: "Drawing" },
//       ],
//     },
//     {
//       name: "Emma (Child)",
//       age: 28,
//       grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
//     },
//   ],
// };

// function App() {
//   return (
//     <div>
//       <h1>Family Tree</h1>
//       <Parent family={family} />
//     </div>
//   );
// }

export default App;