import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const navLinksdata = [
    {
      _id: 1001,
      title: "Home",
      link: "home",
    },
    {
      _id: 1002,
      title: "About me",
      link: "about",
    },
    {
      _id: 1003,
      title: "Education",
      link: "education",
    },
    {
      _id: 1004,
      title: "My works",
      link: "works",
    },
  ];
  const [showMenu, setShowMenu] = useState(false);

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky w-full z-50 top-0 bg-white "
    >
      {showMenu && (
        <div className="h-[140vh] w-screen fixed left-0 top-0 bg-[#00000040] duration-300 -z-40 block md:hidden "></div>
      )}
      <div className="defaultContainer  py-4 flex justify-between items-center">
        <div>
          <a
            href="#"
            className="font-logoFont lg:text-3xl text-2xl text-neutral-400 "
          >
            Anas Munir
          </a>
        </div>
        <div className="flex lg:gap-8 gap-4 items-center">
          <nav className="font-pageFont hidden md:block">
            <ul className="flex gap-6 ">
              {navLinksdata.map((item) => (
                <li
                  className="text-textGray text-lg font-normal cursor-pointer "
                  key={item._id}
                >
                  <Link
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <div>
            <button>
              <Link
                className=" lg:px-5 py-2 px-4 bg-bodyBlack hover:bg-[#60574c] text-[#fff8ec] text-sm lg:text-base inline-flex"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Get in Touch
              </Link>
            </button>
          </div> */}
          <span
            className="cursor-pointer block md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FiMenu size={34}></FiMenu>
          </span>

          <div
            className={`w-[50%] ${
              showMenu ? "translate-x-0" : "-translate-x-96"
            } min-h-[140vh] fixed top-0  left-0 bg-bodyBlack p-4 scrollbar-hide duration-300 block md:hidden`}
          >
            <div className="flex justify-between items-center pt-1 pb-5">
              <h2 className="font-logoFont sm:text-2xl text-xl text-textGray">
                Anas Munir
              </h2>
              <span
                onClick={() => setShowMenu(false)}
                className=" cursor-pointer"
              >
                <CgClose color="#fff" size={28}></CgClose>
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
