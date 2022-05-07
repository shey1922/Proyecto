import React from 'react'
import SideBarCourse from './SideBarCourse';

function LessonDetail() {
    const lessonName = localStorage.getItem('lessonName');
    const lessonVideo = localStorage.getItem('lessonVideo');
    console.log(lessonVideo);
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
                    <iframe
                        width="853"
                        height="480"
                        src={`${lessonVideo}`}
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    />{" "}
                </div>
            </div>
        </div>
    )
}

export default LessonDetail