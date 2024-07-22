import Price from "../components/Price";
import Sections from "../components/Sections";
import WineDetails from "../components/WineDetails";
import { useTheme } from "../context/ThemeContext";

const Wines = () => {
  const { isDarkMode } = useTheme();
  return (
    <Sections id="wines" title="ბოთლი">
      <div className="relative flex center md:justify-between h-auto border-2 border-buttonColor-primary">
        <div className="max-w-[50%] lg:w-auto px-3 py-5 md:p-0 z-20">
          <img src="../../public/images/bottle1.png" alt="bottle" />
          <p className={`md:hidden ${isDarkMode && "text-color-primary"}`}>
            ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
            მისართმევად საუკეთესო ტემპერატურასა და გაზს.
          </p>
        </div>
        <article className="md:w-[65%] sm:w-[60%] flex flex-col px-2 lg:px-5">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-10">
            <svg
              viewBox="0 0 800 150"
              preserveAspectRatio="none"
              className="absolute top-0 right-0 w-full h-full"
            >
              <path
                d="M0,50 C150,150 300,40 450, 100 C600,150 750,50 900,100 C1050,150 1200,50 1200,50 L1200,150 L0,150 Z"
                className="fill-backgroundColor-purpleStart "
              />
            </svg>
          </div>
          <div className="py-3 md:py-7 flex flex-col gap-10 items-center md:items-start">
            <h3
              className={`font-tommaso text-4xl ${
                isDarkMode && "text-color-primary"
              }`}
            >
              ჟუჟუნა ბოთლი
            </h3>
            <div className="flex md:flex-row flex-col gap-6 justify-items-start">
              <WineDetails description="მოცულობა" info="250 მლ" />
              <WineDetails description="ალკოჰოლი" info="11 %" />
              <WineDetails description="ბუნებრივი გაზი" info="2.5 ბარი" />
            </div>
            <p
              className={`md:block hidden md:text-xl lg:text-2xl z-20 ${
                isDarkMode && "text-color-primary"
              }`}
            >
              ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
              მისართმევად საუკეთესო ტემპერატურასა და გაზს.
            </p>
          </div>
          <div className="md:absolute right-20 md:right-10 md:bottom-[-50] lg:bottom-5 px-5 ml-auto z-20">
            <Price />
          </div>
        </article>
      </div>
    </Sections>
  );
};

export default Wines;
