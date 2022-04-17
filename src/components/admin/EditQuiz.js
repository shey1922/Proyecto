import React from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";

function EditQuiz() {
  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="flex">
        <SideBarAdmin></SideBarAdmin>
        <div>
          Content Edit Quiz
        </div>
      </div>
    </div>
  );
}

export default EditQuiz