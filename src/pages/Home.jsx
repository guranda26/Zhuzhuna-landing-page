import Background from "../components/Background";

const Home = () => {
  return (
    <section>
      <Background
        src="../../public/images/banner.png"
        className="relative h-screen"
      >
        <div className="text-color-primary w-full md:w-1/2 flex flex-col text-xl space-y-5 md:absolute top-1/2 transform translate-y-1/2">
          <h1 className="md:hidden text-5xl font-tommaso">ჟუჟუნა</h1>
          <p className="md:hidden text-3xl font-tommaso text-color-secondary">
            ღვინო არც ისე წყნარი და არც ბოლომდე ცქრიალაა
          </p>
          <p className="hidden md:block">
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
