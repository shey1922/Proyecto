import { API } from 'aws-amplify';
import React , { useEffect, useState } from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';
import swal from 'sweetalert2';

function ManageCourse() {

  const userId = localStorage.getItem('userId');
  const [courses, setCourses] = useState([]);
  const [courseModalTitle, setCourseModalTitle] = useState("");
  const [courseModalModules, setCourseModalModules] = useState([]);

  useEffect(() => {
    API.get('WebcsAPI', '/courses', {})
      .then(setCourses)
      .catch(console.error);
  }, []);

  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [courseTitle, setCourseTitle] = React.useState("");
  const [courseDescription, setDescription] = React.useState("");
  const [courseHour, setCourseHour] = React.useState(0);
  const [courseLessons, setLessons] = React.useState(0);
  const [courseLevel, setLevel] = React.useState("Beginner");

  const handlesetModalShowTrue = (courseName, id) => {
    setModalShow(true);
    setCourseModalTitle(courseName);
    API.get('WebcsAPI', '/courses/' + id +'/modules', {})
      .then(setCourseModalModules).then(console.log(courseModalModules))
      .catch(console.error);
      localStorage.setItem("editIdCourseModal", id);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    handleCloseAlert();
  }

  const handleShowAlert = () => setShowAlert(true);
  const handleCloseAlert = () => setShowAlert(false);

  const updateCourseTitle = (event) => {
    setCourseTitle(event.target.value)
  }

  const updateDescription = (event) => {
    setDescription(event.target.value)
  }

  const updateHour = (event) => {
    setCourseHour(event.target.value)
  }

  const updateLessons = (event) => {
    setLessons(event.target.value)
  }

  const updateLevel = (event) => {
    setLevel(event.target.value)
  }

  const PostCourse = () => {
    if(courseTitle === "" | courseDescription === "" | courseHour === 0 | courseLessons === 0 | courseLevel === ""){
      handleShowAlert();
    } else{
      API.post('WebcsAPI', '/courses', {
        body: {
          topic: courseTitle,
          createdBy: userId
      }
      }).then(r => console.log(r)).catch(console.error);
        swal.fire('Curso guardado con éxito!', '', 'success');
        handleClose();
    }
  }

  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="flex">
        <SideBarAdmin></SideBarAdmin>
        <div className="content-manage-course">
          <div className="head-section">
            <div className="column-1-head-section">
              <h2 className="title-section-manage-course">Administrar Cursos</h2>
              <p className="route-section-manage-course">Home &gt; Administrar Cursos </p>
            </div>
            <div className="column-2-head-section">
              <button className="btn-add-course" onClick={handleShow}>AGREGAR</button>
            </div>
          </div>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            text= {courseModalTitle}
            listModules = {courseModalModules}
          />

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Crear Curso</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              { (showAlert === false) ? <div></div>: 
                <Alert severity="error">
                  <h5>Falta completar datos!</h5>
                </Alert>}
              <div className="add-course-modal">
                <div className="section-modal-add-course">
                  <label>Titulo</label>
                  <input className="input-add-course-modal" placeholder="Titulo del curso" onChange={(event) => updateCourseTitle(event)}></input>
                </div>
                <div className="section-modal-add-course">
                  <label>Descripción</label>
                  <textarea className="input-ta-add-course-modal" rows="3" placeholder="Descripción del curso" onChange={(event) => updateDescription(event)}></textarea>
                </div>
                <div className="section-modal-add-course column-3">
                  <div className="box-s">
                    <label>Horas</label>
                    <input className="input-add-course-modal" placeholder="0" type="number" onChange={(event) => updateHour(event)} min="0"></input>
                  </div>
                  <div className="box-s">
                    <label>Lecciones</label>
                    <input className="input-add-course-modal" placeholder="0" type="number" onChange={(event) => updateLessons(event)} min="0"></input>
                  </div>
                  <div className="box-s">
                    <label>Nivel</label>
                    <select name="typequestion" id="typequestion1" onChange={(event) => updateLevel(event)}>
                      <option value="Principiante">Principiante</option>
                      <option value="Medio">Medio</option>
                      <option value="Avanzado">Avanzado</option>
                    </select>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="close-btn" onClick={handleClose}>
                Close
              </button>
              <button className="add-section-btn" onClick={(event) => PostCourse()}>
                Crear Curso
              </button>
            </Modal.Footer>
          </Modal>

          <div className="show-courses-section">
            <h3 className="subtitle-section-list-course">Mis cursos:</h3>
            <div className="list-items-courses">
              {courses.map(c => 
                <div className="item-course">
                  <div className="img-reference-item-course"></div>
                  <div className="course-name">
                    {c.topic}
                    <button className="pen-btn-edit-course" onClick={() => handlesetModalShowTrue(c.topic, c.id)}>
                      <i className="fas fa-pen"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCourse

function MyVerticallyCenteredModal(props) {

  const navigate = useNavigate();

  const navigateEditPage = () => {
    localStorage.setItem("editTitleCourse", props.text);
    localStorage.setItem("editListModulesCourse", JSON.stringify(props.listModules));
    navigate('/edit-detail-course');
  }

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.text}
        </Modal.Title>
        <Modal.Body>
          by Author Name
        </Modal.Body>
      </Modal.Header>
      <Modal.Body>
        <p className="desciption-body-modal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        {props.listModules.map(l => 
          <ul className="fa-ul sections-body-modal">
            <li><span class="fa-li"><i class="fas fa-check"></i></span>{l.name}</li>
          </ul>)}
      </Modal.Body>
      <Modal.Footer>
        <div className="footer-dialog desciption-body-modal">
          <div className="column-1-desc">
            <ul className="fa-ul">
              <li><span class="fa-li"><i class="fas fa-clock"></i></span>6 hours</li>
              <li><span class="fa-li"><i class="fas fa-book"></i></span>12 lessons</li>
              <li><span class="fa-li"><i class="fas fa-arrow-up"></i></span>Beginner</li>
            </ul>
          </div>
          <div className="column-1-desc">
            <button className="gotoeditbtn" onClick={() => navigateEditPage()}>Edit Course</button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}