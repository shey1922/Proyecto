import React from 'react'
import SideBarCourse from './SideBarCourse';

function ResultQuiz() {
const result = localStorage.getItem('notaExamen');
  return (
    <div className="flex">
        <SideBarCourse/>
        <div className="content-manage-course">
            <h2 className="title-section-quiz-detail">RESULTADO DEL EXAMEN: {result}</h2>
            <div>
            </div>
        </div>
    </div>
  )
}

export default ResultQuiz