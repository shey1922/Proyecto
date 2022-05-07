import React from 'react'
import SideBarCourse from './SideBarCourse';
import { useNavigate } from "react-router-dom";

function ModuleContent() {
    const navigate = useNavigate();
    const textFromStorage = localStorage.getItem('moduleName');

    const storedModules = JSON.parse(localStorage.getItem("content"));

    const sendData = (modulesTitle, modulesLink) => {
        localStorage.setItem("lessonName", modulesTitle);
        localStorage.setItem("lessonVideo", modulesLink);
        navigate('/lesson-detail');
    }
    
    const leccionesList = storedModules.map(modules =>
        <a className="list-lecciones-content" onClick={() => sendData(modules.title, modules.link)}>
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