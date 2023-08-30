import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (isAllow, redirectPath="/login", children) => {
  if (!isAllow) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};
export default ProtectedRoute;
