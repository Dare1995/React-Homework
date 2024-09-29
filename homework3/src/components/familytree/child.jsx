import React from 'react';
import Grandchild from './grandchild';
import PropTypes from "prop-types"

const Child = ({ child }) => {
  return (
    <div>
      <h3>Child: {child.name}, Age: {child.age}</h3>

      {child.grandchildren.map((grandchild, index) => (<Grandchild key={index} grandchild={grandchild} />

      ))}
    </div>
  );
};

Child.propTypes = {
  child: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  })
};

export default Child;