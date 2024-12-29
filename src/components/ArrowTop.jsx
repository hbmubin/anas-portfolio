import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ArrowTop = () => {
    const [isVisible, setIsVisible]=useState(false)

    useEffect(()=>{
        const handleVisible=()=>{
            if(window.scrollY>400){
                setIsVisible(true)
            }
            else{
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll',handleVisible)
    },[])

    const scrollTop=()=>{
        window.scrollTo({top:'0',behavior:'smooth'})
    }

    return (
        <button onClick={scrollTop} type="button" className={`fixed sm:bottom-10 sm:right-20 bottom-3 right-3 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-32 opacity-0 pointer-events-none'}`}>
            <div className="bg-black size-14 grid items-center justify-center rounded bg-opacity-10 text-neutral-600"><FaArrowUp color="currentColor" />
            </div>
        </button>
    );
};

export default ArrowTop;