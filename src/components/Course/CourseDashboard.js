import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideBarCourse from './SideBarCourse';

function CourseDashboard() {

  const { courseId } = useParams();

  const [modules, setModules] = useState([]);

  useEffect(() => {
    API.get('proyectoApi', '/modules', {})
      .then(setModules)
      .catch(console.error);
  }, []);

  return (
    <div className="flex">
        <SideBarCourse modules={modules} />
        <div className="content-manage-course">
            Default View
        </div>
    </div>
  );
}

export default CourseDashboard;