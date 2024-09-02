import React from "react";
import { Element } from "react-scroll";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Cocktails from "./Cocktails";
import News from "./News";
import Wines from "./Wines";
import Bar from "./Bar";

const MainPage = () => {
  return (
    <div>
      <Home />
      <Element name="about-us" className="element">
        <AboutUs />
      </Element>
      <Element name="news" className="element">
        <News />
      </Element>
      <Element name="cocktails" className="element">
        <Cocktails />
      </Element>
      <Element name="wines" className="element">
        <Wines />
      </Element>
      <Element name="bar" className="element">
        <Bar />
      </Element>
      <Element name="contact" className="element"></Element>
    </div>
  );
};

export default MainPage;
