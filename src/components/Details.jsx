import PropTypes from "prop-types";

const Details = ({ className = "", children }) => {
  return (
    <div
      className={`text-color-primary rounded-lg px-3 py-1 text-center text-lg ${className}`}
    >
      {children}
    </div>
  );
};

Details.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Details;
