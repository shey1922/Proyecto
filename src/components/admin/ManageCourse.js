import React from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';

function ManageCourse() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [courseTitle, setCourseTitle] = React.useState("");
  const [courseDescription, setDescription] = React.useState("");
  const [courseHour, setCourseHour] = React.useState(0);
  const [courseLessons, setLessons] = React.useState(0);
  const [courseLevel, setLevel] = React.useState("Beginner");

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

  const changeAddSections = () => {
    console.log(courseTitle);
    console.log(courseDescription);
    console.log(courseHour);
    console.log(courseLessons);
    console.log(courseLevel);
    if(courseTitle === "" | courseDescription === "" | courseHour === 0 | courseLessons === 0 | courseLevel === ""){
      handleShowAlert();
    } else {
      localStorage.setItem("ACcourseTitle", courseTitle);
      localStorage.setItem("ACcourseDescription", courseDescription);
      localStorage.setItem("ACcourseHour", courseHour);
      localStorage.setItem("ACcourseLessons", courseLessons);
      localStorage.setItem("ACcourseLevel", courseLevel);
      handleClose();
      navigate('/add-course');
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
              <h2 className="title-section-manage-course">Courses</h2>
              <p className="route-section-manage-course">Home &gt; Cursos </p>
            </div>
            <div className="column-2-head-section">
              <button className="btn-add-course" onClick={handleShow}>ADD COURSE</button>
            </div>
          </div>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Create Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              { (showAlert === false) ? <div></div>: 
                <Alert severity="error">
                  <h5>Falta completar datos!</h5>
                </Alert>}
              <div className="add-course-modal">
                <div className="section-modal-add-course">
                  <label>Course Title</label>
                  <input className="input-add-course-modal" placeholder="Course title example" onChange={(event) => updateCourseTitle(event)}></input>
                </div>
                <div className="section-modal-add-course">
                  <label>Description</label>
                  <textarea className="input-ta-add-course-modal" rows="3" placeholder="Description course" onChange={(event) => updateDescription(event)}></textarea>
                </div>
                <div className="section-modal-add-course column-3">
                  <div className="box-s">
                    <label>Hours</label>
                    <input className="input-add-course-modal" placeholder="0" type="number" onChange={(event) => updateHour(event)}></input>
                  </div>
                  <div className="box-s">
                    <label>Lecciones</label>
                    <input className="input-add-course-modal" placeholder="0" type="number" onChange={(event) => updateLessons(event)}></input>
                  </div>
                  <div className="box-s">
                    <label>Level</label>
                    <select name="typequestion" id="typequestion1" onChange={(event) => updateLevel(event)}>
                      <option value="Beginer">Beginner</option>
                      <option value="Medium">Medium</option>
                      <option value="Advanced">Advanced  </option>
                    </select>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="close-btn" onClick={handleClose}>
                Close
              </button>
              <button className="add-section-btn" onClick={(event) => changeAddSections()}>
                Add Sections
              </button>
            </Modal.Footer>
          </Modal>

          <div className="show-courses-section">
            <h3 className="subtitle-section-list-course">Section 1 title</h3>
            <div className="list-items-courses">
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <button className="pen-btn-edit-course" onClick={() => setModalShow(true)}>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <button className="pen-btn-edit-course" onClick={() => setModalShow(true)}>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <button className="pen-btn-edit-course" onClick={() => setModalShow(true)}>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <button className="pen-btn-edit-course" onClick={() => setModalShow(true)}>
                    <i class="fas fa-pen"></i>
                  </button>
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
                  <button className="pen-btn-edit-course" onClick={() => setModalShow(true)}>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <button className="pen-btn-edit-course" onClick={() => setModalShow(true)}>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <button className="pen-btn-edit-course" onClick={() => setModalShow(true)}>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Title 1
                  <button className="pen-btn-edit-course" onClick={() => setModalShow(true)}>
                    <i class="fas fa-pen"></i>
                  </button>
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

function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate();
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <div className="min-img-dialog-exm">
        </div>
        <Modal.Title id="contained-modal-title-vcenter">
          Title Course
        </Modal.Title>
        <Modal.Body>
          by Author Name
        </Modal.Body>
      </Modal.Header>
      <Modal.Body>
        <p className="desciption-body-modal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <ul class="fa-ul sections-body-modal">
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Section and fundamentals of this nice course</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Section and fundamentals of this nice course</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Section and fundamentals of this nice course</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Section and fundamentals of this nice course</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <div className="footer-dialog desciption-body-modal">
          <div className="column-1-desc">
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-clock"></i></span>6 hours</li>
              <li><span class="fa-li"><i class="fas fa-book"></i></span>12 lessons</li>
              <li><span class="fa-li"><i class="fas fa-arrow-up"></i></span>Beginner</li>
            </ul>
          </div>
          <div className="column-1-desc">
            <button className="gotoeditbtn" onClick={() => navigate('/edit-detail-course')}>Edit Course</button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}