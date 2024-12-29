import WorkCard from "./WorkCard";
import card1 from "./../../assets/IMG-20240929-WA0021.jpg";
import card2 from "./../../assets/IMG-20240929-WA0024.jpg";
import card3 from "./../../assets/IMG-20240929-WA0025.jpg";
import card4 from "./../../assets/IMG-20240929-WA0028.jpg";
import card5 from "./../../assets/IMG-20240929-WA0016.jpg";
import card6 from "./../../assets/IMG-20240929-WA0018.jpg";
import card7 from "./../../assets/IMG-20240929-WA0023.jpg";
import card8 from "./../../assets/IMG-20240929-WA0035.jpg";

const MyWorks = () => {
  return (
    <section className="lg:pt-80 sm:pt-44 pt-60  bg-bodyGray">
      <div className="defaultContainer">
        <h1 id="works" className="title lg:pt-20 mb-8">
          My Works
        </h1>
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
          <WorkCard img={card1} title="Text Message Marketing"></WorkCard>
          <WorkCard img={card2} title="Email Automations"></WorkCard>
          <WorkCard img={card3} title="Email Marketing"></WorkCard>
          <WorkCard img={card4} title="Email & SMS Marketing"></WorkCard>
          <WorkCard img={card5} title="Email & SMS Marketing"></WorkCard>
          <WorkCard img={card6} title="Email Automations"></WorkCard>
          <WorkCard img={card7} title="Text Message Marketing"></WorkCard>
          <WorkCard img={card8} title="Email Automationsss"></WorkCard>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
