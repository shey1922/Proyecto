import { Link } from "react-router-dom";
import React from "react";
import modules from "../../data/modules";

function SideBarCourse() {

    // const modules = [
    //     {
    //         name: "Preliminares",
    //         lecciones: [
    //             {lecciones: "Antes de empezar el curso"},
    //             {lecciones: "Introducción al curso"},
    //         ]
    //     },
    //     {
    //         name: "Modulo 1",
    //         lecciones: [
    //             {lecciones: "leccion 1"},
    //             {lecciones: "leccion 2"},
    //             {lecciones: "leccion 3"},
    //             {lecciones: "leccion 4"},
    //         ]
    //     },
    //     {
    //         name: "Modulo 2",
    //         lecciones: [
    //             {lecciones: "leccion 1"},
    //             {lecciones: "leccion 2"},
    //             {lecciones: "leccion 3"},
    //             {lecciones: "leccion 4"},
    //         ]
    //     },
    //     {
    //         name: "Modulo 3",
    //         lecciones: [
    //             {lecciones: "leccion 1"},
    //             {lecciones: "leccion 2"},
    //             {lecciones: "leccion 3"},
    //             {lecciones: "leccion 4"},
    //         ]
    //     },
    //     {
    //         name: "Modulo 4",
    //         lecciones: [
    //             {lecciones: "leccion 1"},
    //             {lecciones: "leccion 2"},
    //             {lecciones: "leccion 3"},
    //             {lecciones: "leccion 4"},
    //         ]
    //     },
    //     {
    //         name: "Modulo 5",
    //         lecciones: [
    //             {lecciones: "leccion 1"},
    //             {lecciones: "leccion 2"},
    //             {lecciones: "leccion 3"},
    //             {lecciones: "leccion 4"},
    //         ]
    //     },
    // ]
     
    const sendData = (moduleName, content) => {
        console.log("a");
        localStorage.setItem("moduleName", moduleName);
        localStorage.setItem("content", JSON.stringify(content));
    }

    const moduleList = modules.map(module =>  
        <ul className="listsidebarcourse" key={module.id}>
            <li className="elementsidebarcourse">
                <Link to="/module-content" class="btn-text-sc" 
                onClick={()=>sendData(module.name, module.content)}>
                    {module.name}
                    <i class="fas fa-angle-right i-space"></i>
                </Link>
            </li>
        </ul>
      )


    return (
        <div className="sidebarcourse">
            <div className="head-sidebar">
                <h3 class="side-title">
                    Curso atención integral a víctimas de violencia sexual
                </h3>
                <h5 class="side-p">
                    Tiempo restante : 2 meses, 3 semanas
                </h5>
            </div>
            {moduleList}
            <div className="footer-sidebar">
                <button className="btn-footer-sidebar">VOLVER AL CURSO</button>
                <div></div>
                <button className="btn-footer-sidebar">VALORACIÓN DEL CURSO</button>
            </div>
        </div>
    );
}

export default SideBarCourse