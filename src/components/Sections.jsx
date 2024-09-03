import Heading from "./Heading";
import PropTypes from "prop-types";
import { useTheme } from "../context/ThemeContext";

const Sections = ({ title, id, children, className = "" }) => {
  const { isDarkMode } = useTheme();
  return (
    <section id={id}>
      <div
        className={`${
          isDarkMode
            ? "bg-backgroundColor-purpleEnd"
            : "bg-backgroundColor-backgroundCol"
        } md:px-[50px] max-xs:px-[30px] ${className}`}
      >
        <Heading
          text={title}
          className={`mb-5 ${isDarkMode ? "text-color-primary" : ""}`}
        ></Heading>
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
