import React from 'react';
import './prioritylist.css';

const PriorityList = ({ name, priority }) => {
  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <span className="task-name">{name}</span> 
      <span className="task-priority">({priority} priority)</span>
    </li>
  );
};

export default PriorityList;