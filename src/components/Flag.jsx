import PropTypes from "prop-types";

const Flag = ({ src, alt, isSelected, onClick }) => {
  return (
    <img
      className={`sm:min-w-6 w-6 max-xs:w-4 rounded-sm cursor-pointer ${
        isSelected ? "outline outline-outlineColor-primary" : ""
      }`}
      src={src}
      alt={alt}
      onClick={onClick}
    />
  );
};

Flag.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Flag;
