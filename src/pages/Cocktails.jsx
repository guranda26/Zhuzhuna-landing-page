import CocktailInfo from "../components/CocktailInfo";
import CocktailItem from "../components/CocktailItem";
import Sections from "../components/Sections";
import { useTranslation } from "react-i18next";

const Cocktails = () => {
  const { t } = useTranslation();

  const cocktailInfoData = [
    {
      title: t("Cocktails.AperolSpritz"),
      tableData: {
        headers: [t("CocktailInfo.Aperol")],
        rows: [
          [t("CocktailInfo.AperolVol.0")],
          [t("CocktailInfo.Orange")],
          [t("CocktailInfo.Slice")],
          [t("CocktailInfo.Tonic")],
          [t("CocktailInfo.AperolVol.1")],
          [t("CocktailInfo.Ice")],
          [t("CocktailInfo.FullGlass")],
          [t("CocktailInfo.Zhuzhuna")],
          [t("CocktailInfo.AperolVol.2")],
        ],
      },
    },
    {
      title: t("Cocktails.BerryZhuzhuna"),
      tableData: {
        headers: [t("CocktailInfo.Ice")],
        rows: [
          [t("CocktailInfo.HalfGlass")],
          [t("CocktailInfo.Berries")],
          [t("CocktailInfo.ZhuzhuVol.0")],
          [t("CocktailInfo.Zhuzhuna")],
          [t("CocktailInfo.ZhuzhuVol.1")],
          [t("CocktailInfo.GrenadineSyrup")],
          [t("CocktailInfo.ZhuzhuVol.2")],
        ],
      },
    },
    {
      title: t("Cocktails.Mimosa"),
      tableData: {
        headers: [t("CocktailInfo.Ice")],
        rows: [
          [t("CocktailInfo.HalfGlass")],
          [t("CocktailInfo.OrangeJuice")],
          [t("CocktailInfo.MimosaVol.0")],
          [t("CocktailInfo.Zhuzhuna")],
          [t("CocktailInfo.MimosaVol.1")],
        ],
      },
    },
  ];

  return (
    <Sections id="cocktails" title={t("Cocktails.Title")}>
      <div className="relative bg-backgroundColor-dark-backgroundCol flex md:gap-[180px] items-center max-w-[100%]">
        <img
          className="sm:bg-cover bg-top min-h-screen max-xs:min-h-[300px]"
          src="../../images/cocktail1.png"
          alt="cocktail-image"
        />
        <CocktailInfo
          title={cocktailInfoData[0].title}
          tableData={cocktailInfoData[0].tableData}
          className="md:gap-7 border-spacing-2 sm:border-spacing-4 items-center"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-5 md:mt-5">
        <CocktailItem src="../../images/cocktail2.png">
          <CocktailInfo
            title={cocktailInfoData[1].title}
            tableData={cocktailInfoData[1].tableData}
            className="border-spacing-3"
          />
        </CocktailItem>
        <CocktailItem src="../../images/cocktail3.png">
          <CocktailInfo
            title={cocktailInfoData[2].title}
            tableData={cocktailInfoData[2].tableData}
            className="border-spacing-3"
          />
        </CocktailItem>
      </div>
    </Sections>
  );
};

export default Cocktails;
