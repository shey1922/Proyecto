import { Link } from "react-router-dom";
import { API } from 'aws-amplify';
import React, { useEffect, useState } from "react";
import modules from "../../data/modules";
import { ProgressBar } from 'react-bootstrap'

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
                    onClick={() => sendData(module.name, module.content)}>
                    {module.name}
                    <i class="fas fa-angle-right i-space"></i>
                </Link>
            </li>
        </ul>
    )
    const now = 80;
    const progressBar = {
        height: '12px',
        fontSize: '12px',
        color: '#224bcf',
        borderRadius: '0px',
        marginLeft: '2px',
        marginRight: '25px',
        marginTop: '15px',
    };

    return (
        <div className="sidebarcourse">
            <div className="head-sidebar">
                <h3 class="side-title">
                    Curso atención integral a víctimas de violencia sexual
                </h3>
                <div class="side-p">
                    <h5>
                        Tiempo restante : 2 meses, 3 semanas
                    </h5>
                    <ProgressBar style={progressBar} now={now} label={`${now}%`} />
                </div>

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