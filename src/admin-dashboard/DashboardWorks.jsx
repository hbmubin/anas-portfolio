import { BounceLoader } from "react-spinners";
import useGlobalWorks from "../hooks/useGlobalWorks";
import DashboardWorkCard from "./DashboardWorkCard";
import { Link } from "react-router-dom";

const DashboardWorks = () => {
    const {works, error, loading,} = useGlobalWorks()
    return (
      <div>
        <div className="mb-8 flex justify-between items-center">
          <h1 id="works" className="title">
            My Works
          </h1>
          <Link to='/admin-dashboard/works/add-work' className="bg-[#ac9e8f] text-white sm:px-10 px-5 sm:py-3 py-2 sm:text-lg text-sm border-2 border-textGray">Add New Work</Link>
        </div>
        <div className="grid items-center justify-center">
          {works.length < 1 && error && <div className="my-10 text-xl">{error}</div>}
          {loading && <BounceLoader className="my-10" size={38} color="currentColor" />}
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 ">
          {works?.map((work) => (
            <DashboardWorkCard key={work?._id} img={work?.workImage} id={work._id} title={work?.workTitle} madeOn={work?.madeOn}></DashboardWorkCard>
          ))}
        </div>
      </div>
    );
};

export default DashboardWorks;