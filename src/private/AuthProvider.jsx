  import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
  
  export const AuthContext = createContext(null);

  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const location = useLocation()
    // const navigate = useNavigate()

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false)
    }, [setUser]);

    const logOut=()=>{
            localStorage.removeItem('user'); 
            setUser(null); 
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Logout successfully",
              showConfirmButton: false,
              timer: 1500
            });
    }

    const authInfo = {
      user,setUser,loading,setLoading,logOut
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  