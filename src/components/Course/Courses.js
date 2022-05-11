import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Course from './Course';

function Courses() {

  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get('proyectoApi', '/courses', {})
      .then(setCourses)
      .catch(console.error);
  }, []);

  // const recentCourses = [
  //   {
  //     id:1,
  //     image: "url-img",
  //     name: "Curso atención integral a víctimas de violencia sexual",
  //     author: "2EVS",
  //     hours: 6,
  //     lessons: 12
  //   },
  //   {
  //     id:2,
  //     name: "Curso atención integral a víctimas de violencia sexual",
  //     author: "2EVS",
  //     hours: 6,
  //     lessons: 12
  //   }
  // ]

  // const allCourses = [
  //   {
  //     id:1,
  //     image: "url-img",
  //     name: "Curso atención integral a víctimas de violencia sexual",
  //     author: "2EVS",
  //     hours: 6,
  //     lessons: 12
  //   },
  //   {
  //     id:2,
  //     name: "Curso atención integral a víctimas de violencia sexual",
  //     author: "2EVS",
  //     hours: 6,
  //     lessons: 12
  //   },
  //   {
  //     id:3,
  //     name: "Curso atención integral a víctimas de violencia sexual",
  //     author: "2EVS",
  //     hours: 6,
  //     lessons: 12
  //   },
  //   {
  //     id:4,
  //     name: "Curso atención integral a víctimas de violencia sexual",
  //     author: "2EVS",
  //     hours: 6,
  //     lessons: 12
  //   }
  // ]

  // const courseList = recentCourses.map(course =>
  //   <a onClick={() => navigate('/course-dashboard')}>
  //     <div className="card-course">
  //       <div className="course-img-ejm"></div>
  //       <h5>{course.name}</h5>
  //       <p>{course.author}</p>
  //       <div className="footer-cad-course">
  //         <div className="element-footer-card-course-1">
  //           <i className="fas fa-clock"></i>
  //           <h5>{course.hours} horas</h5>
  //         </div>
  //         <div className="element-footer-card-course-2">
  //           <i class="fas fa-play"></i>
  //           <h5>{course.lessons} lecciones</h5>
  //         </div>
  //       </div>
  //     </div>
  //   </a>  
  // )

  // const allCourseList = allCourses.map(course =>  
  //   <div className="card-course">
  //     <div className="course-img-ejm"></div>
  //     <h5>{course.name}</h5>
  //     <p>{course.author}</p>
  //     <div className="footer-cad-course">
  //       <div className="element-footer-card-course-1">
  //         <i className="fas fa-clock"></i>
  //         <h5>{course.hours} horas</h5>
  //       </div>
  //       <div className="element-footer-card-course-2">
  //         <i class="fas fa-play"></i>
  //         <h5>{course.lessons} lecciones</h5>
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div className="courses-content-student">
      <div className="head-section">
        <div className="column-1-head-section">
          <h2 className="title-section-manage-course">Cursos</h2>
          <p className="route-section-manage-course">Home &gt; Cursos </p>
        </div>
      </div>
      {/* <div className="recent-courses-student">
        <div className="title-line">
          <h4>CURSOS RECIENTES</h4>
          <div className="line"></div>
        </div>
        <div className="courses-list-container">
          {courseList}
        </div>
      </div> */}
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