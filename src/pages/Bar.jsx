import Background from "../components/Background";
import Button from "../components/Button";
import Heading from "../components/Heading";

const Bar = () => {
  return (
    <section id="bar">
      <Background
        src="public/images/banner2.png"
        className="min-h-screen text-color-primary flex flex-col justify-center items-end md:items-center space-y-10 sm:space-y-20 pb-5"
      >
        <div className="flex flex-col md:space-y-5 space-y-4 w-auto md:w-[50%] md:text-xl h-auto md:gap-[10px] md:mb-5 lg:gap-[10px] xl:mb-20">
          <Heading
            className="text-backgroundColor-purpleEnd justify-start md:mb-5"
            text="მობილური ბარი"
          />
          <p className="text-3xl font-tommaso">
            გავჩნდებით ყველგან, სადაც ისურვებ
          </p>
          <p className="font-light sm:text-2xl">
            ჟუჟუნას ბარი მოგაგნებს ყველგან, სადაც იქნები. თან მოიყვანს ბარმენს,
            ქორფა ჟუჟუნას მაცივარს დააა შენი სტუმრების ჩაჟუჟუნებაზე უუამრავი
            კოქტეილით იზრუნებს.
          </p>
          <div className="ml-auto md:mx-auto">
            <Button
              text="გაიგე მეტი"
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
              <label
                htmlFor="phone"
                placeholder="მიუთითეთ ნომერი..."
                className=""
              >
                ტელეფონი
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="მიუთითეთ ნომერი..."
                className="input-field"
              />
            </div>
            <div className="input-spacing">
              <label htmlFor="email">ელ. ფოსტა</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="მიუთითეთ ელ-ფოსტა..."
                className="input-field"
              />
            </div>
            <div className="input-spacing">
              <label htmlFor="message">მესიჯი</label>
              <textarea
                name="message"
                id="message"
                placeholder="დაწერეთ მესიჯი..."
                className="input-field h-[100px] md:h-[120px]"
              ></textarea>
            </div>
            <div className="ml-auto">
              <Button
                text="გაგზავნა"
                variant="primary"
                className="py-2 md:py-3 px-10 md:mt-10"
              />
            </div>
          </form>
        </div>
        <div className="flex flex-col h-auto md:mb-5 gap-5 lg:gap-[10px] xl:mb-20 max-w-[50vw] sm:max-w-[45vw]">
          <p className="text-style">
            ქორფა ჟუჟუნა უუუამრავ კაფე-ბარში შეგხვდება და შენთვის საყვარელ
            კოქტეილებს ააცქრიალებს. ცივი და ჩქრიალა ჟუჟუ კოქტეილში პირდაპირ
            ონკანიდან ეშვება.
          </p>
          <p className="text-style">
            ჩამოსასხმელი ჟუჟუნა კაფე-ბარებს მრავალჯერადი გამოყენების კეგებში
            მიეწოდება და დამატებით შეფუთვას არ საჭიროებს, რის გამოც გარემოსთან
            განსაკუთრებით მეგობრობს და არც მის დაბინძურებას იწვევს.
          </p>
        </div>
      </Background>
    </section>
  );
};

export default Bar;
