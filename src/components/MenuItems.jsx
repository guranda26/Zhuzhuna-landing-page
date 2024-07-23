import React from "react";
import MenuItem from "./MenuItem";
import { useTranslation } from "react-i18next";

const MenuItems = ({ isMenuOpen }) => {
  const { t } = useTranslation();
  return (
    <>
      <MenuItem
        sectionId="about-us"
        text={t("About.Title")}
        isMenuOpen={isMenuOpen}
      />
      <MenuItem
        sectionId="news"
        text={t("News.Title")}
        isMenuOpen={isMenuOpen}
      />
      <MenuItem
        sectionId="wines"
        text={t("Bottle.Title")}
        isMenuOpen={isMenuOpen}
      />
      <MenuItem
        sectionId="cocktails"
        text={t("Cocktail.Title")}
        isMenuOpen={isMenuOpen}
      />
      <MenuItem sectionId="bar" text={t("Bar.Title")} isMenuOpen={isMenuOpen} />
      <MenuItem
        sectionId="footer"
        text={t("Contact.Title")}
        isMenuOpen={isMenuOpen}
      />
    </>
  );
};

export default MenuItems;
