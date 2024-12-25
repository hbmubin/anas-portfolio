  import { createContext, useEffect, useState } from "react";

  
  export const AuthContext = createContext(null);

  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false)
    }, [setUser]);

    const authInfo = {
      user,setUser,loading,setLoading
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  