import React from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert2';

function ManageQuiz() {
  const navigate = useNavigate();

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
              <button className="btn-add-course">ADD QUIZ</button>
            </div>
          </div>
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