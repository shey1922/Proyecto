import React from 'react'
import SideBarCourse from './SideBarCourse';
import { useNavigate } from "react-router-dom";

function ModuleContent() {
    const navigate = useNavigate();
    const textFromStorage = localStorage.getItem('moduleName');
    const lecciones= [
        {name: "Lección 1", time: "25 minutos"},
        {name: "Lección 2", time: "10 minutos"},
        {name: "Lección 3", time: "04 minutos"},
        {name: "Lección 4", time: "15 minutos"},
        {name: "Cuestionario: " + textFromStorage, time: "30 minutos"}
    ]

    const sendData = (lessonName, lessonTime) => {
        if(lessonName[0] === "C"){
            localStorage.setItem("lessonName", lessonName);
            localStorage.setItem("lessonTime", lessonTime);
            navigate('/quiz-detail');
        }
        else{
            localStorage.setItem("lessonName", lessonName);
            localStorage.setItem("lessonTime", lessonTime);
            navigate('/lesson-detail');
        }
    }
    
    const leccionesList = lecciones.map(leccion =>
        <a className="list-lecciones-content" onClick={() => sendData(leccion.name, leccion.time)}>
            <h5>{leccion.name}</h5>
            <div className="aux">
                <h5>{leccion.time}</h5>
                <i class="fas fa-angle-right i-space fa-3x"></i>
            </div>
        </a>
    )

    return (
        <div className="flex">
            <SideBarCourse/>
            <div className="content-manage-course">
                <div className="head-section-quiz">
                    <div className="column-1-head-section">
                        <h2 className="title-section-manage-course">{textFromStorage}</h2>
                    </div>
                </div>
                    {leccionesList}
            </div>
        </div>
    )
}

export default ModuleContent