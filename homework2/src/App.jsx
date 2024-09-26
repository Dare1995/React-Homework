import React from 'react';
import ListItem from './components/listitem';

const tasks = [
  { name: "Learn React", priority: "High" },
  { name: "Do Groceries", priority: "Low" },
  { name: "Exercise", priority: "High" },
  { name: "Read a Book", priority: "Medium" },
];

const App = () => {
  return (
    <div>
      <h1>Task List</h1>
      <ListItem items={tasks} />
    </div>
  );
};

export default App;