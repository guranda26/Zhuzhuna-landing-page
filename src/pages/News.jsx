import PourWine from "../../public/images/pour.png";
import Grape from "../../public/images/grape.png";
import GlassWine from "../../public/images/glasswine.png";

import Card from "../components/Card";
import Sections from "../components/Sections";

const News = () => {
  return (
    <Sections id="news" title="სიახლეები" className="px-3">
      <article>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            src={PourWine}
            date="17 აგვისტო, 2024"
            title="დეგუსტაცია"
            description="დააგემოვნეთ ჩვენი ღვინო ყოველწლიურად გამართულ დეგუსტაციაზე და
              იგრძენით ნამდვილი გემო"
            buttonVariant="secondary"
          />
          <Card
            src={Grape}
            date="25 სექტემბერი, 2024"
            title="რთველი"
            description="ეწვიეთ ჩვენს რთველს და შეიტყვეთ მეტი ჟუჟუნას წარმოების პროცესზე და მის წარმომავლობაზე"
            className="bg-black"
            buttonVariant="primary"
          />
          <Card
            src={GlassWine}
            date="25 სექტემბერი, 2024"
            title="რთველი"
            description="ეწვიეთ ჩვენს რთველს და შეიტყვეთ მეტი ჟუჟუნას წარმოების პროცესზე და მის წარმომავლობაზე"
          />
        </div>
      </article>
    </Sections>
  );
};

export default News;
