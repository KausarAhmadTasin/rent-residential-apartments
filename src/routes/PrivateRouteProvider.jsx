import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRouteProvider = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return (
      <div className="flex items-center justify-center my-36">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

PrivateRouteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRouteProvider;
