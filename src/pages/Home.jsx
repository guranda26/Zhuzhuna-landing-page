import Background from "../components/Background";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Background src="../../images/banner.png" className="relative h-screen">
        <div className="text-color-primary w-full flex flex-col text-xl space-y-5 md:space-y-10 transform translate-y-1/2 lg:px-10">
          <h1 className="text-5xl font-tommaso">{t("Home.Title")}</h1>
          <p className="text-3xl font-tommaso md:text-4xl text-color-secondary lg:w-[40%]">
            {t("Home.Paragraph")}
          </p>
          <p className="hidden md:hidden">
            მას ადრეულ რთველზე მიღებული რქაწითელითა და მწვანეთი ვამზადებთ,
            ამიტომაც სახასიათო სიმჟავე აქვს. მეორადი დუღილისგან კი ბუნებრივ
            მსუბუქ გაზს იძენს.
          </p>
        </div>
      </Background>
    </section>
  );
};

export default Home;
