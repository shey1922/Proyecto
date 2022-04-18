import React from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import * as ReactBoostrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EditCourse() {

  const navigate = useNavigate();

  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="flex">
        <SideBarAdmin></SideBarAdmin>
        <div className="content-edit-quizes">
          <div className="head-section-quiz">
              <div className="column-1-head-section">
                <h2 className="title-section-manage-course">List Courses</h2>
                <p className="route-section-manage-course">Home &gt; List Courses </p>
              </div>
              <div className="column-2-head-section">
                <i class='fa fa-ellipsis-v fa-2x'></i>
              </div>
            </div>
          <div className="content-table">
            <ReactBoostrap.Table responsive bordered hover className="table-quiz">
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
                <td>Course Name 1</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-course')}>
                    <i className="fas fa-pen" ></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz">
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Course Name 2</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-course')}>
                    <i className="fas fa-pen" ></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz">
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Course Name 3</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-course')}>
                    <i className="fas fa-pen" ></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz">
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Course Name 4</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-course')}>
                    <i className="fas fa-pen" ></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz">
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Course Name 5</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-course')}>
                    <i className="fas fa-pen" ></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz">
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Course Name 6</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-course')}>
                    <i className="fas fa-pen" ></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz">
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Course Name 7</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-course')}>
                    <i className="fas fa-pen" ></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz">
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

export default EditCourse