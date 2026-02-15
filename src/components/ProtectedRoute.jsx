import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isAuth");

  return isAuth === "true" ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;