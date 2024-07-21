import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SocialMediaLink = ({ to, Icon }) => {
  return (
    <Link
      to={to}
      target="_blank"
      className="text-sm text-color-primary transition-transform duration-300 transform hover:scale-125 hover:animate-spin"
      rel="noopener noreferrer"
    >
      <Icon />
    </Link>
  );
};

SocialMediaLink.propTypes = {
  to: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default SocialMediaLink;
