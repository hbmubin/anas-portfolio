import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";

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

  return (
    <header className="fixed w-full z-50 bg-white px-4 lg:px-0">
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
          <nav className="font-pageFont hidden lg:block">
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
          <div>
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
          </div>
          <span
            className="cursor-pointer block md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FiMenu size={34}></FiMenu>
          </span>
          {showMenu && (
            <div
              className={`w-[80%] h-screen overflow-scroll fixed top-0 md:hidden left-0 bg-bodyBlack p-4 scrollbar-hide`}
            >
              <div className="flex justify-end">
                <span
                  onClick={() => setShowMenu(false)}
                  className="p-4 cursor-pointer"
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
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
