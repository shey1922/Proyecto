import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Course from './Course';

function Courses() {

  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get('WebcsAPI', '/courses', {})
      .then(setCourses)
      .catch(console.error);
  }, []);

  return (
    <div className="courses-content-student">
      <div className="head-section">
        <div className="column-1-head-section">
          <h2 className="title-section-manage-course">Cursos</h2>
          <p className="route-section-manage-course">Home &gt; Cursos </p>
        </div>
      </div>
      <div className="recent-courses-student">
        <div className="title-line">
          <h4>MIS CURSOS</h4>
          <div className="line"></div>
        </div>
        <div className="courses-list-container">
          {courses.map(c => <Course key={c.id} id={c.id} topic={c.topic} />)}
        </div>
      </div>
      <div className="recent-courses-student">
        <div className="title-line">
          <h4>TODOS LOS CURSOS</h4>
          <div className="line"></div>
        </div>
        <div className="courses-list-container">
          {courses.map(c => <Course key={c.id} id={c.id} topic={c.topic} />)}
        </div>
      </div>
    </div>
  );
}

export default Courses