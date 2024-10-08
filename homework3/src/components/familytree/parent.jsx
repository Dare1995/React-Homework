import Child from './child';
import PropTypes from "prop-types" 

const Parent = ({ family }) => {
  return (
    <>
      <h2>Parent: {family.name}</h2>
      
      {family.children.map((child, index) => (<Child key={index} child={child} />
      
      ))}
    </>
  );
};

Parent.propTypes = {
  family: PropTypes.shape({
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default Parent;