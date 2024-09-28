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
  return (
    <header className="fixed w-full z-50 bg-white">
      <div className="defaultContainer  py-4 flex justify-between items-center">
        <div>
          <a href="#" className="font-logoFont text-3xl text-neutral-400 ">
            Anas Munir
          </a>
        </div>
        <div className="flex gap-8 items-center">
          <nav className="font-pageFont">
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
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <button className="py-2 px-5 bg-bodyBlack hover:bg-[#60574c] text-[#fff8ec]">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
