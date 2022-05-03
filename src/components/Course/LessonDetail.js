import React from 'react'
import SideBarCourse from './SideBarCourse';

function LessonDetail() {
    const lessonName = localStorage.getItem('lessonName');
    const lessonTime = localStorage.getItem('lessonTime');
    return (
        <div className="flex">
            <SideBarCourse/>
            <div className="content-manage-course">
                <div className="head-section">
                    <div className="column-1-head-section">
                        <h2 className="title-section-manage-course">{lessonName}</h2>
                        <p className="route-section-manage-course">Home &gt; Cursos &gt; Modulo 1 &gt; {lessonName} </p>
                    </div>
                </div>
                <div className="module-lesson-content">
                    <h5 className="title">
                        Atención integral - Claves para la atención a mujeres víctimas de violencia
                    </h5>
                    <h5 className="subtitle"> Tiempo: {lessonTime}</h5>
                    <div className="video-ejm-container">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LessonDetail