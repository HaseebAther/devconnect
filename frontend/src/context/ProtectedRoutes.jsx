import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ isAuthenticated, children }) => {

    if (!isAuthenticated) {
    // if not logged in, redirect
    return <Navigate to="/auth/login" replace />;
  }
  // else, show the page
  return children;
};

export default ProtectedRoutes;