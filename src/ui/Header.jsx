import { useState } from "react";
import MenuItems from "../components/MenuItems";
import Logo from "./Logo";
import Flags from "../components/Flags";
import { Link } from "react-router-dom";

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
    <header>
      <div className="px-[50px] bg-backgroundColor-dark-backgroundCol py-[10px] justify-between flex space-x-3 items-center">
        <Link to={"/"}>
          <Logo />
        </Link>
        <ul className="text-white flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center text-sm">
          <li className="block sm:hidden cursor-pointer" onClick={toggleMenu}>
            მენიუ
          </li>
          <MenuItems isMenuOpen={isMenuOpen} />
        </ul>
        <ul>
          <li className="">
            <Flags switchLang={switchLang} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
