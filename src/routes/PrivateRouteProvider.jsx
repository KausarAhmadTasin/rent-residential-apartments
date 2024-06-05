import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRouteProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

PrivateRouteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRouteProvider;
