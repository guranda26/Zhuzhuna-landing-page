import { Button } from "react-scroll";
import Background from "../components/Background";
import Heading from "../components/Heading";

const Bar = () => {
  return (
    <section id="bar">
      <Background
        src="/images/banner2.png"
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
    </section>
  );
};

export default Bar;
