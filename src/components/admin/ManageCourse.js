import React from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";

function ManageCourse() {
  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="flex">
        <SideBarAdmin></SideBarAdmin>
        <div className="content-manage-course">
          <div className="head-section">
            <div className="column-1-head-section">
              <h2 className="title-section-manage-course">Courses</h2>
              <p className="route-section-manage-course">Home &gt; Cursos </p>
            </div>
            <div className="column-2-head-section">
              <button className="btn-add-course">ADD COURSE</button>
            </div>
          </div>
          <div className="show-courses-section">
            <h3 className="subtitle-section-list-course">Section 1 title</h3>
            <div className="list-items-courses">
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <i class="fas fa-pen"></i>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <i class="fas fa-pen"></i>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <i class="fas fa-pen"></i>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <i class="fas fa-pen"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="show-courses-section">
            <h3 className="subtitle-section-list-course">Section 2 title</h3>
            <div className="list-items-courses">
            <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <i class="fas fa-pen"></i>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <i class="fas fa-pen"></i>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <i class="fas fa-pen"></i>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <i class="fas fa-pen"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCourse