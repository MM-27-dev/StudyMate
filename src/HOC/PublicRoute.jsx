import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  return !user ? children : <Navigate to="/dashbord" />;
};

export default PublicRoute;
