import Heading from "./Heading";
import PropTypes from "prop-types";

const Sections = ({ title, id, children, className = "" }) => {
  return (
    <section id={id}>
      <div
        className={`bg-backgroundColor-backgroundCol md:px-[50px] ${className}`}
      >
        <Heading text={title} className="mb-2"></Heading>
        {children}
      </div>
    </section>
  );
};

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Sections;
