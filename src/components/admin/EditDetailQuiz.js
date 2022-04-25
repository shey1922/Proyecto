import React from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import { useNavigate } from "react-router-dom";

function EditDetailQuiz() {

  const navigate = useNavigate();

  return (
    <div className="editdetailquiz">
        <NavBarAdmin></NavBarAdmin>
        <div className="flex">
            <SideBarAdmin></SideBarAdmin>
            <div className="content-edit-quizes">
              <div className="head-section-quiz">
                <div className="column-1-head-section">
                  <h2 className="title-section-manage-course">Edit Quiz</h2>
                  <p className="route-section-manage-course"> <a onClick={() => navigate('/default-home')}>Home</a> &gt; <a onClick={() => navigate('/edit-quiz')}>List Quizes</a> &gt; <a>Add Quiz</a></p>
                </div>
              </div>
              <div className="body-section-edit-course">
                <div className="column-section-1-edit-course">
                  <div className="questions-section-edit-quiz">
                    <h3>QUESTIONS</h3>
                    <div className="list-questions-edit-quiz">
                      <div className="element-list-quiz">
                        <div className="row-element-list-quiz">
                          <div className="column-element-list-quiz-1">
                            <i className="fas fa-bars fa-2x"></i>
                            <h4 className="title-row-element">Questions 1 of 2</h4>
                          </div>
                          <div className="column-element-list-quiz-2">
                            <p className="points-label">800 pt</p>
                            <i class='fa fa-ellipsis-h fa-2x'></i>
                          </div>
                        </div>
                        <div className="content-element-list-quiz">
                          <p>An angular 2 project written in typescript is* transpiled to javascript duri*ng the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?</p>
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
                      <div className="element-list-quiz">
                        <div className="row-element-list-quiz">
                          <div className="column-element-list-quiz-1">
                            <i className="fas fa-bars fa-2x"></i>
                            <h4 className="title-row-element">Questions 1 of 2</h4>
                          </div>
                          <div className="column-element-list-quiz-2">
                            <p className="points-label">800 pt</p>
                            <i class='fa fa-ellipsis-h fa-2x'></i>
                          </div>
                        </div>
                        <div className="content-element-list-quiz">
                          <p>An angular 2 project written in typescript is* transpiled to javascript duri*ng the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?</p>
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
                    </div>
                  </div>
                  <div className="new-question-section-edit-quiz">
                    <h3>NEW QUESTION</h3>
                    <div className="card-new-question">
                      <h4>QUESTION</h4>
                      <textarea className="input-text-area-edit-quiz" rows="4"></textarea>
                      <h4>QUESTION TYPE</h4>
                      <select name="typequestion" id="typequestion">
                        <option value="Type1">Type 1</option>
                        <option value="Type2">Type 2</option>
                        <option value="Type3">Type 3</option>
                      </select>
                      <h4>ANSWERS</h4>
                      <input className="input-answer-question"></input>
                      <h4>COMPLETION POINTS</h4>
                      <input className="input-completion-points-question"></input>
                      <button className="btn-add-question">ADD QUESTION</button>
                    </div>
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
  );
}

export default EditDetailQuiz