import React from 'react';
import { useNavigate } from 'react-router-dom';

function Course(props) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${props.id}`);
  }

  return (
    <div className="card-course" onClick={handleClick}>
      <div className="course-img-ejm">
        <img className="course-img-ejm"
        src="https://2evs.co/wp-content/uploads/2021/06/ViolenciaSexualPortada-01.jpg"
        alt="new"
        />
      </div>
      <h5>{props.topic}</h5>
      <p>Administrador</p>
      <div className="footer-cad-course">
        <div className="element-footer-card-course-1">
          <i className="fas fa-clock"></i>
          <h5>22 horas</h5>
        </div>
        <div className="element-footer-card-course-2">
          <i className="fas fa-play"></i>
          <h5>21 lecciones</h5>
        </div>
      </div>
    </div>
  );
}

export default Course