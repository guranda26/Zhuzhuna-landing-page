import Home from "./Home";
import AboutUs from "./AboutUs";
import Cocktails from "./Cocktails";
import News from "./News";
import Wines from "./Wines";
import { Link, Element } from "react-scroll";

const MainPage = () => {
  return (
    <div>
      <Home />
      <nav>
        <Link to="about-us" smooth={true} duration={500}></Link>
        <Link to="news" smooth={true} duration={500}></Link>
        <Link to="cocktail" smooth={true} duration={500}></Link>
        <Link to="wines" smooth={true} duration={500}></Link>
        <Link to="contact" smooth={true} duration={500}></Link>
      </nav>

      <Element name="about-us">
        <AboutUs />
      </Element>
      <Element name="news">
        <News />
      </Element>
      <Element name="wines">
        <Wines />
      </Element>
      <Element name="cocktails">
        <Cocktails />
      </Element>
    </div>
  );
};

export default MainPage;
