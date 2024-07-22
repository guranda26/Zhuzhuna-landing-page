import Background from "../components/Background";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { useTranslation } from "react-i18next";

const Bar = () => {
  const { t } = useTranslation();
  return (
    <section id="bar">
      <Background
        src="public/images/banner2.png"
        className="min-h-screen text-color-primary flex flex-col justify-center items-end md:items-center space-y-10 sm:space-y-20 pb-5"
      >
        <div className="flex flex-col md:space-y-5 space-y-4 w-auto md:w-[50%] md:text-xl h-auto md:gap-[10px] md:mb-5 lg:gap-[10px] xl:mb-20">
          <Heading
            className="text-backgroundColor-purpleEnd justify-start md:mb-5"
            text={t("Bar.Title")}
          />
          <p className="text-3xl font-tommaso">{t("Bar.Subtitle")}</p>
          <p className="font-light sm:text-2xl">{t("Bar.Paragraph")}</p>
          <div className="ml-auto md:mx-auto">
            <Button
              text={t("Buttons.Learn More")}
              variant="primary"
              className="px-12 py-3 md:mt-10"
            />
          </div>
        </div>
      </Background>

      <Background
        src="public/images/banner1.png"
        className="min-h-screen text-color-primary flex gap-5 pb-5 max-sm:px-[15px] justify-evenly lg:items-center items-start pt-[40px]"
      >
        <div>
          <form className="ml-auto md:mx-auto flex flex-col gap-5">
            <div className="input-spacing">
              <label htmlFor="phone" className="">
                {t("Contact.Tel")}
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder={t("Contact.telPlaceholder")}
                className="input-field"
              />
            </div>
            <div className="input-spacing">
              <label htmlFor="email">{t("Contact.Email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("Contact.emailPlaceholder")}
                className="input-field"
              />
            </div>
            <div className="input-spacing">
              <label htmlFor="message">{t("Contact.Message")}</label>
              <textarea
                name="message"
                id="message"
                placeholder={t("Contact.messagePlaceholder")}
                className="input-field h-[100px] md:h-[120px]"
              ></textarea>
            </div>
            <div className="ml-auto">
              <Button
                text={t("Buttons.Send")}
                variant="primary"
                className="py-2 md:py-3 px-10 md:mt-10"
              />
            </div>
          </form>
        </div>
        <div className="flex flex-col h-auto md:mb-5 gap-5 lg:gap-[10px] xl:mb-20 max-w-[50vw] sm:max-w-[45vw]">
          <p className="text-style">{t("Contact.Paragraph1")}</p>
          <p className="text-style">{t("Contact.Paragraph2")}</p>
        </div>
      </Background>
    </section>
  );
};

export default Bar;
