
import React from "react";
import NavBarAdmin from '../components/admin/NavBarAdmin'
import DefaultHome from "./admin/DefaultHomePage";
import SideBarAdmin from "./admin/SideBar";

function HomeAdmin() {
  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="flex">
        <SideBarAdmin></SideBarAdmin>
        <DefaultHome></DefaultHome>
      </div>
    </div>
  );
}

export default HomeAdmin