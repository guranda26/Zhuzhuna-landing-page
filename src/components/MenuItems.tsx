import React from "react";
import MenuItem from "./MenuItem";

const MenuItems = ({ isMenuOpen }) => {
  return (
    <>
      <MenuItem
        sectionId="about-us"
        text="ჩვენ შესახებ"
        isMenuOpen={isMenuOpen}
      />
      <MenuItem sectionId="news" text="სიახლეები" isMenuOpen={isMenuOpen} />
      <MenuItem sectionId="wines" text="ბოთლი" isMenuOpen={isMenuOpen} />
      <MenuItem
        sectionId="cocktails"
        text="კოქტეილები"
        isMenuOpen={isMenuOpen}
      />
      <MenuItem sectionId="bar" text="მობილური ბარი" isMenuOpen={isMenuOpen} />
      <MenuItem sectionId="footer" text="კონტაქტი" isMenuOpen={isMenuOpen} />
    </>
  );
};

export default MenuItems;
