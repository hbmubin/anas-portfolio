import { Link, useNavigate } from "react-router-dom";

const Error = () => {
    const navigate= useNavigate()
    
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="text-center">
                <div className="sm:text-[100px] text-6xl mb-2">404</div>
                <div>Page not found</div>
                <div className="grid grid-cols-2 mt-4">
                    <Link className="text-blue-600 hover:text-blue-500 font-medium underline" to="/">Go Back</Link>
                    <button onClick={()=>navigate(-1)} className="text-blue-600 hover:text-blue-500 font-medium underline" href="/">Home</button>
                </div>
            </div>
        </div>
    );
};

export default Error;