import React, { useContext } from 'react'
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../contextes/authCtx";

export const ProtectedRouteAdmin = ({ children }) => {
  const navigate = useNavigate()
  const { authUser } = useAuth();

  if(authUser && authUser.role !== 'admin') {
    return <Navigate to="/login" replace />;
  } 
  return children;
};

export default ProtectedRouteAdmin