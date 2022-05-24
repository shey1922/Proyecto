import React , { useEffect, useState } from "react";
import NavBarAdmin from './NavBarAdmin';
import SideBarAdmin from "./SideBar";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert2';
import Modal from 'react-bootstrap/Modal';
import { Alert } from '@mui/material';
import { API } from "aws-amplify";

function ManageQuiz() {

  const [recentlyTests, setRecentlyTests] = useState([]);

  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    API.get('WebcsAPI', '/courses', {})
      .then(setCourses)
      .catch(console.error).then(
        API.get('WebcsAPI', '/courses/bd7ca18d-6652-48d5-b3e7-34f79ef2d937/tests', {})
        .then(setRecentlyTests)
        .catch(console.error)
      );
  }, []);

  const navigate = useNavigate();

  const [showAlertModal, setShowAlerttModal] = React.useState(false);
  const [showAlert1, setShowAlert1] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const [quizTitle, setQuizTitle] = React.useState("");
  const [courseAssign, setCourseAssign] = React.useState("");
  const [sectionAssign, setSectionAssign] = React.useState("");

  const handleShowAlertModal = () => setShowAlerttModal(true);
  const handleCloseAlertModal = () => setShowAlerttModal(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    handleCloseAlertModal();
  }
  const handleShowAlert = () => setShowAlert1(true);
  const handleCloseAlert = () => setShowAlert1(false);

  const updateQuizTitle = (event) => {
    setQuizTitle(event.target.value);
  }

  const updatecourseAssign = (event) => {
    setCourseAssign(event.target.value)
    API.get('WebcsAPI', '/courses/' + event.target.value + '/modules', {})
      .then(setModules)
      .catch(console.error);
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
    /*console.log(quizTitle);
    console.log(courseAssign);
    console.log(sectionAssign);
    navigate('/add-quiz');*/
    if(quizTitle === "" | courseAssign === "" | sectionAssign === ""){
      handleShowAlertModal();
    } else{
      API.post('WebcsAPI', '/tests', {
        body: {
            topic: quizTitle,
            courseId: courseAssign,
            moduleId: sectionAssign
        }
      }).then(r => console.log(r))
      .catch(console.error);
      swal.fire('Test creado con éxito!', '', 'success');
      handleClose();
    }
  }

  const changeEditTest = (topic, id) => {
    localStorage.setItem("editTitleQuiz", topic);
    localStorage.setItem("editIdTest", id);
    navigate('/edit-detail-quiz');
  }

  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="flex">
        <SideBarAdmin></SideBarAdmin>
        <div className="content-manage-quiz">
          <div className="head-section">
            <div className="column-1-head-section">
              <h2 className="title-section-manage-course">Administrar Cuestionarios</h2>
              <p className="route-section-manage-course">Home &gt; Administrar Cuestionarios </p>
            </div>
            <div className="column-2-head-section">
              <button className="btn-add-course" onClick={handleShow}>AGREGAR</button>
            </div>
          </div>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Crear Test</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              { (showAlertModal === false) ? <div></div>: 
                <Alert severity="error">
                  <h5>Falta completar datos!</h5>
                </Alert>}
              <div className="add-course-modal">
                <div className="section-modal-add-course">
                  <label>Titulo</label>
                  <input className="input-add-course-modal" placeholder="Titulo del test" onChange={(event) => updateQuizTitle(event)}></input>
                </div>
                <div className="section-modal-add-course">
                  <label>Curso</label>
                  <select name="typequestion" id="typequestion1" onChange={(event) => updatecourseAssign(event)}>
                    {
                      courses.map(
                        c => 
                        <option selected="selected" value={c.id}>{c.topic}</option>
                      )
                    }
                  </select>
                </div>
                <div className="section-modal-add-course">
                  <label>Módulo</label>
                  <select name="typequestion" id="typequestion1" onChange={(event) => updatesectionAssign(event)}>
                    {
                      modules.length === 0 ? <option selected="selected" disabled>Seleccione un módulo</option>: 
                      modules.map(
                        m => 
                        <option selected="selected" value={m.id}>{m.name}</option>
                      )
                    }
                  </select>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="close-btn" onClick={handleClose}>
                Cancelar
              </button>
              <button className="add-section-btn" onClick={(event) => changeAddQuestions()}>
                Crear Test
              </button>
            </Modal.Footer>
          </Modal>
          <div className="show-quiz-section">
            <div className="list-items-quizes">
              {
                recentlyTests.map( rt  => 
                  <div class="item-quiz">
                    <div className="high-row">
                      <div className="img-high-row"></div>
                      <div className="info-card-quiz">
                        <h4 className="title-quiz-card">
                          {rt.topic}
                        </h4>
                        <p className="subtitle-quiz-card">
                          test completados: 0
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
                            <a>Revisar Test</a>
                          </li>
                          <li>
                            <a onClick={() => changeEditTest(rt.topic, rt.id)}>Editar Test</a>
                          </li>
                          <li class="divider"></li>
                          <li>
                            <a className="a-drop-button" onClick={()=>showAlert()}>Eliminar Test</a>
                          </li>
                        </ul>
                      </label>
                    </div>
                  </div>  
                )
              }
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