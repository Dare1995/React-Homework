import React from 'react';

const Grandchild = ({ grandchild }) => {
  return (
    <div>
      <p>Grandchild: {grandchild.name}, Hobby: {grandchild.hobby}</p>
    </div>
  );
};

export default Grandchild;