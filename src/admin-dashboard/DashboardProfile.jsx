import { useContext } from "react";
import { AuthContext } from "../private/AuthProvider";
import { BounceLoader } from "react-spinners";

const DashboardProfile = () => {
    const {user, loading}= useContext(AuthContext)
    if(loading){
        <div className=" min-h-screen w-screen flex justify-center items-start mt-20">
        <BounceLoader size={38} color="currentColor" />
      </div>
    }
    return (
        <div className="flex-grow sm:h-screen grid items-center justify-center text-center">
            <div className="py-10 sm:px-20 px-10 bg-bodyGray shadow-md rounded-md">
                <div className="flex justify-center">
                    <img className="sm:w-56 w-40 border-2 rounded bg-white" src={user?.img} alt={user?.name} />
                </div>
            <div className="sm:text-4xl text-lg mt-4 font-medium text-neutral-800 px-2">{user?.name}</div>
            <div className="text-lg px-2 mt-1">Role: {user?.role}</div>
            <div className="text-lg px-2 mt-1">Email: {user?.email}</div>
            </div>
        </div>
    );
};

export default DashboardProfile;