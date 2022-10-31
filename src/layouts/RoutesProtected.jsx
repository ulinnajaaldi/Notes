import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthorizationContext } from "../contexts/LocaleContext";

export const RoutesProtected = ({ children, mode }) => {
  const { authUser } = React.useContext(AuthorizationContext);
  const pathName = useLocation();

  if (!authUser && mode === "auth") {
    return <Navigate to="/login" state={{ from: pathName }} replace />;
  }

  if (authUser && mode === "public") {
    return <Navigate to="/" state={{ from: pathName }} replace />;
  }

  return children;
};
