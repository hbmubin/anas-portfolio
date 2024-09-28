import { Link } from "react-scroll";
import profile from "./../../assets/afdghghjk-Photoroom.png";
import Strengths from "./Strengths";

const Banner = () => {
  return (
    <div>
      <section id="home" className=" bg-bodyGray w-full font-pageFont">
        <div className="container mx-auto max-w-[1100px] flex items-end min-h-screen py-12">
          <div className="flex flex-col gap-24 w-1/2">
            <div>
              <h1 className="text-5xl font-light">Hello, I{"'"}am</h1>
              <h1 className="text-7xl font-nameFont font-bold mt-2 mb-3">
                Anas Munir
              </h1>
              <p className="mb-5">Email Marketer</p>
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
            <div className="flex gap-10">
              <div className="w-1/2">
                <h1 className="text-7xl text-[#8e7f6e] font-semibold tracking-wide">
                  100
                </h1>
                <h2 className="uppercase text-2xl tracking-wide text-textGray mt-2 mb-6">
                  Happy Clients
                </h2>
                <p className="text-textGray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="w-1/2">
                <h1 className="text-7xl text-[#8e7f6e] font-semibold tracking-wide">
                  12
                </h1>
                <h2 className="uppercase text-2xl tracking-wide text-textGray mt-2 mb-6">
                  Awards
                </h2>
                <p className="text-textGray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="max-w-full relative translate-y-[48px]"
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
