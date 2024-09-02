import React from "react";
import MenuItem from "./MenuItem";
import { useTranslation } from "react-i18next";

const MenuItems = ({ isMenuOpen }) => {
  const { t } = useTranslation();

  // Define an array of menu items for easier management and mapping
  const menuItems = [
    { sectionId: "about-us", title: t("About.Title") },
    { sectionId: "news", title: t("News.Title") },
    { sectionId: "wines", title: t("Bottle.Title") },
    { sectionId: "cocktails", title: t("Cocktail.Title") },
    { sectionId: "bar", title: t("Bar.Title") },
    { sectionId: "footer", title: t("Contact.Title") },
  ];

  return (
    <>
      {menuItems.map((item) => (
        <MenuItem
          key={item.sectionId}
          sectionId={item.sectionId}
          text={item.title}
          isMenuOpen={isMenuOpen}
        />
      ))}
    </>
  );
};

export default MenuItems;
