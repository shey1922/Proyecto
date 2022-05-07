import React from 'react'
import SideBarCourse from './SideBarCourse';
import exams from '../../data/exam';

function QuizDetail() {

    const textFromStorage = localStorage.getItem('lessonName');
    var questions1 = [];
    if(textFromStorage === "Pretest – Atención Integral a Víctimas de Violencia Sexual"){
        questions1 = [...exams[0].questions];
    } else{
        questions1 = [...exams[1].questions];
    }
    console.log(questions1);

    /*const questions = [
        {
            quizNumber: "1", 
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
            answer1: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer3: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer4: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            points: "03"
        },
        {
            quizNumber: "2", 
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
            answer1: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer3: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer4: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            points: "02"
        },
        {
            quizNumber: "3", 
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
            answer1: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer3: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer4: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            points: "05"
        },
        {
            quizNumber: "4", 
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
            answer1: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer3: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer4: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            points: "05"
        },
        {
            quizNumber: "5", 
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
            answer1: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer3: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            answer4: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
            points: "05"
        }
    ]*/

    /*const questionsList = questions.map(question =>
        <div className="card-question">
            <div className="header-card-question">
                <h4>Pregunta {question.quizNumber}</h4>
                <h4>Puntos: {question.points}</h4>
            </div>
            <div className="content-question">
                <h5>{question.question}</h5>
                <p><i className="fas fa-check-square icon-quiz"></i>{question.answer1}</p>
                <p><i className="fas fa-check-square icon-quiz"></i>{question.answer2}</p>
                <p><i className="fas fa-check-square icon-quiz"></i>{question.answer3}</p>
                <p><i className="fas fa-check-square icon-quiz"></i>{question.answer4}</p>
            </div>
            <div className="footer-card-question">
                <button className="save-answer">Guardar</button>
            </div>
        </div>
    )*/

    const questionsList = questions1.map(question =>
        <div className="card-question">
            <div className="header-card-question">
                <h4>Pregunta {question.id}</h4>
                <h4>Puntos: 2</h4>
            </div>
            <div className="content-question">
                <h5>{question.question}</h5>
                {question.answers.map(answer => 
                    <p><i className="fas fa-check-square icon-quiz"></i>{answer.valor}</p>
                )}
            </div>
            <div className="footer-card-question">
                <button className="save-answer">Guardar</button>
            </div>
        </div>
    )

    return (
        <div className="flex">
            <SideBarCourse/>
            <div className="content-manage-course">
                <h2 className="title-section-quiz-detail">{textFromStorage}</h2>
                {questionsList}
                <div className="footer-content-quiz-detail">
                    <div>
                        <h4>Respuestas contestadas: 5/5</h4>
                    </div>
                    <div className="right">
                        <button className="cancel">Cancelar</button>
                        <button className="sendQuiz">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizDetail