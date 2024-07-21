import { useState } from "react";
import MenuItems from "../components/MenuItems";
import Logo from "./Logo";
import Flags from "../components/Flags";
import { Link } from "react-router-dom";
import CloseBtn from "../components/CloseBtn";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("geo");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const switchLang = () => {
    setLanguage(!language);
  };

  return (
    <header className="bg-backgroundColor-dark-backgroundCol py-[10px]">
      <div className="px-[50px] flex justify-between items-center">
        {!isMenuOpen && (
          <Link to={"/"}>
            <Logo />
          </Link>
        )}
        <div className="flex flex-2 sm:flex-1 items-center gap-4">
          <ul className="text-white flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 justify-center flex-1">
            <li
              className="block sm:hidden cursor-pointer font-tommaso text-xl"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <CloseBtn /> : "მენიუ"}
            </li>
            <MenuItems isMenuOpen={isMenuOpen} />
          </ul>
          {!isMenuOpen && (
            <div className="flex justify-end w-full sm:w-auto sm:ml-auto">
              <Flags switchLang={switchLang} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
