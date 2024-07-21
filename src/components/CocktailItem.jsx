import PropTypes from "prop-types";

const CocktailItem = ({ src, children }) => {
  return (
    <div className="relative bg-backgroundColor-dark-backgroundCol flex space-x-5">
      <img src={src} alt="cocktail-image" />
      {children}
    </div>
  );
};

CocktailItem.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default CocktailItem;
