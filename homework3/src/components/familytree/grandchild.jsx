import PropTypes from "prop-types"

const Grandchild = ({ grandchild }) => {
  return (
    <div>
      <p>Grandchild: {grandchild.name}, Hobby: {grandchild.hobby}</p>
    </div>
  );
};

Grandchild.propTypes = {
  grandchild: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hobby: PropTypes.string.isRequired,
  })
};

export default Grandchild;