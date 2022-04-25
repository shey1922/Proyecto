import React from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import Modal from 'react-bootstrap/Modal'
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