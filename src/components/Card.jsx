import PropTypes from "prop-types";
import Button from "./Button";

const Card = ({
  src,
  className = "",
  date,
  title,
  description,
  buttonClass,
  buttonVariant = "secondary",
}) => {
  return (
    <div>
      <div>
        <img src={src} alt="pour-wine" />
      </div>
      <div
        className={`bg-backgroundColor-purpleMid max-w-[413px] rounded rounded-t-none text-color-primary p-4 flex flex-col space-y-5 ${className}`}
      >
        <span className="text-sm">{date}</span>
        <h3 className="text-2xl">{title}</h3>
        <p>{description}</p>
        <div className="flex justify-end">
          <Button
            text="გაიგე მეტი"
            className={`{buttonClass} px-3 py-3`}
            variant={buttonVariant}
          ></Button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  src: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  buttonClass: PropTypes.string,
  buttonVariant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Card;
