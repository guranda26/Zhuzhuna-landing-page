import Price from "../components/Price";
import Sections from "../components/Sections";
import WineDetails from "../components/WineDetails";

const Wines = () => {
  return (
    <Sections id="wines" title="ბოთლი">
      <div className="relative flex center md:justify-between h-auto border-2 border-buttonColor-primary">
        <div className="max-w-[50%] lg:w-auto px-3 py-5 md:p-0">
          <img
            src="../../public/images/bottle1.png"
            alt="bottle"
            className=""
          />
          <p className="md:hidden">
            ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
            მისართმევად საუკეთესო ტემპერატურასა და გაზს.
          </p>
        </div>
        <article className="relative md:w-[65%] sm:w-[60%] flex flex-col px-2 lg:px-5">
          <div className="py-3 md:py-7 flex flex-col gap-10 items-center md:items-start">
            <h3 className="font-tommaso text-4xl">ჟუჟუნა ბოთლი</h3>
            <div className="flex md:flex-row flex-col gap-6 justify-items-start">
              <WineDetails description="მოცულობა" info="250 მლ"></WineDetails>
              <WineDetails description="ალკოჰოლი" info="11 %"></WineDetails>
              <WineDetails
                description="ბუნებრივი გაზი"
                info="2.5 ბარი"
              ></WineDetails>
            </div>
            <p className="md:block hidden md:text-xl lg:text-2xl">
              ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
              მისართმევად საუკეთესო ტემპერატურასა და გაზს.
            </p>
          </div>
          <div className="md:absolute right-20 md:right-10 md:bottom-[-50] lg:bottom-5 px-5 ml-auto">
            <Price></Price>
          </div>
        </article>
      </div>
    </Sections>
  );
};

export default Wines;
