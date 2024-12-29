import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [isExpend, setIsExpend] = useState(false);

    const handleAside = () => {
      setIsExpend(!isExpend);
    };
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setIsExpend(true);
          } else {
            setIsExpend(false);
          }
        };
    
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <div className="flex">
           <Aside isExpend={isExpend} handleAside={handleAside}></Aside>
           <div onClick={handleAside} className="rotate-180 fixed z-10 border bg-opacity-70 shadow-xl border-neutral-400 text-neutral-800 bg-bodyGray top-4 left-1 p-2"><IoIosArrowBack size={26} /></div>
           <Outlet></Outlet>
           <div onClick={handleAside} className={`${!isExpend && 'md:bg-white md:hidden bg-black fixed w-screen h-screen bg-opacity-40'}`}></div>
        </div>
    );
};

export default Dashboard;