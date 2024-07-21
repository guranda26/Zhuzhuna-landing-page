import Details from "./Details";

const Price = () => {
  return (
    <Details className="h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[100px] lg:w-[100px] flex items-center justify-center bg-backgroundColor-backgroundCol md:bg-backgroundColor-purpleMid border-[1px] border-buttonColor-primary rounded">
      <p className="text-xs md:text-color-primary text-color-black md:text-xl">
        4.5₾
      </p>
    </Details>
  );
};

export default Price;
