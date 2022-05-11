import React from 'react'
import SideBarCourse from './SideBarCourse';
import ReactPlayer from 'react-player';

function LessonDetail() {
    const lessonName = localStorage.getItem('lessonName');
    const lessonVideo = localStorage.getItem('lessonVideo');
    const termsModule = JSON.parse(localStorage.getItem("termsModule"));
    console.log(termsModule);

    const termsList = termsModule.map(ternms => 
        <div class="card-terms">
            <h3>{ternms.title}</h3>
            <p>{ternms.paraph}</p>
            <p>{ternms.parph1}</p>
        </div>    
    )

    return (
        <div className="flex">
            <SideBarCourse/>
            <div className="content-manage-course">
                <div className="head-section">
                    <div className="column-1-head-section">
                        <h2 className="title-section-manage-course-lesson">{lessonName}</h2>
                        <p className="route-section-manage-course">Home &gt; Cursos &gt; Modulo 1 &gt; {lessonName} </p>
                    </div>
                </div>
                {lessonName === "Terminología en violencia sexual" ? 
                    termsList : 
                    <div></div>}
                <div>
                    {lessonVideo === "undefined"
                        ?   <div></div>
                        :   <div className="module-lesson-content">
                                <ReactPlayer url={lessonVideo} controls={true}></ReactPlayer>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default LessonDetail