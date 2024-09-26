import React from 'react';
import PriorityList from './priorityList';

const ListItem = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <PriorityList name={item.name} priority={item.priority} />
      ))}
    </ul>
  );
};

export default ListItem;