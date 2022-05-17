import React from 'react'
import SideBarCourse from './SideBarCourse';
import ReactPlayer from 'react-player';
import Button from 'react-bootstrap/Button';

function LessonDetail() {
    const lessonName = localStorage.getItem('lessonName');
    const lessonVideo = localStorage.getItem('lessonVideo');
    const videoConfe = localStorage.getItem('videoConfe');
    const termsModule = JSON.parse(localStorage.getItem("termsModule"));
    console.log(termsModule);

    const termsList = termsModule.map(ternms =>
        <div class="card-terms">
            <h3>{ternms.title}</h3>
            <p>{ternms.paraph}</p>
            <p>{ternms.parph1}</p>
        </div>
    )

    const buttonVideo = {
        height: "50px",
        width: "330px",
        fontSize: "20px",
        lineHeight: "35px",
        marginTop: "50px",
    }

    return (
        <div className="flex">
            <SideBarCourse />
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
                        ? <div></div>
                        : <div className="module-lesson-content">
                            <ReactPlayer url={lessonVideo} controls={true}></ReactPlayer>
                        </div>
                    }
                </div>
                <div>
                    {videoConfe === "undefined"
                        ? <div></div>
                        : <Button style={buttonVideo} variant="outline-primary" href={videoConfe} target="_blank" rel="noopener noreferrer">Entrar a la video conferencia</Button>}
                </div>
            </div>
        </div>
    )
}

export default LessonDetail