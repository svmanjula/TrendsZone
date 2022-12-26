import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { authUser } = useContext(AuthContext);

  if (!authUser) {
  return  <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
