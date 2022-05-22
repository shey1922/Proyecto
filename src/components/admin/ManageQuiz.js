import React from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert2';
import Modal from 'react-bootstrap/Modal';
import { Alert } from '@mui/material';

function ManageQuiz() {
  const navigate = useNavigate();

  const [showAlert1, setShowAlert1] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const [quizTitle, setQuizTitle] = React.useState("");
  const [courseAssign, setCourseAssign] = React.useState("");
  const [sectionAssign, setSectionAssign] = React.useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }
  const handleShowAlert = () => setShowAlert1(true);
  const handleCloseAlert = () => setShowAlert1(false);

  const updateQuizTitle = (event) => {
    setQuizTitle(event.target.value)
  }

  const updatecourseAssign = (event) => {
    setCourseAssign(event.target.value)
  }

  const updatesectionAssign = (event) => {
    setSectionAssign(event.target.value)
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const showAlert = () =>{
    swal.fire({
      title: 'Do you want to delete the quiz "Quiz Name"?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('Quiz Deleted!', '', 'success').then((result) => {
          window.location.reload(false);
        });
      }
    })
  }

  const changeAddQuestions = () => {
    console.log(quizTitle);
    console.log(courseAssign);
    console.log(sectionAssign);
    navigate('/add-quiz');
  }

  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="flex">
        <SideBarAdmin></SideBarAdmin>
        <div className="content-manage-quiz">
          <div className="head-section">
            <div className="column-1-head-section">
              <h2 className="title-section-manage-course">Quizes</h2>
              <p className="route-section-manage-course">Home &gt; Quizes </p>
            </div>
            <div className="column-2-head-section">
              <button className="btn-add-course" onClick={handleShow}>ADD QUIZ</button>
            </div>
          </div>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Create Quiz</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              { (showAlert1 === false) ? <div></div>: 
                <Alert severity="error">
                  <h5>Falta completar datos!</h5>
                </Alert>}
              <div className="add-course-modal">
                <div className="section-modal-add-course">
                  <label>Quiz Title</label>
                  <input className="input-add-course-modal" placeholder="Quiz title example" onChange={(event) => updateQuizTitle(event)}></input>
                </div>
                <div className="section-modal-add-course">
                  <label>Course</label>
                  <select name="typequestion" id="typequestion1" onChange={(event) => updatecourseAssign(event)}>
                    <option value="Curso 1">Curso 1</option>
                    <option value="Curso 2">Curso 2</option>
                    <option value="Curso 3">Curso 3</option>
                  </select>
                </div>
                <div className="section-modal-add-course">
                  <label>Section</label>
                  <select name="typequestion" id="typequestion1" onChange={(event) => updatesectionAssign(event)}>
                    <option value="Section 1">Section 1</option>
                    <option value="Section 2">Section 2</option>
                    <option value="Section 3">Section 3</option>
                  </select>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="close-btn" onClick={handleClose}>
                Close
              </button>
              <button className="add-section-btn" onClick={(event) => changeAddQuestions()}>
                Add Questions
              </button>
            </Modal.Footer>
          </Modal>
          <div className="show-quiz-section">
            <div className="list-items-quizes">
              <div class="item-quiz">
                <div className="high-row">
                  <div className="img-high-row"></div>
                  <div className="info-card-quiz">
                    <h4 className="title-quiz-card">
                      Title Quiz
                    </h4>
                    <p className="subtitle-quiz-card">
                      number of completed
                    </p>
                  </div>
                </div>
                <div className="low-row">
                  <button className="btn-review">
                    <i className="fas fa-list icon-button"></i>
                    REVIEW
                    <div className="number-review-card">5</div>
                  </button>
                  <label class="dropdown">
                    <div class="dd-button">
                      <i class='fa fa-ellipsis-h'></i>
                    </div>
                    <input type="checkbox" class="dd-input" id="test"></input>
                    <ul class="dd-menu">
                      <li>
                        <a>Review Quiz</a>
                      </li>
                      <li>
                        <a onClick={() => navigate('/edit-detail-quiz')}>Edit Quiz</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a className="a-drop-button" onClick={()=>showAlert()}>Delete Quiz</a>
                      </li>
                    </ul>
                  </label>
                </div>
              </div>
              <div class="item-quiz">
                <div className="high-row">
                  <div className="img-high-row"></div>
                  <div className="info-card-quiz">
                    <h4 className="title-quiz-card">
                      Title Quiz
                    </h4>
                    <p className="subtitle-quiz-card">
                      number of completed
                    </p>
                  </div>
                </div>
                <div className="low-row">
                  <button className="btn-review">
                    <i className="fas fa-list icon-button"></i>
                    REVIEW
                    <div className="number-review-card">5</div>
                  </button>
                  <label class="dropdown">
                    <div class="dd-button">
                      <i class='fa fa-ellipsis-h'></i>
                    </div>
                    <input type="checkbox" class="dd-input" id="test"></input>
                    <ul class="dd-menu">
                      <li>
                        <a>Review Quiz</a>
                      </li>
                      <li>
                        <a onClick={() => navigate('/edit-detail-quiz')}>Edit Quiz</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a className="a-drop-button" onClick={()=>showAlert()}>Delete Quiz</a>
                      </li>
                    </ul>
                  </label>
                </div>
              </div>
            </div>
            <div className="list-items-quizes">
            <div class="item-quiz">
                <div className="high-row">
                  <div className="img-high-row"></div>
                  <div className="info-card-quiz">
                    <h4 className="title-quiz-card">
                      Title Quiz
                    </h4>
                    <p className="subtitle-quiz-card">
                      number of completed
                    </p>
                  </div>
                </div>
                <div className="low-row">
                  <button className="btn-review">
                    <i className="fas fa-list icon-button"></i>
                    REVIEW
                    <div className="number-review-card">5</div>
                  </button>
                  <label class="dropdown">
                    <div class="dd-button">
                      <i class='fa fa-ellipsis-h'></i>
                    </div>
                    <input type="checkbox" class="dd-input" id="test"></input>
                    <ul class="dd-menu">
                      <li>
                        <a>Review Quiz</a>
                      </li>
                      <li>
                        <a onClick={() => navigate('/edit-detail-quiz')}>Edit Quiz</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a className="a-drop-button" onClick={()=>showAlert()}>Delete Quiz</a>
                      </li>
                    </ul>
                  </label>
                </div>
            </div>
            <div class="item-quiz">
              <div className="high-row">
                <div className="img-high-row"></div>
                <div className="info-card-quiz">
                  <h4 className="title-quiz-card">
                    Title Quiz
                  </h4>
                  <p className="subtitle-quiz-card">
                    number of completed
                  </p>
                </div>
              </div>
              <div className="low-row">
                <button className="btn-review">
                  <i className="fas fa-list icon-button"></i>
                  REVIEW
                  <div className="number-review-card">5</div>
                </button>
                <label class="dropdown">
                    <div class="dd-button">
                      <i class='fa fa-ellipsis-h'></i>
                    </div>
                    <input type="checkbox" class="dd-input" id="test"></input>
                    <ul class="dd-menu">
                      <li>
                        <a>Review Quiz</a>
                      </li>
                      <li>
                        <a onClick={() => navigate('/edit-detail-quiz')}>Edit Quiz</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a className="a-drop-button" onClick={()=>showAlert()}>Delete Quiz</a>
                      </li>
                    </ul>
                  </label>
              </div>
            </div>
            </div>
          </div>
          <div className="list-quizes">
            <div className="item-list-quiz-row">
              <div className="column-1-elements-item">
                <div className="img-ref-item-list-quiiz"></div>
                <h4>Item Name Quiz</h4>
              </div>
              <div className="column-1-elements-item">
                <p>COMPLETED</p>
                <div>15</div>
                <label class="dropdown">
                    <div class="dd-button">
                      <i class='fa fa-ellipsis-v'></i>
                    </div>
                    <input type="checkbox" class="dd-input" id="test"></input>
                    <ul class="dd-menu">
                      <li>
                        <a>Review Quiz</a>
                      </li>
                      <li>
                        <a onClick={() => navigate('/edit-detail-quiz')}>Edit Quiz</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a className="a-drop-button" onClick={()=>showAlert()}>Delete Quiz</a>
                      </li>
                    </ul>
                  </label>
              </div>
            </div>
            <div className="item-list-quiz-row">
              <div className="column-1-elements-item">
                <div className="img-ref-item-list-quiiz"></div>
                <h4>Item Name Quiz</h4>
              </div>
              <div className="column-1-elements-item">
                <p>COMPLETED</p>
                <div>15</div>
                <label class="dropdown">
                  <div class="dd-button">
                    <i class='fa fa-ellipsis-v'></i>
                  </div>
                  <input type="checkbox" class="dd-input" id="test"></input>
                  <ul class="dd-menu">
                    <li>
                      <a>Review Quiz</a>
                    </li>
                    <li>
                      <a onClick={() => navigate('/edit-detail-quiz')}>Edit Quiz</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a className="a-drop-button" onClick={()=>showAlert()}>Delete Quiz</a>
                    </li>
                  </ul>
                </label>
              </div>
            </div>
            <div className="item-list-quiz-row">
              <div className="column-1-elements-item">
                <div className="img-ref-item-list-quiiz"></div>
                <h4>Item Name Quiz</h4>
              </div>
              <div className="column-1-elements-item">
                <p>COMPLETED</p>
                <div>15</div>
                <label class="dropdown">
                    <div class="dd-button">
                      <i class='fa fa-ellipsis-v'></i>
                    </div>
                    <input type="checkbox" class="dd-input" id="test"></input>
                    <ul class="dd-menu">
                      <li>
                        <a>Review Quiz</a>
                      </li>
                      <li>
                        <a onClick={() => navigate('/edit-detail-quiz')}>Edit Quiz</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a className="a-drop-button" onClick={()=>showAlert()}>Delete Quiz</a>
                      </li>
                    </ul>
                  </label>
              </div>
            </div>
            <div className="item-list-quiz-row">
              <div className="column-1-elements-item">
                <div className="img-ref-item-list-quiiz"></div>
                <h4>Item Name Quiz</h4>
              </div>
              <div className="column-1-elements-item">
                <p>COMPLETED</p>
                <div>15</div>
                <label class="dropdown">
                    <div class="dd-button">
                      <i class='fa fa-ellipsis-v'></i>
                    </div>
                    <input type="checkbox" class="dd-input" id="test"></input>
                    <ul class="dd-menu">
                      <li>
                        <a>Review Quiz</a>
                      </li>
                      <li>
                        <a onClick={() => navigate('/edit-detail-quiz')}>Edit Quiz</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a className="a-drop-button" onClick={()=>showAlert()}>Delete Quiz</a>
                      </li>
                    </ul>
                  </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageQuiz