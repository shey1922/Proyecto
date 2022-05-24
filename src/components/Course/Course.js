import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Course(props) {

  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/courses/${props.id}`);
  // }
  function confirmInscription() {
    Swal.fire({
      title: '¿Desea confirmar su inscripción al curso?',
      showCancelButton: true,
      icon: 'question',
      width: '25%',
      height: '25%',
      fontSize: '20px',
      confirmButtonText: 'Inscribirme',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/courses/${props.id}`);
        Swal.fire('¡Felicidades, ya está inscrita!', '', 'success')
      }
    })
  }

  return (
    <div className="card-course">
      <div className="course-img-ejm">
        <img className="course-img-ejm"
          src="https://2evs.co/wp-content/uploads/2021/06/ViolenciaSexualPortada-01.jpg"
          alt="new"
        />
      </div>
      <h5>{props.topic}</h5>
      <p>Administrador</p>
      <button onClick={confirmInscription} className="inscriptionButton">INSCRIBIRSE AL CURSO</button>
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