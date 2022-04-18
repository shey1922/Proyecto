import React from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";

function ManageQuiz() {
  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="flex">
        <SideBarAdmin></SideBarAdmin>
        <div className="content-manage-course">
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
                  <button className="prefix-btn">
                    <i class='fa fa-ellipsis-h'></i>
                  </button>
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
                  <button className="prefix-btn">
                    <i class='fa fa-ellipsis-h'></i>
                  </button>
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
                  <button className="prefix-btn">
                    <i class='fa fa-ellipsis-h'></i>
                  </button>
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
                  <button className="prefix-btn">
                    <i class='fa fa-ellipsis-h'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="list-quizes">
            <div className="item-list-quiz-row">
              <div className="column-1-elements-item">
                <div className="img-ref-item-list-quiiz"></div>
                <h3>Item Name Quiz</h3>
              </div>
              <div className="column-1-elements-item">
                <p>COMPLETED</p>
                <div>15</div>
                <button className="prefix-btn">
                  <i class='fa fa-ellipsis-v'></i>
                </button>
              </div>
            </div>
            <div className="item-list-quiz-row">
              <div className="column-1-elements-item">
                <div className="img-ref-item-list-quiiz"></div>
                <h3>Item Name Quiz</h3>
              </div>
              <div className="column-1-elements-item">
                <p>COMPLETED</p>
                <div>15</div>
                <button className="prefix-btn">
                    <i class='fa fa-ellipsis-v '></i>
                  </button>
              </div>
            </div>
            <div className="item-list-quiz-row">
              <div className="column-1-elements-item">
                <div className="img-ref-item-list-quiiz"></div>
                <h3>Item Name Quiz</h3>
              </div>
              <div className="column-1-elements-item">
                <p>COMPLETED</p>
                <div>15</div>
                <button className="prefix-btn">
                    <i class='fa fa-ellipsis-v'></i>
                  </button>
              </div>
            </div>
            <div className="item-list-quiz-row">
              <div className="column-1-elements-item">
                <div className="img-ref-item-list-quiiz"></div>
                <h3>Item Name Quiz</h3>
              </div>
              <div className="column-1-elements-item">
                <p>COMPLETED</p>
                <div>15</div>
                <button className="prefix-btn">
                    <i class='fa fa-ellipsis-v'></i>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageQuiz