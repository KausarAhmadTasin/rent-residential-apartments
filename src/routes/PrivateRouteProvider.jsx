import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRouteProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRouteProvider;
