import { Link } from "react-scroll";
import profile from "./../../assets/afdghghjk-Photoroom.png";
import Strengths from "./Strengths";

const Banner = () => {
  return (
    <div>
      <section
        id="home"
        className=" bg-bodyGray w-full font-pageFont pt-20 lg:pt-0 "
      >
        <div className="container mx-auto lg:max-w-[1100px] lg:flex items-end min-h-screen py-12">
          <div className="flex flex-col lg:gap-10 gap-20 lg:w-1/2">
            <div>
              <h1 className="lg:text-5xl text-4xl font-light">
                Hello, I{"'"}am
              </h1>
              <h1 className="lg:text-7xl text-5xl font-nameFont font-bold mt-2 mb-3">
                Anas Munir
              </h1>
              <p className="mb-5">E-mail Marketing Expert</p>
              <button className="py-3 px-9 hover:bg-[#60574c] tracking-wide bg-bodyBlack text-[#fff8ec]">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Get in Touch
                </Link>
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-end">
              <div className="md:w-1/2">
                <h1 className="text-5xl lg:text-7xl text-[#8e7f6e] font-semibold tracking-wide">
                  300+
                </h1>
                <h2 className="uppercase text-2xl tracking-wide text-textGray mt-2 mb-6">
                  Happy Clients
                </h2>
                <p className="text-textGray">
                  I’ve had the privilege of working with over 300 clients,
                  delivering tailored solutions that exceed expectations and
                  drive business growth.
                </p>
              </div>
              <div className="md:w-1/2">
                <h1 className="text-5xl lg:text-7xl text-[#8e7f6e] font-semibold tracking-wide">
                  500+
                </h1>
                <h2 className="uppercase text-2xl tracking-wide text-textGray mt-2 mb-6">
                  Projects
                </h2>
                <p className="text-textGray">
                  With a portfolio of more than 500 successful projects, I bring
                  extensive experience in providing innovative and effective
                  strategies across various platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <img
              className="  max-w-full  relative translate-y-[48px]"
              src={profile}
              alt="profile"
            />
          </div>
        </div>
      </section>
      <Strengths></Strengths>
    </div>
  );
};

export default Banner;
