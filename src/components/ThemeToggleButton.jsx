import React from "react";
import { useTheme } from "../context/ThemeContext";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded ${
        isDarkMode
          ? "bg-backgroundColor-backgroundCol"
          : "bg-backgroundColor-purpleStart"
      } absolute top-1 left-5 hover:bg-color-secondary`}
    >
      {isDarkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}
    </button>
  );
};
export default ThemeToggleButton;
