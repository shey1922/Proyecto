import React, { useContext } from "react";
import { AuthContext } from "../context";
import DefaultHome from "./admin/DefaultHomePage";
import UserHome from "./UserHome";

function Home() {

  const { isAdmin } = useContext(AuthContext);

  return (
    isAdmin ? <DefaultHome /> : <UserHome />
  );
}

export default Home;
