import CocktailInfo from "../components/CocktailInfo";
import CocktailItem from "../components/CocktailItem";
import Sections from "../components/Sections";

const cocktailInfoData = [
  {
    title: "აპეროლ შპრიტსი",
    tableData: {
      headers: ["აპეროლი", "ფორთოხალი"],
      rows: [
        ["50 მლ", "1 ნაჭერი"],
        ["ყინული", "ტონიკი"],
        ["სავსე ჭიქა", "20 მგ"],
        ["ჟუჟუნა"],
        ["150მლ"],
      ],
    },
  },
  {
    title: "კენკრიანი ჟუჟუნა",
    tableData: {
      headers: ["ყინული"],
      rows: [
        ["ნახევარი ჭიქა"],
        ["კენკრა"],
        ["70გრ"],
        ["ჟუჟუნა"],
        ["150მლ"],
        ["გრენადინის სიროფი"],
        ["10 მლ"],
      ],
    },
  },
  {
    title: "მიმოზა",
    tableData: {
      headers: ["ყინული"],
      rows: [
        ["ნახევარი ჭიქა"],
        ["ფორთოხლის ფრეში"],
        ["50 მლ"],
        ["ჟუჟუნა"],
        ["130 მლ"],
      ],
    },
  },
];
const Cocktails = () => {
  return (
    <Sections id="cocktails" title="კოქტეილი">
      <div className="relative bg-backgroundColor-dark-backgroundCol flex md:gap-[180px] items-center max-w-[100%]">
        <img
          className="sm:bg-cover bg-top md:min-h-0 min-h-screen"
          src="../../public/images/cocktail1.png"
          alt="cocktail-image"
        />
        <CocktailInfo
          title={cocktailInfoData[0].title}
          tableData={cocktailInfoData[0].tableData}
          className="md:gap-7 border-spacing-2 sm:border-spacing-4 items-center"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-5 md:mt-5">
        <CocktailItem src="../../public/images/cocktail2.png">
          <CocktailInfo
            title={cocktailInfoData[1].title}
            tableData={cocktailInfoData[1].tableData}
            className="border-spacing-3"
          />
        </CocktailItem>
        <CocktailItem src="../../public/images/cocktail3.png">
          <CocktailInfo
            title={cocktailInfoData[2].title}
            tableData={cocktailInfoData[2].tableData}
            className="border-spacing-3"
          />
        </CocktailItem>
        {/* <div className="bg-backgroundColor-dark-backgroundCol flex">
          <img src="./../public/images/cocktail3.png" alt="cocktail-image" />
        </div> */}
      </div>
    </Sections>
  );
};

export default Cocktails;
