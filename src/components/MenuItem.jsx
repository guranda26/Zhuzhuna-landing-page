import React from "react";

const MenuItem = ({ sectionId, text, isMenuOpen }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li
      className={`md:block ${
        isMenuOpen ? "block" : "hidden"
      } cursor-pointer relative group`}
    >
      <button
        onClick={() => scrollToSection(sectionId)}
        className="relative z-10 px-2 py-3 transition-all duration-300 ease-in-out group-hover:bg-backgroundColor-purpleStart group-hover:rounded-full"
      >
        {text}
        <span className="absolute inset-0 z-0"></span>
      </button>
    </li>
  );
};

export default MenuItem;
