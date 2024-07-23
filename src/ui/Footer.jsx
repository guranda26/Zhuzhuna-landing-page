import Logo from "./Logo";
import { LuInstagram, LuLinkedin, LuFacebook } from "react-icons/lu";
import SocialMediaLink from "../components/SocialMediaLink";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <section
        id="footer"
        className="px-5 py-10 md:px-20 grid grid-cols-1 md:grid-cols-3 items-end bg-backgroundColor-dark-backgroundCol"
      >
        <div className="flex justify-start space-x-10 mb-5 md:mb-0 md:col-span-2">
          <div>
            <Logo />
          </div>
          <div className="flex pb-5 justify-center items-center">
            <ul className="flex flex-col text-[12px] text-color-primary">
              <li className="cursor-pointer transition-transform transform hover:animate-bounce">
                {t("Contact.Tel")}
              </li>
              <li className="link mb-2">
                <a href="tel:+995579760006">+995579760006</a>
              </li>
              <li className="cursor-pointer transition-transform transform hover:animate-bounce">
                {t("Contact.Email")}
              </li>
              <li className="link mb-2">
                <a href="mailto:guralemo@gmail.com">Hello@jujuna.ge</a>
              </li>
              <li className="cursor-pointer transition-transform transform hover:animate-bounce">
                {t("Contact.Address")}
              </li>
              <li className="link"> {t("Contact.AddressVal")}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:items-end">
          <div className="flex justify-end space-x-4 p-4">
            <SocialMediaLink
              to="https://www.instagram.com/jujuna.tbilisi/?hl=en"
              Icon={LuInstagram}
            />
            <SocialMediaLink
              to="https://www.facebook.com/jujunagvino"
              Icon={LuFacebook}
            />
            <SocialMediaLink
              to="https://www.linkedin.com/company/jujuna-wine/"
              Icon={LuLinkedin}
            />
          </div>
          <ul className="flex md:flex-row space-x-2 md:space-x-10 justify-end text-[10px] w-full md:w-auto gap-2">
            <li className="mb-2 md:mb-0">
              <Link to="#privacy-policy" className="text-color-tertiary">
                {t("Contact.PersonalData")}
              </Link>
            </li>
            <li>
              <Link to="#security-center" className="text-color-tertiary">
                {t("Contact.Security")}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
