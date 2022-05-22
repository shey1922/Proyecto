import React from 'react'
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

function AddQuiz() {
    const navigate = useNavigate();
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }
    return (
        <div>
            <NavBarAdmin></NavBarAdmin>
            <div className="flex">
                <SideBarAdmin></SideBarAdmin>

                <Modal dialogClassName="my-modal" show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Question</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-section">
                        <div className="row">
                            <label>Question text</label>
                            <input className="input-add-section-modal" placeholder="Question text example"></input>
                        </div>
                        <div className="add-sections-modal">
                            <div className="column-1">
                                <label>Respuestas: </label>
                                <div className="list-lecciones-modal">
                                    {}
                                </div>
                            </div>
                            <div className="column-3">
                                <div className="new-question-section-edit-quiz">
                                    <div className="input-group">
                                        <h4>QUESTION TYPE</h4>
                                        <select name="typequestion" id="typequestion">
                                            <option value="Opcionmultiple">Opción multiple</option>
                                            <option value="Escribir">Escribir</option>
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <h4>ANSWER</h4>
                                        <textarea className="input-answer-question-1" rows="4"></textarea>
                                    </div>
                                    <h4>COMPLETION POINTS</h4>
                                    <input className="input-completion-points-question"></input>
                                    <button className="btn-add-question">ADD QUESTION</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="close-btn" onClick={handleClose}>
                            Close
                        </button>
                        <button className="add-section-btn">
                            Add Sections
                        </button>
                    </Modal.Footer>
                </Modal>

                <div className="content-edit-quizes">
                    <div className="head-section-quiz">
                        <div className="column-1-head-section">
                        <h2 className="title-section-manage-course">Add Quiz</h2>
                        <p className="route-section-manage-course"> <a onClick={() => navigate('/default-home')}>Home</a> &gt; <a onClick={() => navigate('/edit-quiz')}>List Quizes</a> &gt; <a>Add Quiz</a></p>
                        </div>
                    </div>
                    <div className="body-section-edit-course">
                        <div className="column-section-1-edit-course">
                            <div className="questions-section-edit-quiz">
                                <h3>QUESTIONS</h3>
                                <div className="list-questions-edit-quiz">
                                    <div className="row-element-list-quiz-1">
                                        <h6>No hay preguntas aún</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="list-btn-quiz">
                                <button className="btn-add-section-edit-course" onClick={handleShow}>Add Question</button>
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
                            <div className="courses-quiz-section-content">
                                <h3>COURSES</h3>
                                <div className="card-course-quiz-edit-quiz">
                                    <h4>ADD TO COURSE</h4>
                                    <input className="input-add-quiz-to-course"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddQuiz