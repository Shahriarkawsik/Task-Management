import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const { pathname } = useLocation();
  // useEffect(() => {
  //   setDestination(pathname);
  // }, [pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={pathname}></Navigate>;
};

export default PrivateRoute;
