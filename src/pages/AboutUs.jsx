import Background from "../components/Background";
import Heading from "../components/Heading";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section id="about-us">
      <Background
        src="public/images/marani.png"
        className="min-h-screen text-color-primary flex flex-col justify-center space-y-10 sm:space-y-20 pb-5"
      >
        <Heading className="text-color-primary" text={t(`AboutTitle`)} />
        <div className="about-text flex-col md:space-y-5 space-y-4 md:w-[65%] md:text-xl h-auto">
          <p>ჟუჟუნა ძალიან მშრალი და მომჟავო ღვინო 2017 წელს შეიქმნა.</p>
          <p>
            ბევრი ფიქრისა და ღვინის მრავალწლიანი სიყვარულის შემდეგ, კომპანია,
            ჩვენივე სახსრებით, 6-მა მეგობარმა დავაარსეთ. ჩვენი მთავარი მიზანი,
            დალევის კულტურის განსხვავებული გამოცდილების შექმნა და აქამდე
            არარსებული თანამდეროვე ღვინის თანამედროვე კულტურაში პოპულარიზაცია
            იყო.
          </p>
          <p>
            ჩამოსასხმელი ჟუჟუნა საქართველოს უამრავ კაფე-ბარს მალევე დაუმეგობრდა
            და 2020 წელს ბოთლის ფორმითაც შეავსო მაღაზიათა ქსელი, რაც ასეთ მოკლე
            დროში, ჩვენთვის, მნიშვნელოვანი სიახლეა.
          </p>
          <p>
            ჟუჟუს ისტორია საქართველოს ფარგლებსაც სცდება და ჩინეთსა და იაპონიაში
            ექსპორტით გააქვს თბილისური დალევის კულტურა.
          </p>
        </div>
        {/* </div> */}
      </Background>
    </section>
  );
};

export default AboutUs;
