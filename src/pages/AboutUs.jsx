import Background from "../components/Background";
import Heading from "../components/Heading";
import { useTranslation } from "react-i18next";
import Paragraphs from "../components/Paragraphs";

const AboutUs = ({ keys }) => {
  const { t } = useTranslation();
  return (
    <section id="about-us">
      <Background
        src="images/marani.png"
        className="min-h-screen text-color-primary flex flex-col justify-center space-y-10 sm:space-y-20 pb-5"
      >
        <Heading className="text-color-primary" text={t(`About.Title`)} />
        <div className="about-text flex-col md:space-y-5 space-y-4 md:w-[65%] md:text-xl h-auto">
          <Paragraphs
            keys={[
              "About.Paragraph1",
              "About.Paragraph2",
              "About.Paragraph3",
              "About.Paragraph4",
            ]}
          />
        </div>
      </Background>
    </section>
  );
};

export default AboutUs;
