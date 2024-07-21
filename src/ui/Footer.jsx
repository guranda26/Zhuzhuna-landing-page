import Logo from "./Logo";
import { LuInstagram, LuLinkedin, LuFacebook } from "react-icons/lu";
import SocialMediaLink from "../components/SocialMediaLink";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section
        id="footer"
        className="px-[50px] pt-5 flex items-center justify-between bg-backgroundColor-dark-backgroundCol"
      >
        <div className="flex space-x-10">
          <div>
            <Logo />
          </div>
          <div className="flex pb-5 justify-center items-center">
            <ul className="flex flex-col text-[12px] text-color-primary">
              <li className="cursor-pointer transition-transform transform hover:animate-bounce">
                ტელეფონი
              </li>
              <li className="link mb-2">+995579760006</li>
              <li className="cursor-pointer transition-transform transform hover:animate-bounce">
                ელ ფოსტა
              </li>
              <li className="link mb-2">Hello@jujuna.ge</li>
              <li className="cursor-pointer transition-transform transform hover:animate-bounce">
                მისამართი
              </li>
              <li className="link">ნინოშვილი #8 თბილისი,საქართველო</li>
            </ul>
          </div>
        </div>
        <div className="pt-10">
          <div className="flex justify-end space-x-4 p-4">
            <SocialMediaLink
              to="https://www.facebook.com/jujunagvino"
              Icon={LuInstagram}
            />
            <SocialMediaLink
              to="https://www.facebook.com/jujunagvino"
              Icon={LuFacebook}
            />
            <SocialMediaLink
              to="https://www.facebook.com/jujunagvino"
              Icon={LuLinkedin}
            />
          </div>
          <ul className="flex space-x-10 justify-end text-[12px]">
            <li>
              <Link to="#privacy-policy" className="text-color-tertiary">
                პერსონალური მონაცემების დაცვის პოლიტიკა
              </Link>
            </li>
            <li>
              <Link to="#security-center" className="text-color-tertiary">
                უსაფრთხოების ცენტრი
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
