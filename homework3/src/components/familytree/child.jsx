import React from 'react';
import Grandchild from './grandchild';

const Child = ({ child }) => {
  return (
    <div>
      <h3>Child: {child.name}, Age: {child.age}</h3>

      {child.grandchildren.map((grandchild, index) => (<Grandchild key={index} grandchild={grandchild} />
      
      ))}
    </div>
  );
};

export default Child;