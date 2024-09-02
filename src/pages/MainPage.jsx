import React from "react";
import { Link, Element } from "react-scroll";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Cocktails from "./Cocktails";
import News from "./News";
import Wines from "./Wines";
import Bar from "./Bar";

const MainPage = () => {
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-us"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="news"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="cocktails"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Cocktails
            </Link>
          </li>
          <li>
            <Link
              to="wines"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Wines
            </Link>
          </li>
          <li>
            <Link
              to="bar"
              smooth={true}
              duration={5000}
              className="cursor-pointer"
            >
              Bar
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={10000}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Content Sections */}
      <Element name="home" className="element">
        <Home />
      </Element>
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
      <Element name="contact" className="element">
        {/* Add contact content here */}
      </Element>
    </div>
  );
};

export default MainPage;
