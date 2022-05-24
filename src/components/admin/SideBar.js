import { Link } from "react-router-dom";
import React from "react";

function SideBarAdmin() {
  return (
    <div className="sidebaradmin">
        <h3 class="side-title">INSTRUCTOR</h3>
        <ul className="listsidebar">
            <li className="elementsidebar">
                <Link to="/manage-course" class="btn-text">
                    <i className="fas fa-book-open i-space" />
                    Gestionar cursos
                </Link>
            </li>
            <li className="elementsidebar">
                <Link to="/manage-quiz" class="btn-text">
                    <i class="fas fa-question-circle i-space"></i>
                    Gestionar cuestionarios
                </Link>
            </li>
            <li className="elementsidebar">
                <Link to="/edit-course" class="btn-text">
                    <i class="fas fa-pen-square i-space"></i>
                    Lista de cursos
                </Link>
            </li>
            <li className="elementsidebar">
                <Link to="/edit-quiz" class="btn-text">
                    <i class="fas fa-clipboard i-space"></i>
                    Lista de cuestionario
                </Link>
            </li>
            <li className="elementsidebar">
                <Link to="/participants" class="btn-text">
                    <i class="fas fa-users i-space"></i>
                    Participantes
                </Link>
            </li>
        </ul>
    </div>
  );
}

export default SideBarAdmin