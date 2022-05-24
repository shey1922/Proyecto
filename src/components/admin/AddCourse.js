import React from 'react';
import { API } from 'aws-amplify';
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import Modal from 'react-bootstrap/Modal';
import { Alert } from '@mui/material';
import swal from 'sweetalert2';

function AddCourse() {

    const userId = localStorage.getItem('userId');

    const [showAlert, setShowAlert] = React.useState(false);
    const [showAlertComponent, setShowAlertComponent]  = React.useState(false);

    const [sectionName, setSectionName] = React.useState("");
    const [leccionName, setLeccionName] = React.useState("");
    const [urlLink, setUrlLink] = React.useState("");

    const [sectionList, setSectionList] = React.useState([]);
    const [leccionList, setLeccionList] = React.useState([]);

    const [show, setShow] = React.useState(false);

    const handleShowAlert = () => setShowAlert(true);
    const handleCloseAlert = () => setShowAlert(false);

    const handleShowAlertComponent = () => setShowAlertComponent(true);
    const handleCloseAlertComponent = () => setShowAlertComponent(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setSectionName("");   
        for(let i = leccionList.length; i > 0; i--){
            leccionList.pop();
        }
        handleCloseAlert();
        console.log(sectionList);
    }

    const courseTitleFS = localStorage.getItem("ACcourseTitle");
    const courseDescriptionFS = localStorage.getItem("ACcourseDescription");
    const courseHourFS = localStorage.getItem("ACcourseHour");
    const courseLessonsFS = localStorage.getItem("ACcourseLessons");
    const courseLevelFS = localStorage.getItem("ACcourseLevel");

    const [courseTitle, setCourseTitle] = React.useState(courseTitleFS);
    const [courseDescription, setDescription] = React.useState(courseDescriptionFS);
    const [courseHour, setCourseHour] = React.useState(courseHourFS );
    const [courseLessons, setLessons] = React.useState(courseLessonsFS);
    const [courseLevel, setLevel] = React.useState(courseLevelFS);

    const updateCourseTitle = (event) => {
        setCourseTitle(event.target.value)
    }

    const updateDescription = (event) => {
        setDescription(event.target.value)
    }

    const updateHour = (event) => {
        setCourseHour(event.target.value)
    }

    const updateLessons = (event) => {
        setLessons(event.target.value)
    }

    const updateLevel = (event) => {
        setLevel(event.target.value)
    }

    const updateLeccionName = (event) => {
        setLeccionName(event.target.value)
    }

    const updateSectionName = (event) => {
        setSectionName(event.target.value)
    }

    const updateUrlLink = (event) => {
        setUrlLink(event.target.value)
    }
    
    const addLeccion = () => {
        setLeccionList([...leccionList,{title: leccionName, url: urlLink}]);
        setLeccionName("");
        setUrlLink("");
        console.log(leccionList);
    }

    const AddSections = () => {
        if(sectionName === ""){
            handleShowAlert();
        } else {
            setSectionList([...sectionList, {
                title: sectionName, 
                lecciones: leccionList
            }]);
            setSectionName("");
            setLeccionName("");
            setUrlLink("");
            console.log(sectionName);
            console.log(sectionList);
            handleClose();
        }
        
    }

    const PostCourse = () => {

        swal.fire({
            icon: 'question',
            title: '¿Está seguro de crear el curso: ' + courseTitle + ' ?',
            showDenyButton: true,
            confirmButtonText: 'Crear',
            denyButtonText: `Cacnelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                if(courseTitle === ""){
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>'
                      })
                } else {
                    if (sectionList.length === 0){
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href="">Why do I have this issue?</a>'
                        })
                    }
                    else {
                        API.post('WebcsAPI', '/courses', {
                            body: {
                                topic: courseTitle,
                                createdBy: userId
                            }
                        }).then(r => console.log(r))
                        .catch(console.error);
                    }
                }
                

            } else if (result.isDenied) {
              swal.fire('Los cambios no han sido guardado', '', 'info')
            }
          })


        
    }

    const leccionArray = leccionList.map(leccion => 
        <div className="modal-container">
            <div className="row-1">
                <h5>{leccion.title}</h5>
                <h6>{leccion.url}</h6>
            </div>
            <button className="row-2">
                <i className="fas fa-times" />
            </button>
        </div>    
    )

    const sectionArray = sectionList.map(section => 
        <div className="card-section-list">
            <div className="row-1">
                <h4>{section.title}</h4>
                <i className="fas fa-arrow-down"></i>
            </div>
            {/*<div className="row-2">
                {section.lecciones.map(leccion =>
                    <div> - {leccion.title}</div>
                )}
                </div>*/}
        </div>
        
    )

    return (
        <div>
            <NavBarAdmin></NavBarAdmin>
            <div className="flex">
                <SideBarAdmin></SideBarAdmin>

                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Crear Módulo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-section">
                        { 
                            (showAlert === false) ? <div></div>: 
                            <Alert severity="error">
                                <h5>Falta completar datos!</h5>
                            </Alert>
                        }
                        <div className="row">
                            <label>Nombre del Módulo</label>
                            <input className="input-add-section-modal" placeholder="Section name example" value={sectionName} onChange={(event) => updateSectionName(event)}></input>
                        </div>
                        <div className="add-sections-modal">
                            <div className="column-1">
                                <label>Lecciones: </label>
                                <div className="list-lecciones-modal">
                                    {  (leccionArray.length === 0) ? 
                                        <div className="content-modal-lecciones">
                                            No hay lecciones aún
                                        </div> 
                                        : 
                                        leccionArray}
                                </div>
                            </div>
                            <div className="column-2">
                                <div className="input-div">
                                    <label>Nombre de la lección</label>
                                    <input className="input-add-course-modal" placeholder="Leccion name" type="text" value={leccionName} onChange={(event) => updateLeccionName(event)}></input>
                                </div>
                                <div className="input-div">
                                    <label>Url link</label>
                                    <input className="input-add-course-modal" placeholder="Url video" type="text" value={urlLink} onChange={(event) => updateUrlLink(event)}></input>
                                </div>
                                <div className="input-div-btn" onClick={(event) => addLeccion()}>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="close-btn" onClick={handleClose}>
                            Cancelar
                        </button>
                        <button className="add-section-btn" onClick={(event) => AddSections()}>
                            Crear Módulo
                        </button>
                    </Modal.Footer>
                </Modal>

                <div className="content-manage-course">
                    <div className="head-section">
                        <div className="column-1-head-section">
                            <h2 className="title-section-manage-course">Agregar Cursos</h2>
                            <p className="route-section-manage-course">Home &gt; Administrar Cursos &gt; Agregar Cursos</p>
                        </div>
                    </div>
                    <div className="body-section-edit-course">
                    <div className="column-section-1-edit-course">
                    <div className="basic-info-section-edit-course">
                        <h3>INFORMACIÓN BÁSICA</h3>
                        <div class="line"></div>
                        <div className="input-element-edit-course">
                            <h4>TITULO DEL CURSO</h4>
                            <input className="input-title-edit-course" type="text" value={courseTitle} onChange={(event) => updateCourseTitle(event)}></input>
                        </div>
                        <div className="input-element-edit-course">
                            <h4>DESCRIPCIÓN</h4>
                            <textarea className="input-text-area-edit-course" rows="4" value={courseDescription} onChange={(event) => updateDescription(event)}></textarea>
                        </div>
                        <div className="input-element-edit-course">
                            <div className="section-modal-add-course column-3">
                                <div className="box-s">
                                    <h4>HORAS</h4>
                                    <input className="input-add-course-modal"  value={courseHour} type="number" onChange={(event) => updateHour(event)}></input>
                                </div>
                                <div className="box-s">
                                    <h4>LECCIONES</h4>
                                    <input className="input-add-course-modal"  value={courseLessons} type="number" onChange={(event) => updateLessons(event)}></input>
                                </div>
                                <div className="box-s">
                                    <h4>NIVEL</h4>
                                    <select name="typequestion" id="typequestion1" value={courseLevel} onChange={(event) => updateLevel(event)}>
                                        <option value="Beginer">Principiante</option>
                                        <option value="Medium">Medio</option>
                                        <option value="Advanced">Avanzado</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basic-info-section-edit-course">
                        <h3>MÓDULOS</h3>
                        {sectionList.length === 0 ? <div></div> : sectionArray}
                        <button className="btn-add-section-edit-course" onClick={handleShow}>AGREGAR MÓDULO</button>
                    </div>
                    </div>
                    <div className="column-section-2-edit-course">
                    <div className="card-aactions-buttons-edit-course">
                        <div className="head-card-actions-button">
                        <button className="save-changes-btn-edit-course" onClick={PostCourse}>CREAR CURSO</button>
                        </div>
                        <div className="bottom-card-actions-button">
                            <a className="cnl">Cancel</a>
                        </div>
                    </div>
                    <div className="section-video-edit-course">
                        <h3>PRESENTATION VIDEO</h3>
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
  )
}

export default AddCourse