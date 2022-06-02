import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context";

export default function PrivateRoute({ children }) {
  const { loggedIn } = useContext(AuthContext);

  return loggedIn ? children : <Navigate replace to="/signin" />;
}
