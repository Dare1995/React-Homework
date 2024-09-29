import React from 'react';
import Child from './child';

const Parent = ({ family }) => {
  return (
    <div>
      <h2>Parent: {family.name}</h2>
      
      {family.children.map((child, index) => (<Child key={index} child={child} />
      
      ))}
    </div>
  );
};

export default Parent;