import PropTypes from "prop-types";
import Details from "./Details";

const WineDetails = ({ description, info }) => {
  return (
    <Details className="bg-backgroundColor-purpleMid tracking-wide max-h-[85px] md:max-h-[95px] sm:max-w-[160px] lg:min-w-[170px] lg:max-w-[200px] z-10">
      <p className="mb-0 lg:mb-2 text-base md:text-lg lg:text-xl">
        {description}
      </p>
      <p className="text-base sm:text-lg lg:text-xl">{info}</p>
    </Details>
  );
};

WineDetails.propTypes = {
  description: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default WineDetails;
