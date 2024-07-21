import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MenuItems = ({ isMenuOpen }) => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <li className={`sm:block ${isMenuOpen ? "block" : "hidden"}`}>
        <button onClick={() => scrollToSection("about-us")}>
          ჩვენ შესახებ
        </button>
      </li>
      <li className={`sm:block ${isMenuOpen ? "block" : "hidden"}`}>
        <button onClick={() => scrollToSection("news")}>სიახლეები</button>
      </li>
      <li className={`sm:block ${isMenuOpen ? "block" : "hidden"}`}>
        <button onClick={() => scrollToSection("cocktail")}>კოქტეილები</button>
      </li>
      <li className={`sm:block ${isMenuOpen ? "block" : "hidden"}`}>
        <button onClick={() => scrollToSection("wines")}>ბოთლი</button>
      </li>
      <li className={`sm:block ${isMenuOpen ? "block" : "hidden"}`}>
        <button onClick={() => scrollToSection("footer")}>კონტაქტი</button>
      </li>
    </>
  );
};

export default MenuItems;
