import PourWine from "../../public/images/pour.png";
import Grape from "../../public/images/grape.png";
import GlassWine from "../../public/images/glasswine.png";

import Card from "../components/Card";
import Sections from "../components/Sections";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Sections id="news" title={t("News.Title")} className="px-3 relative">
        <ThemeToggleButton />
        <article>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              src={PourWine}
              date={t(`Cards.Dates.0`)}
              title={t(`Cards.Title.0`)}
              description={t(`Cards.Description.0`)}
              buttonVariant="secondary"
            />
            <Card
              src={Grape}
              date={t(`Cards.Dates.1`)}
              title={t(`Cards.Title.1`)}
              description={t(`Cards.Description.1`)}
              className="bg-black"
              buttonVariant="primary"
            />
            <Card
              src={GlassWine}
              date={t(`Cards.Dates.2`)}
              title={t(`Cards.Title.2`)}
              description={t(`Cards.Description.2`)}
            />
          </div>
        </article>
      </Sections>
    </div>
  );
};

export default News;
