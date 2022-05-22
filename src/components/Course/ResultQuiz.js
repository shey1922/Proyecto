import React from 'react'
import SideBarCourse from './SideBarCourse';

function ResultQuiz() {
  const result = localStorage.getItem('notaExamen');
  const storedAnswers = JSON.parse(localStorage.getItem("answers"));
  const correctAnswers = JSON.parse(localStorage.getItem("correctAnswers"));
  const questions = JSON.parse(localStorage.getItem("questions"));
  console.log(storedAnswers);
  console.log(correctAnswers);
  console.log(questions);
  
  const questionsList = questions.map(question =>
    <div className="card-question">
        <div className="header-card-question">
            <h4>Pregunta {question.id}</h4>
        </div>
        <div className="content-question">
          {question.question}
        </div>
    </div>
  )


  return (
    <div className="flex">
        <SideBarCourse/>
        <div className="content-manage-course">
            <h2 className="title-section-quiz-detail">RESULTADO DEL EXAMEN: {result}</h2>
            <div>
              {questionsList}
            </div>
        </div>
    </div>
  )
}

export default ResultQuiz