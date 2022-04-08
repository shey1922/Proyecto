import { Auth } from 'aws-amplify';
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const signOut = async () => {
        try {
          await Auth.signOut();
        } catch (err) {
          console.error(err);
        }
      }
    
    return (
        <header className="header">
            <Link to="/" className="logo"> <i className="fas fa-graduation-cap" /> educa </Link>
            <div id="menu-btn" className="fas fa-bars" />
            <nav className="navbar">
                <ul>
                    <li><Link to="about">info</Link></li>
                    {/* <li><Link href="#">cursos +</Link>
                        <ul>
                            <li><Link to="/course">course 01</Link></li>
                            <li><Link to="/course">course 02</Link></li>
                            <li><Link to="/course">course 03</Link></li>
                        </ul>
                    </li> */}
                    {/* <li><Link href="#">pages +</Link>
                        <ul>
                            <li><Link to="/teachers">teachers</Link></li>
                            <li><Link to="/blogs">blogs</Link></li>
                        </ul>
                    </li> */}
                    <li><Link to="/">mis cursos</Link></li>
                    <li><Link to="teachers">profesores</Link></li>
                    <li><Link to="/">mi perfil</Link></li>
                    <li><Link to="login" onClick={signOut}>salir</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar