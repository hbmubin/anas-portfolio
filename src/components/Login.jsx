import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../private/AuthProvider";

const Login = () => {
  const {user , setUser, setLoading, loading} = useContext(AuthContext)
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const location = useLocation()

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    
      const response = await fetch('http://localhost:5000/login', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({ email, password: pass }),
      });
      
      const data = await response.json();
      if(response.ok){
        setUser(data)
        setError(' ')
        localStorage.setItem("user", JSON.stringify(data));
        e.target.reset()
        navigate(location?.state ? location.state : "/admin-dashboard");
      }
      else{
        setError(data.message)
        e.target.reset()
      }
      setLoading(false)

  };

  useEffect(()=>{
      if(user){
        navigate('/admin-dashboard')
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
        <input
          value="Admin Login"
          type="submit"
          className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-teal-500 text-white"
        />
      </form>

      {user && (
        <div className="mt-4">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
    </div>
  );
};

export default Login;
