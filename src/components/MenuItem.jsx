import React from "react";
import { Link } from "react-scroll";

const MenuItem = ({ sectionId, text, isMenuOpen, duration }) => {
  return (
    <div
      className={`md:block ${
        isMenuOpen ? "block" : "hidden"
      } cursor-pointer relative group max-md:mt-2`}
    >
      <Link
        to={sectionId}
        smooth={true}
        duration={duration}
        className="relative z-10 px-2 py-3 transition-all duration-300 ease-in-out group-hover:bg-backgroundColor-purpleStart group-hover:rounded-full max-md:text-xl"
      >
        {text}
        <span className="absolute inset-0 z-0"></span>
      </Link>
    </div>
  );
};

export default MenuItem;
