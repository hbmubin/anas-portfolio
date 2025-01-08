import { Link } from "react-scroll";
import profile from "./../../assets/afdghghjk-Photoroom.png";
import Strengths from "./Strengths";

const Banner = ({totalClients,totalProjects}) => {
  return (
    <div>
      <section id="home" className=" bg-bodyGray w-full font-pageFont  ">
        <div className="container px-3 mx-auto lg:max-w-[1100px] sm:grid grid-cols-2 flex-wrap flex grid-rows-2  bannerHeight py-12">
          <div className="col-span-1 row-span-1 sm:w-auto w-2/5 flex items-end">
            <div className="text-nowrap">
              <h1 className="md:text-5xl text-2xl font-light">
                Hello, I{"'"}am
              </h1>
              <h1 className="md:text-7xl text-4xl font-nameFont font-bold mt-2 mb-3">
                Anas Munir
              </h1>
              <p className="mb-5 sm:text-base text-sm">Email Marketing Expert</p>
              <button>
                <Link
                  className="sm:py-3 py-2 sm:px-9 px-6 hover:bg-[#60574c] tracking-wide bg-bodyBlack text-[#fff8ec] inline-flex"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Get in Touch
                </Link>
              </button>
            </div>
          </div>
          <div className="col-span-1 lg:row-span-2 row-span-1 sm:w-auto w-3/5 flex items-end">
            <img
              className="  max-w-full  relative lg:translate-y-[48px]"
              src={profile}
              alt="profile"
            />
          </div>
          <div className="lg:col-span-1 col-span-2 lg:row-span-1 row-span-2 sm:w-auto md:pt-0 pt-10 flex sm:flex-row flex-col sm:gap-10 gap-5 sm:items-end">
              <div className="md:w-1/2">
                <h1 className="text-3xl sm:text-7xl text-[#8e7f6e] font-semibold tracking-wide">
                  {totalClients}+
                </h1>
                <h2 className="uppercase sm:text-2xl text-xl tracking-wide text-textGray mt-2 mb-6">
                  Happy Clients
                </h2>
                <p className="text-textGray sm:text-base text-sm">
                  I’ve had the privilege of working with over 300 clients,
                  delivering tailored solutions that exceed expectations and
                  drive business growth.
                </p>
              </div>
              <div className="md:w-1/2">
                <h1 className="text-3xl sm:text-7xl text-[#8e7f6e] font-semibold tracking-wide">
                  {totalProjects}+
                </h1>
                <h2 className="uppercase sm:text-2xl text-xl tracking-wide text-textGray mt-2 mb-6">
                  Projects
                </h2>
                <p className="text-textGray sm:text-base text-sm">
                  With a portfolio of more than 500 successful projects, I bring
                  extensive experience in providing innovative and effective
                  strategies across various platforms.
                </p>
              </div>
            </div>
        </div>
      </section>
      <Strengths></Strengths>
    </div>
  );
};

export default Banner;
