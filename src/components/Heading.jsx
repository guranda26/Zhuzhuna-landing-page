import PropTypes from "prop-types";

const Heading = ({ text, className = "" }) => {
  return (
    <h2 className={`text-5xl font-tommaso pt-[40px] ${className}`}>{text}</h2>
  );
};
Heading.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Heading;
