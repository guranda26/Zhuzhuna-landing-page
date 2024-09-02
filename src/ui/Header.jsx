import { useState } from "react";
import MenuItems from "../components/MenuItems";
import Logo from "./Logo";
import Flags from "../components/Flags";
import { Link } from "react-router-dom";
import CloseBtn from "../components/CloseBtn";
import { useTranslation } from "react-i18next";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("geo");
  const { t } = useTranslation();

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
        <div className="flex flex-2 md:flex-1 items-center gap-4">
          <ul className="text-white flex flex-col md:flex-row md:space-y-0 space-x-4 md:space-x-2 justify-center flex-1">
            <li
              className="block md:hidden cursor-pointer font-tommaso text-md md:text-lg"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <CloseBtn /> : `${t("Menu")}`}
            </li>
            <MenuItems isMenuOpen={isMenuOpen} />
          </ul>
          {!isMenuOpen && (
            <div className="flex justify-end w-full md:w-auto md:ml-auto">
              <Flags switchLang={switchLang} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
