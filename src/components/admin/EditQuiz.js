import React from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import * as ReactBoostrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert2';

function EditQuiz() {

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
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="flex">
        <SideBarAdmin></SideBarAdmin>
        <div className="content-edit-quizes">
          <div className="head-section-quiz">
            <div className="column-1-head-section">
              <h2 className="title-section-manage-course">List Quizes</h2>
              <p className="route-section-manage-course">Home &gt; List Quizes </p>
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
                <th>Quiz Name</th>
                <th>Participants</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Title Quiz 1</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-quiz')}>
                    <i className="fas fa-pen"></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz" onClick={()=>deleteQuiz()}>
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Title Quiz 2</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-quiz')}>
                    <i className="fas fa-pen"></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz" onClick={()=>deleteQuiz()}>
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Title Quiz 3</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-quiz')}>
                    <i className="fas fa-pen"></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz" onClick={()=>deleteQuiz()}>
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Title Quiz 4</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-quiz')}>
                    <i className="fas fa-pen"></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz" onClick={()=>deleteQuiz()}>
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Title Quiz 5</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-quiz')}>
                    <i className="fas fa-pen"></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz" onClick={()=>deleteQuiz()}>
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Title Quiz 6</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-quiz')}>
                    <i className="fas fa-pen"></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz" onClick={()=>deleteQuiz()}>
                    <i className="fas fa-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Title Quiz 7</td>
                <td>15</td>
                <td className="td-row">
                  <button className="edit-button-edit-quiz" onClick={() => navigate('/edit-detail-quiz')}>
                    <i className="fas fa-pen"></i>
                    Edit
                  </button>
                  <button className="delete-button-edit-quiz" onClick={()=>deleteQuiz()}>
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

export default EditQuiz