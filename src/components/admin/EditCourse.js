import React from "react";
import NavBarAdmin from "./NavBarAdmin";
import SideBarAdmin from "./SideBar";
import * as ReactBoostrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

function EditCourse() {
  const navigate = useNavigate();

  const deleteCourse = () => {
    swal
      .fire({
        title: 'Do you want to delete the Course: "Course 1"?',
        showCancelButton: true,
        confirmButtonText: "Delete",
      })
      .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          swal.fire("Course Deleted!", "", "success").then((result) => {
            window.location.reload(false);
          });
        }
      });
  };

  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="flex">
        <SideBarAdmin></SideBarAdmin>
        <div className="content-edit-quizes">
          <div className="head-section-quiz">
            <div className="column-1-head-section">
              <h2 className="title-section-manage-course">List Courses</h2>
              <p className="route-section-manage-course">
                Home &gt; List Courses{" "}
              </p>
            </div>
            <div className="column-2-head-section">
              <i class="fa fa-ellipsis-v fa-2x"></i>
            </div>
          </div>
          <div className="content-table">
            <ReactBoostrap.Table
              responsive
              bordered
              hover
              className="table-quiz"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Course Name</th>
                  <th>Students</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Curso atención integral</td>
                  <td>15</td>
                  <td className="td-row">
                    <button
                      className="edit-button-edit-quiz"
                      onClick={() => navigate("/edit-detail-course")}
                    >
                      <i className="fas fa-pen"></i>
                      Edit
                    </button>
                    <button
                      className="delete-button-edit-quiz"
                      onClick={() => deleteCourse()}
                    >
                      <i className="fas fa-trash"></i>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Course 02</td>
                  <td>15</td>
                  <td className="td-row">
                    <button
                      className="edit-button-edit-quiz"
                      onClick={() => navigate("/edit-detail-course")}
                    >
                      <i className="fas fa-pen"></i>
                      Edit
                    </button>
                    <button
                      className="delete-button-edit-quiz"
                      onClick={() => deleteCourse()}
                    >
                      <i className="fas fa-trash"></i>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Course 03</td>
                  <td>15</td>
                  <td className="td-row">
                    <button
                      className="edit-button-edit-quiz"
                      onClick={() => navigate("/edit-detail-course")}
                    >
                      <i className="fas fa-pen"></i>
                      Edit
                    </button>
                    <button
                      className="delete-button-edit-quiz"
                      onClick={() => deleteCourse()}
                    >
                      <i className="fas fa-trash"></i>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Course 04</td>
                  <td>15</td>
                  <td className="td-row">
                    <button
                      className="edit-button-edit-quiz"
                      onClick={() => navigate("/edit-detail-course")}
                    >
                      <i className="fas fa-pen"></i>
                      Edit
                    </button>
                    <button
                      className="delete-button-edit-quiz"
                      onClick={() => deleteCourse()}
                    >
                      <i className="fas fa-trash"></i>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Course 05</td>
                  <td>15</td>
                  <td className="td-row">
                    <button
                      className="edit-button-edit-quiz"
                      onClick={() => navigate("/edit-detail-course")}
                    >
                      <i className="fas fa-pen"></i>
                      Edit
                    </button>
                    <button
                      className="delete-button-edit-quiz"
                      onClick={() => deleteCourse()}
                    >
                      <i className="fas fa-trash"></i>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Course 06</td>
                  <td>15</td>
                  <td className="td-row">
                    <button
                      className="edit-button-edit-quiz"
                      onClick={() => navigate("/edit-detail-course")}
                    >
                      <i className="fas fa-pen"></i>
                      Edit
                    </button>
                    <button
                      className="delete-button-edit-quiz"
                      onClick={() => deleteCourse()}
                    >
                      <i className="fas fa-trash"></i>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Course 07</td>
                  <td>15</td>
                  <td className="td-row">
                    <button
                      className="edit-button-edit-quiz"
                      onClick={() => navigate("/edit-detail-course")}
                    >
                      <i className="fas fa-pen"></i>
                      Edit
                    </button>
                    <button
                      className="delete-button-edit-quiz"
                      onClick={() => deleteCourse()}
                    >
                      <i className="fas fa-trash"></i>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </ReactBoostrap.Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCourse;
