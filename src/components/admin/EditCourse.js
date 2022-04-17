import React from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";

function EditCourse() {
  return (
    <div className="edit-course">
      <NavBarAdmin></NavBarAdmin>
      <div className="flex">
        <SideBarAdmin></SideBarAdmin>
        <div>
          Content Edit Course
        </div>
      </div>
    </div>
  );
}

export default EditCourse