import React from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function EditDetailCourse() {
  
  const navigate = useNavigate();

  const deleteQuiz = () => {
    swal.fire({
      title: 'Do you want to delete the Quiz: "Quiz 1"?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('Quiz Deleted!', '', 'success').then((result) => {
          window.location.reload(false);
        });
      }
    });
  }

  return (
    <div className="editdetailcourse">
        <NavBarAdmin></NavBarAdmin>
        <div className="flex">
            <SideBarAdmin></SideBarAdmin>
            <div className="content-edit-quizes">
              <div className="content-manage-course">
                <div className="head-section">
                  <div className="column-1-head-section">
                    <h2 className="title-section-manage-course">Courses</h2>
                    <p className="route-section-manage-course"> <a>Home</a> &gt; <a onClick={() => navigate('/edit-course')}>List Courses</a> &gt; <a>Add Course</a></p>
                  </div>
                </div>
              </div>
              <div className="body-section-edit-course">
                <div className="column-section-1-edit-course">
                  <div className="basic-info-section-edit-course">
                    <h3>BASIC INFORMATION</h3>
                    <div class="line"></div>
                    <div className="input-element-edit-course">
                      <h4>COURSE TITLE</h4>
                      <input className="input-title-edit-course"></input>
                    </div>
                    <div className="input-element-edit-course">
                      <h4>DESCRIPTION</h4>
                      <textarea className="input-text-area-edit-course" rows="4"></textarea>
                    </div>
                  </div>
                  <div className="basic-info-section-edit-course">
                    <h3>SECTIONS</h3>
                    <div className="open-div-section-item">
                      <h4>Section 1 of this course</h4>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                    <div className="open-div-section-item">
                      <h4>Section 2 of this course</h4>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                    <div className="open-div-section-item">
                      <h4>Section 3 of this course</h4>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                    <div className="open-div-section-item">
                      <h4>Section 4 of this course</h4>
                      <i className="fas fa-arrow-down"></i>
                    </div>
                    <button className="btn-add-section-edit-course">Add Section</button>
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
                      <a className="a-delete" onClick={()=>deleteQuiz()}>
                        <h4>Delete Course</h4>
                      </a>
                    </div>
                  </div>
                  <div className="section-video-edit-course">
                    <h3>VIDEO</h3>
                    <div className="src-video-example">
                      <div className="video-resource"></div>
                      <div className="bottom-section-video-src">
                        <h4>URL</h4>
                        <input className="input-url-video"></input>
                        <p>Enter a valid video URL</p>
                      </div>
                    </div>
                  </div>
                  <div className="options-edit-course">
                    <h3>OPTIONS</h3>
                    <div className="card-option-edit-course">
                      <h4>CATEGORY</h4>
                      <select name="cateryCourse" id="categories">
                        <option value="Category1">Category 1</option>
                        <option value="Category2">Category 2</option>
                        <option value="Category3">Category 3</option>
                        <option value="Category4">Category 4</option>
                      </select>
                      <h4>PRICE</h4>
                      <input classname="input-type-number-edit-course" type="number" placeholder="0.00"></input>
                      <h4>TAGS</h4>
                      <input type="text" className="tags-category"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default EditDetailCourse