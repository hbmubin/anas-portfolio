import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../private/AuthProvider";
import { BounceLoader } from "react-spinners";
import Swal from "sweetalert2";
import { decodeToken } from "../private/decodedToken";

const Login = () => {
  const {user, setUser, setLoading, loading} = useContext(AuthContext)
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const location = useLocation()

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    
      const response = await fetch('https://anas-portfolio-server.vercel.app/login', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({ email, password: pass }),
      });
      
      const data = await response.json();
      if(response.ok){
        const decodedUser = decodeToken(data?.token)
        setUser(decodedUser)
        localStorage.setItem("token", JSON.stringify(data?.token));
        setError(' ')
        e.target.reset()
        navigate(location?.state ? location.state : "/admin-dashboard/profile");
      }
      else{
        setError(data.message)
        e.target.reset()
        Swal.fire({
                      position: "top",
                      icon: "error",
                      title: error,
                      showConfirmButton: false,
                      timer: 1500
                    });
      }
      setLoading(false)
  };

  useEffect(()=>{
      if(user){
        navigate('/admin-dashboard/profile')
      }
      
  },[user,navigate])

  return (
    <div>
      <h3 className="text-center mt-10 text-lg font-medium">Admin Login</h3>
      <div className="flex items-center justify-center text-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-full max-w-lg p-12 shadow-lg mt-5 border rounded"
      >
        <label htmlFor="email" className="self-start text-xs font-semibold">
          Email
        </label>
        <input
          required
          name="email"
          type="email"
          className="flex items-center h-12 px-4 mt-2 rounded border outline-none"
        />
        <label
          htmlFor="password"
          className="self-start mt-3 text-xs font-semibold"
        >
          Password
        </label>
        <input
          required
          name="password"
          type="password"
          className="flex items-center h-12 px-4 mt-2 rounded border outline-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-textGray text-white cursor-pointer"
        >{loading ? <BounceLoader size={26} color="currentColor" /> : 'Admin Login'}</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
