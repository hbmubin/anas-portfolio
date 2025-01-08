import { BounceLoader } from "react-spinners";
import WorkCard from "./WorkCard";
import useGlobalWorks from "../../hooks/useGlobalWorks";



const MyWorks = () => {
  const {works, error, loading} = useGlobalWorks()
  return (
    <section className="lg:pt-80 sm:pt-44 pt-60  bg-bodyGray">
      <div className="defaultContainer">
        <h1 id="works" className="title lg:pt-20 mb-8">
          My Works
        </h1>
        <div className="grid items-center justify-center w-full">
        {works.length < 1 && error && <div className="my-10 text-xl">{error}</div>}
        {loading && <BounceLoader className="my-10" size={38} color="currentColor" />}
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
          {works?.map((work, idx) => (
            <WorkCard key={idx} img={work?.workImage} title={work?.workTitle} madeOn={work?.madeOn}></WorkCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
