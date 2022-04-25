import React from "react";
import { Link } from "react-router-dom";

function NavBarAdmin() {

  //const { setCurrentUser } = useContext(AuthContext);

  /*const signOut = async () => {
    try {
      await Auth.signOut();
      setCurrentUser('');
    } catch (err) {
      console.error(err);
    }
  };*/

  return (
    <header className="header">
      <Link to="/" className="logo">
        <i className="fas fa-graduation-cap" /> WebCS
      </Link>
      <div id="menu-btn" className="fas fa-bars" />
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/courses">Cursos</Link>
          </li>
          <li>
            <Link to="/">Salir</Link>  
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBarAdmin