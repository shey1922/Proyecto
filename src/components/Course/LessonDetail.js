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

                {lessonName === "Antes de empezar el curso" ? 
                    <div class="text-content">
                        <h4>Para que tu experiencia de aprendizaje durante el curso sea muy agradable, te invitamos tener en cuenta las siguientes recomendaciones:</h4>
                        <ul>
                            <li className="li-text-content">Luego de desarrollar o ver el recurso mostrado (Video, Podcast o Juego) da clic en SIGUIENTE UNIDAD.</li>
                            <li className="li-text-content">En la parte superior izquierda de la pantalla, podrás observar tu avance del curso.</li>
                            <li className="li-text-content">Crea un clima agradable que te ayude a concentrarte en el estudio. Elige un lugar cómodo, silencioso, que tenga buena iluminación y ventilación.</li>
                            <li className="li-text-content">Organiza bien tu tiempo para que otras actividades no interrumpan tu navegación del curso.</li>
                            <li className="li-text-content">Toma nota de los asuntos que te parezcan más relevantes.</li>
                            <li className="li-text-content">Ten a la mano lo que consideres necesario para favorecer tu aprendizaje según preferencia, por ejemplo, lapicero, cuaderno, aplicación para hacer notas digitales, etc.</li>
                            <li className="li-text-content">Iniciarás con un cuestionario de autoevaluación (PRETEST) en donde podrás medir tus conocimientos, sí los respondes todos acertadamente nos parecería maravilloso, de todas maneras te aseguramos que aprenderás algo diferente y reforzaras tu aprendizaje durante el curso, por otra parte, si no logras contestarlos todos acertadamente, ¡no te preocupes! de eso se trata el proceso de aprendizaje, consolidar el conocimiento de acuerdo a saberes previos (pedagogía constructivista).</li>
                            <li className="li-text-content">Si el curso es de contenido gratuito, NO incluye la constancia de participación (certificado) este es opcional y tendrá un costo, solo si lo deseas. Este se pagaría una vez finalices el curso. SIGUIENTE UNIDAD.</li>
                        </ul>
                    </div> : <div></div>
                }
                {lessonName === "Introducción al curso de atención a víctimas de violenca sexual" ?
                    <div class="text-content">
                        <p className="p-text-content">Para 2EVS es importante escuchar las necesidades de capacitación expresadas por nuestros usuarios, seguidores y amigos, los cuales de manera constante nos solicitaron este contenido, es por esto que hemos creado este curso con la información necesaria y material útil para las personas que lo realicen, todo esto centrados en la legislación vigente para el momento de la elaboración.</p>
                        <p className="p-text-content">En la resolución 3100 de 2019: Por la cual se definen los procedimientos y condiciones de inscripción y habilitación de los prestadores de servicios de salud. Se establece la obligatoriedad de contar la formación en atención de víctimas de violencia sexual por parte de todos los profesionales de la salud que trabajan en la instituciones prestadoras de servicios de salud, y por la responsabilidad social que tenemos como personal salud, en este curso van a encontrar información muy importante para realizar la atención adecuada de este tipo de pacientes, la cual se basa en el Protocolo de Atención Integral en Salud para Víctimas de Violencia Sexual a las instituciones prestadoras de servicios de salud, profesionales y equipos interdisciplinarios como una herramienta de atención integral en salud para las víctimas de violencia sexual, acorde con el “Modelo de Atención Integral en Salud para Víctimas de Violencia Sexual”, adicionalmente se adicionaron algunas ayudas como tablas de dosificación actualizadas, tips, y otras ayudas necesarias para la atención de estas personas.</p>
                        <p className="p-text-content">Inicialmente y como debe ser en este tipo de cursos se muestra un marco legal, seguido de glosario de términos, epidemiología más reciente, para continuar con los pasos del protocolo.</p>
                        <p className="p-text-content">Es importante aclarar que las normas contenidas están actualizadas a febrero de 2020, por lo que es responsabilidad de cada uno verificar la existencia de normas adicionales, o nueva legislación vigente al momento de su aplicación.</p>
                        <p className="p-text-content">Por último, es importante anotar que este es un curso con contenido gratuito, es decir el acceso al desarrollo del mismo es libre, sin embargo no incluye certificación por defecto. En caso que requieras certificado esta tiene un costo adicional que se pagaría una vez finalizado el curso. Esta modalidad nos permitirá seguir ofreciendo contenido de calidad al alcance de muchas personas.</p>
                        <p className="p-text-content">Equipo de 2EVS</p>
                    </div>
                    : <div></div>
                }
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