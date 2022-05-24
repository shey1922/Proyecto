import React from "react";
import SideBarAdmin from "./SideBar";
import NavBarAdmin from './NavBarAdmin'

function DefaultHome() {
  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="flex">
        <SideBarAdmin></SideBarAdmin>
        <div className="defaulthome">
          a
        </div>
      </div>
    </div>
  );
}

export default DefaultHome