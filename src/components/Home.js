import React, { useContext } from "react";
import { AuthContext } from "../context";
import DefaultHome from "./admin/DefaultHomePage";
import UserHome from "./UserHome";
import ManageCourse from './admin/ManageCourse';

function Home() {

  const { isAdmin } = useContext(AuthContext);

  return (
    isAdmin ? <ManageCourse /> : <UserHome />
  );
}

export default Home;
