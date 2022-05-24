import React, { useState } from "react";
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from "./SideBar";
import * as ReactBoostrap from "react-bootstrap";

function Participants() {

    const dumyData = [
        {id: 1, personalSalud: "Laza Bodgan", progreso: "20%", curso: "Curso 1", calificaciones: "15/20", tiempoDedicado: "15 horas"},
        {id: 2, personalSalud: "Michael Smith", progreso: "100%", curso: "Curso 2", calificaciones: "20/20", tiempoDedicado: "40 horas"},
        {id: 3, personalSalud: "John Connor", progreso: "50%", curso: "Curso 3", calificaciones: "10/20", tiempoDedicado: "15 horas"},
        {id: 4, personalSalud: "Connie Smith", progreso: "90%", curso: "Curso 4", calificaciones: "17/20", tiempoDedicado: "15 horas"},
        {id: 5, personalSalud: "Gino Quispe", progreso: "0%", curso: "Curso 5", calificaciones: "0/20", tiempoDedicado: "0 horas"},
        {id: 6, personalSalud: "Rodrigo Ramirez", progreso: "60%", curso: "Curso 6", calificaciones: "18/20", tiempoDedicado: "30 horas"},
        {id: 7, personalSalud: "Juan Hernandez", progreso: "30%", curso: "Curso 7", calificaciones: "13/20", tiempoDedicado: "10 horas"},
        {id: 8, personalSalud: "María Narcizo", progreso: "90%", curso: "Curso 8", calificaciones: "18/20", tiempoDedicado: "38 horas"},
    ]

    const [value, setValue] = useState('');
    const [dataSource, setDataSource] = useState(dumyData);
    const [tableFilter, setTableFilter] = useState([]);

    const filterData = (e) => {
        if(e.target.value !== ""){
            setValue(e.target.value);
            const filterTable = dataSource.filter(o => Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            setDataSource([...dataSource]);
        }
    }

    return (
        <div>
            <NavBarAdmin></NavBarAdmin>
            <div className="flex">
                <SideBarAdmin></SideBarAdmin>
                <div className="participants-content">
                <div className="head-section-quiz">
                    <div className="column-1-head-section">
                        <h2 className="title-section-manage-course">Lista de participantes</h2>
                        <p className="route-section-manage-course">Home &gt; Lista of participantes</p>
                    </div>
                    <div className="column-2-head-section">
                        <div class="box">
                            <div class="container-1">
                                <span class="icon"><i class="fa fa-search"></i></span>
                                <input type="search" value={value} onChange={filterData} id="search" placeholder="Search..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div div className="content-table-participants">
                    <ReactBoostrap.Table responsive bordered hover className="table-participants">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Personal de Salud</th>
                                <th scope="col">Progreso</th>
                                <th scope="col">Curso</th>
                                <th scope="col">Calificaciones</th>
                                <th scope="col">Tiempo Dedicado</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.length > 0 ? tableFilter.map((data => {
                                return (
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.personalSalud}</td>
                                        <td>{data.progreso}</td>
                                        <td>{data.curso}</td>
                                        <td>{data.calificaciones}</td>
                                        <td>{data.tiempoDedicado}</td>
                                        <td>
                                            <button className="seeDetailsParticipant">Ver Detalle</button>
                                        </td>
                                    </tr>
                                )
                            })) : dataSource.map((data => {
                                return (
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.personalSalud}</td>
                                        <td>{data.progreso}</td>
                                        <td>{data.curso}</td>
                                        <td>{data.calificaciones}</td>
                                        <td>{data.tiempoDedicado}</td>
                                        <td>
                                            <button className="seeDetailsParticipant">Ver Detalle</button>
                                        </td>
                                    </tr>
                                )
                            }))
                        }
                        </tbody>
                    </ReactBoostrap.Table>
                </div>
                </div>
            </div>
        </div>
  );
}

export default Participants