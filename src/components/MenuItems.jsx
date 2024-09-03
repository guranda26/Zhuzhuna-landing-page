import React from "react";
import MenuItem from "./MenuItem";
import { useTranslation } from "react-i18next";

const MenuItems = ({ isMenuOpen }) => {
  const { t } = useTranslation();

  const menuItems = [
    {
      sectionId: "about-us",
      text: t("About.Title"),
      duration: 600,
    },
    { sectionId: "news", text: t("News.Title"), duration: 1000 },
    { sectionId: "cocktails", text: t("Cocktail.Title"), duration: 1300 },
    { sectionId: "wines", text: t("Bottle.Title"), duration: 1700 },
    { sectionId: "bar", text: t("Bar.Title"), duration: 2000 },
    { sectionId: "contact", text: t("Contact.Title"), duration: 2500 },
  ];

  return (
    <>
      {menuItems.map(({ sectionId, text, duration }) => (
        <MenuItem
          key={sectionId}
          sectionId={sectionId}
          text={text}
          isMenuOpen={isMenuOpen}
          duration={duration}
        />
      ))}
    </>
  );
};

export default MenuItems;
