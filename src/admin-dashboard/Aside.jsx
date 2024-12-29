import { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../private/AuthProvider";

const asideLinks= [
    {
      _id: 1001,
      title: "Profile",
      link: "/admin-dashboard/profile",
    },
    {
      _id: 1002,
      title: "Works",
      link: "/admin-dashboard/Works",
    },
    {
      _id: 1003,
      title: "Reviews",
      link: "/admin-dashboard/reviews",
    },
  ]



const Aside = ({ isExpend, handleAside }) => {

    const {logOut}=useContext(AuthContext)

    return (
        <div className={`${isExpend ? 'md:w-[60px] w-0 overflow-hidden' : 'md:w-[20%] w-44'} z-20 duration-200 bg-bodyGray h-screen overflow-auto md:sticky fixed top-0 flex flex-col`}>
            <div className="py-4 px-3 flex items-center justify-between">
                <h2 className={`${isExpend && 'hidden'} text-nowrap font-logoFont text-2xl`}>Anas Munir</h2>
                <div className={`${isExpend && 'rotate-180'}`}>
                    <button onClick={handleAside} type="button" className="border-2 border-black duration-200 transition-transform active:border-neutral-600 active:text-neutral-600"><IoIosArrowBack size={26} />
                    </button>
                </div>
            </div>
            <nav className={`flex-grow`}>
                <div className={`${isExpend && 'hidden'} grid aside-ul p-3`}>
                    {asideLinks.map(({link,title,_id})=>(
                        <NavLink key={_id} to={link}>{title}</NavLink>
                    ))}
                </div>
            </nav>
            <div className={`grid ${isExpend && 'hidden'} grid-cols-2 m-3 gap-2`}>
                    <Link className="border-2 text-nowrap border-black py-1 text-center font-medium active:scale-[.98] cursor-pointer" to='/' >Home</Link>
                    <div onClick={logOut} className="border-2 text-nowrap border-amber-500 bg-amber-500 py-1 text-center font-medium active:scale-[.98] cursor-pointer">Logout</div>
                </div>
        </div>
    );
};

export default Aside;