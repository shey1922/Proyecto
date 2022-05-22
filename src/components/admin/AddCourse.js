import React from 'react'
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import Modal from 'react-bootstrap/Modal'

function AddCourse() {

    const [sectionName, setSectionName] = React.useState("");
    const [leccionName, setLeccionName] = React.useState("");
    const [urlLink, setUrlLink] = React.useState("");

    const [sectionList, setSectionList] = React.useState([]);
    const [leccionList, setLeccionList] = React.useState([]);

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);         
        for(let i = leccionList.length; i > 0; i--){
            leccionList.pop();
        }
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
                        <Modal.Title>Create Sections</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-section">
                        <div className="row">
                            <label>Section Name</label>
                            <input className="input-add-section-modal" placeholder="Section name example" value={sectionName} onChange={(event) => updateSectionName(event)}></input>
                        </div>
                        <div className="add-sections-modal">
                            <div className="column-1">
                                <label>Lecciones: </label>
                                <div className="list-lecciones-modal">
                                    {  (leccionArray.length === 0) ? 
                                        <div className="content-modal-lecciones">
                                            No hay secciones aún
                                        </div> 
                                        : 
                                        leccionArray}
                                </div>
                            </div>
                            <div className="column-2">
                                <div className="input-div">
                                    <label>Leccion name</label>
                                    <input className="input-add-course-modal" placeholder="Leccion name" type="text" value={leccionName} onChange={(event) => updateLeccionName(event)}></input>
                                </div>
                                <div className="input-div">
                                    <label>Url link</label>
                                    <input className="input-add-course-modal" placeholder="Url video" type="text" value={urlLink} onChange={(event) => updateUrlLink(event)}></input>
                                </div>
                                <div className="input-div-btn" onClick={(event) => addLeccion()}>
                                    <button>Add Leccion</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="close-btn" onClick={handleClose}>
                            Close
                        </button>
                        <button className="add-section-btn" onClick={(event) => AddSections()}>
                            Add Sections
                        </button>
                    </Modal.Footer>
                </Modal>

                <div className="content-manage-course">
                    <div className="head-section">
                        <div className="column-1-head-section">
                            <h2 className="title-section-manage-course">Add Courses</h2>
                            <p className="route-section-manage-course">Home &gt; Cursos &gt; Add Course</p>
                        </div>
                    </div>
                    <div className="body-section-edit-course">
                    <div className="column-section-1-edit-course">
                    <div className="basic-info-section-edit-course">
                        <h3>BASIC INFORMATION</h3>
                        <div class="line"></div>
                        <div className="input-element-edit-course">
                            <h4>COURSE TITLE</h4>
                            <input className="input-title-edit-course" type="text" value={courseTitle} onChange={(event) => updateCourseTitle(event)}></input>
                        </div>
                        <div className="input-element-edit-course">
                            <h4>DESCRIPTION</h4>
                            <textarea className="input-text-area-edit-course" rows="4" value={courseDescription} onChange={(event) => updateDescription(event)}></textarea>
                        </div>
                        <div className="input-element-edit-course">
                            <div className="section-modal-add-course column-3">
                                <div className="box-s">
                                    <h4>Hours</h4>
                                    <input className="input-add-course-modal"  value={courseHour} type="number" onChange={(event) => updateHour(event)}></input>
                                </div>
                                <div className="box-s">
                                    <h4>Lecciones</h4>
                                    <input className="input-add-course-modal"  value={courseLessons} type="number" onChange={(event) => updateLessons(event)}></input>
                                </div>
                                <div className="box-s">
                                    <h4>Level</h4>
                                    <select name="typequestion" id="typequestion1" value={courseLevel} onChange={(event) => updateLevel(event)}>
                                        <option value="Beginer">Beginner</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Advanced">Advanced  </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basic-info-section-edit-course">
                        <h3>SECTIONS</h3>
                        {sectionList.length === 0 ? <div></div> : sectionArray}
                        <button className="btn-add-section-edit-course" onClick={handleShow}>Add Section</button>
                    </div>
                    </div>
                    <div className="column-section-2-edit-course">
                    <div className="card-aactions-buttons-edit-course">
                        <div className="head-card-actions-button">
                        <button className="save-changes-btn-edit-course">ADD COURSE</button>
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