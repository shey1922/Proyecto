import React, { useState } from 'react'
import SideBarCourse from './SideBarCourse';
import exams from '../../data/exam';
import swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function QuizDetail() {

    const navigate = useNavigate();
    const [auxAnswer, setaAuxAnswer] = useState(0);
    const [auxLenghtAnswers, setAuxLenghtAnswers] = useState(0);
    const textFromStorage = localStorage.getItem('lessonName');
    var questions1 = [];
    var correctAnswers = [];

    const[array,setArray]= useState([
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
        {id: 5, value: 0},
        {id: 6, value: 0},
        {id: 7, value: 0},
        {id: 8, value: 0},
        {id: 9, value: 0},
        {id: 10, value: 0},
    ])

    const updateItem =(id, whichvalue, newvalue)=> {
        var index = array.findIndex(x=> x.id === id);

        let g = array[index]
        g[whichvalue] = newvalue
        if (index === -1){
            // handle error
            console.log('no match')
        }
        else
            setArray([
                ...array.slice(0,index),
                g,
                ...array.slice(index+1)
                ]
            );
    }

    if(textFromStorage === "Pretest – Atención Integral a Víctimas de Violencia Sexual"){
        questions1 = [...exams[0].questions];
        for(var i = 0; i < questions1.length; i++) {
            correctAnswers.push(questions1[i].correct);
        }
    } else{
        questions1 = [...exams[1].questions];
        for(var l = 0; l < questions1.length; l++) {
            correctAnswers.push(questions1[l].correct);
        }
    }

    const assignAnswer = (value, idQuiz) => {
        console.log(array);
        updateItem(idQuiz, "value", value);
        console.log(correctAnswers);
        setaAuxAnswer(value);
    }

    const validateAnswer = (correct, idQuestion) => {
        if(array[idQuestion-1].value === 0){
            swal.fire('Seleccine una respuesta!', '', 'error');
        } else if(auxAnswer === correct){
            console.log("CORRECTO")
            swal.fire('Respuesta Guardada', '', 'success');
            setAuxLenghtAnswers(auxLenghtAnswers + 1);
        } else {
            console.log("INCORRECTO")
            swal.fire('Respuesta Guardada', '', 'success');
            setAuxLenghtAnswers(auxLenghtAnswers + 1);
        }
    }

    const sendQuiz = () => {
        let count = 0;
        for(var u = 0; u < questions1.length; u++) {
            if(array[u].value === 0 ){
                swal.fire('Falta completar algunas respuestas!', '', 'error');
                break;
            }
            else{
                swal.fire('Cuestionario Enviado!', '', 'success');
                if(array[u].value === correctAnswers[u]){
                    count +=2;
                }
            }
        }
        var aux = 0; 
        for(var b = 0; b < questions1.length; b++) {
            if(array[b].value === 0 ){
                console.log("a");
                break;
            }
            else{
                aux+=1;
            }
        }
        if(aux === 10){
            localStorage.setItem("notaExamen", count);
            navigate('/result-quiz');
        }
    }

    const questionsList = questions1.map(question =>
        <div className="card-question">
            <div className="header-card-question">
                <h4>Pregunta {question.id}</h4>
                <h4>Puntos: 2</h4>
            </div>
            <div className="content-question">
                <h5>{question.question}</h5>
                {question.answers.map(answer =>
                    <div>
                        <label className="row-content-question" onChange={(event) => assignAnswer(answer.id, question.id)}>
                            <input type="radio" name={question.id}></input>
                            <h4>{answer.valor}</h4>
                        </label>
                    </div>
                )}
            </div>
            <div className="footer-card-question">
                <button className="save-answer" onClick={(event) => validateAnswer(question.correct, question.id)}>Guardar</button>
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
                        <h4>Respuestas contestadas: {auxLenghtAnswers}/{questions1.length}</h4>
                    </div>
                    <div className="right">
                        <button className="cancel">Cancelar</button>
                        <button className="sendQuiz" onClick={(event) => sendQuiz()}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizDetail