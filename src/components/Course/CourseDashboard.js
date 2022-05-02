import React from 'react';
import SideBarCourse from './SideBarCourse';

function CourseDashboard() {

  return (
    <div className="flex">
        <SideBarCourse/>
        <div className="content-manage-course">
            Default View
        </div>
    </div>
  );
}

export default CourseDashboard