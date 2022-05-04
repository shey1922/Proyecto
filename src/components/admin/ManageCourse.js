import React from "react";
import NavBarAdmin from "./NavBarAdmin";
import SideBarAdmin from "./SideBar";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function ManageCourse() {
  const [modalShow, setModalShow] = React.useState(false);

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

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          <div className="show-courses-section">
            <h3 className="subtitle-section-list-course">Section 1</h3>
            <div className="list-items-courses">
              <div class="item-course">
                <div class="img-reference-item-course">
                  <img
                    src="assets/images/ViolenciaSexual.jpg"
                    width="200"
                    height="160"
                    alt=""
                  />
                </div>
                <div class="course-name">
                  Curso 01
                  <button
                    className="pen-btn-edit-course"
                    onClick={() => setModalShow(true)}
                  >
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Curso 02
                  <button
                    className="pen-btn-edit-course"
                    onClick={() => setModalShow(true)}
                  >
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Curso 03
                  <button
                    className="pen-btn-edit-course"
                    onClick={() => setModalShow(true)}
                  >
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Curso 04
                  <button
                    className="pen-btn-edit-course"
                    onClick={() => setModalShow(true)}
                  >
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="show-courses-section">
            <h3 className="subtitle-section-list-course">Section 2</h3>
            <div className="list-items-courses">
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Curso 05
                  <button
                    className="pen-btn-edit-course"
                    onClick={() => setModalShow(true)}
                  >
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Curso 06
                  <button
                    className="pen-btn-edit-course"
                    onClick={() => setModalShow(true)}
                  >
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Curso 07
                  <button
                    className="pen-btn-edit-course"
                    onClick={() => setModalShow(true)}
                  >
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
              </div>
              <div class="item-course">
                <div class="img-reference-item-course"></div>
                <div class="course-name">
                  Curso 08
                  <button
                    className="pen-btn-edit-course"
                    onClick={() => setModalShow(true)}
                  >
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

export default ManageCourse;

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
        <div className="min-img-dialog-exm"></div>
        <Modal.Title id="contained-modal-title-vcenter">
          Curso atención integral a víctimas de violencia sexual
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="desciption-body-modal">
          El curso atención integral a víctimas de violencia sexual con
          contenidos online brinda herramientas cognoscitivas al personal de
          salud en el manejo de estos pacientes, así mismo, se comparten
          aspectos epidemiológicos relacionados con la violencia sexual.
        </p>
        <ul class="fa-ul sections-body-modal">
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Preliminares
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Modulo 1
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Modulo 2
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Modulo 3
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Modulo 4
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Modulo 5
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <div className="footer-dialog desciption-body-modal">
          <div className="column-1-desc">
            <ul class="fa-ul">
              <li>
                <span class="fa-li">
                  <i class="fas fa-clock"></i>
                </span>
                6 horas
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-book"></i>
                </span>
                5 Módulos
              </li>
            </ul>
          </div>
          <div className="column-1-desc">
            <button
              className="gotoeditbtn"
              onClick={() => navigate("/edit-detail-course")}
            >
              Edit Course
            </button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
