import React , { useEffect, useState } from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import { useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';
import { API } from "aws-amplify";
import Modal from 'react-bootstrap/Modal';
import swal from 'sweetalert2';

function EditDetailQuiz() {

  const testTitle = localStorage.getItem('editTitleQuiz');
  const testId = localStorage.getItem('editIdTest');
  const [questions, setQuestions] = useState([]);
  const [questionTitle, setQuestionTitle] = React.useState("");
  const [showAlertModal, setShowAlerttModal] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const navigate = useNavigate();
  const handleShowAlertModal = () => setShowAlerttModal(true);
  const handleCloseAlertModal = () => setShowAlerttModal(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    handleCloseAlertModal();
  }

  const updateQuestionTitle = (event) => {
    setQuestionTitle(event.target.value);
  }

  useEffect(() => {
    console.log(testId);
    API.get('WebcsAPI', '/tests/' + testId + '/questions', {})
      .then(setQuestions).then(console.log(questions))
      .catch(console.error)
  }, []);

  const CreateQuestion = () => {
    if(questionTitle === ""){
      handleShowAlertModal();
    } else{
      API.post('WebcsAPI', '/questions', {
        body: {
          statement: questionTitle,
          testId: testId
        }
      }).then(r => console.log(r))
      .catch(console.error);
      swal.fire('Pregunta creada con éxito!', '', 'success');
      handleClose();
    }
  }

  return (
    <div className="editdetailquiz">
        <NavBarAdmin></NavBarAdmin>
        <div className="flex">
            <SideBarAdmin></SideBarAdmin>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Crear Pregunta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  { (showAlertModal === false) ? <div></div>: 
                    <Alert severity="error">
                      <h5>Falta completar datos!</h5>
                    </Alert>}
                  <div className="add-course-modal">
                    <div className="section-modal-add-course">
                      <label>Enunciado</label>
                      <input className="input-add-course-modal" placeholder="Enunciado de la pregunta" onChange={(event) => updateQuestionTitle(event)}></input>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <button className="close-btn" onClick={handleClose}>
                    Cancelar
                  </button>
                  <button className="add-section-btn" onClick={(event) => CreateQuestion()}>
                    Agregar
                  </button>
                </Modal.Footer>
              </Modal>

            <div className="content-edit-quizes">
              <div className="head-section-quiz">
                <div className="column-1-head-section">
                  <h2 className="title-section-manage-course">Editar Test</h2>
                  <p className="route-section-manage-course"> <a onClick={() => navigate('/default-home')}>Home</a> &gt; <a onClick={() => navigate('/edit-quiz')}>Lista de tests</a> &gt; <a>Editar Test</a></p>
                </div>
              </div>
              <div className="body-section-edit-course">
                <div className="column-section-1-edit-course">
                  <div className="questions-section-edit-quiz">
                    <h2>{testTitle}</h2>
                    <h3>Preguntas</h3>
                    <div className="list-questions-edit-quiz">
                      {
                        questions.map(
                          (q, index) => 
                          <div className="element-list-quiz">
                            <div className="row-element-list-quiz">
                              <div className="column-element-list-quiz-1">
                                <i className="fas fa-bars fa-2x"></i>
                                <h4 className="title-row-element">Questions {index + 1} of {questions.length}</h4>
                              </div>
                              <div className="column-element-list-quiz-2">
                                <p className="points-label">800 pt</p>
                                <i class='fa fa-ellipsis-h fa-2x'></i>
                              </div>
                            </div>
                            <div className="content-element-list-quiz">
                              <p>{q.statement}</p>
                            </div>
                            <div className="buttons-element-list-quiz">
                              <button className="answers-list-quiz">
                                <i class="fas fa-angle-down"></i>
                                Answers
                              </button>
                              <button className="single-answer-list-quiz">
                                Single Answer
                              </button>
                            </div>
                          </div>
                        )
                      }
                    </div>
                  </div>
                  <div className="new-question-section-edit-quiz">
                    <button className="btn-add-section-edit-course" onClick={handleShow}>AGREGAR</button>
                  </div>
                </div>
                <div className="column-section-2-edit-course">
                  <div className="card-aactions-buttons-edit-course">
                    <div className="head-card-actions-button">
                        <button className="save-changes-btn-edit-course">SAVE CHANGES</button>
                    </div>
                    <div className="bottom-card-actions-button">
                      <a className="a-save">
                        <h4>Save Draft</h4>
                      </a>
                      <a className="a-delete">
                        <h4>Delete Quiz</h4>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default EditDetailQuiz