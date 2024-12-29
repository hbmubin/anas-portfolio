import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../private/AuthProvider";
import { BounceLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className=" min-h-screen w-screen flex justify-center items-start mt-20">
        <BounceLoader size={38} color="currentColor" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  {
    return <Navigate state={location.pathname} to="/admin-login"></Navigate>;
  }
};

export default PrivateRoute;
