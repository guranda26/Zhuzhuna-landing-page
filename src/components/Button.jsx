import PropTypes from "prop-types";

const Button = ({
  text,
  className = "",
  variant = "secondary",
  type = "button",
}) => {
  const bgColorClass =
    variant === "primary"
      ? "bg-buttonColor-primary"
      : "bg-buttonColor-secondary";

  return (
    <button
      type={type}
      className={`rounded-full ${bgColorClass} text-color-primary transition-transform transform hover:scale-105 focus:scale-105 hover:shadow-lg focus:shadow-lg hover:animate-pulse focus:animate-pulse ${className}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.string,
};

export default Button;
