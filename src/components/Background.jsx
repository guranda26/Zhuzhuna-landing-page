import PropTypes from "prop-types";

const Background = ({ src, className = "", children }) => {
  return (
    <div
      className={`${className} bg-cover bg-top md:bg-right-top w-screen px-[50px]`}
      style={{ backgroundImage: `url(${src})` }}
    >
      {children}
    </div>
  );
};

Background.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Background;
