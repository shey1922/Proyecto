import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context";

export default function AdminRoute({ children }) {
  const { user } = useContext(AuthContext);

  return user?.isAdmin ? children : <Navigate replace to="/" />;
}
