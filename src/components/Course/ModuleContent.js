import React from 'react'
import SideBarCourse from './SideBarCourse';
import { useNavigate } from "react-router-dom";

function ModuleContent() {
    const navigate = useNavigate();
    const textFromStorage = localStorage.getItem('moduleName');

    const storedModules = JSON.parse(localStorage.getItem("content"));

    console.log(storedModules);

    /*const lecciones= [
        {name: "Lección 1", time: "25 minutos"},
        {name: "Lección 2", time: "10 minutos"},
        {name: "Lección 3", time: "04 minutos"},
        {name: "Lección 4", time: "15 minutos"},
        {name: "Cuestionario: " + textFromStorage, time: "30 minutos"}
    ]*/

    const sendData = (modulesTitle, modulesLink, modulesType, modulesTerms,modulesUrl) => {
        if(modulesType === "quiz") {
            localStorage.setItem("lessonName", modulesTitle);
            navigate('/quiz-detail');
        } else {
            localStorage.setItem("lessonName", modulesTitle);
            localStorage.setItem("lessonVideo", modulesLink);
            localStorage.setItem("videoConfe",modulesUrl)
            localStorage.setItem("termsModule", JSON.stringify(modulesTerms));
            navigate('/lesson-detail');
        }
    }

    
    const leccionesList = storedModules.map(modules =>
        <a className="list-lecciones-content" onClick={() => sendData(modules.title, modules.link, modules.type, modules.terms, modules.url)}>
            <h5>{modules.title}</h5>
            <div className="aux">
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