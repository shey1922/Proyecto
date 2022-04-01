import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="header">
            <Link to="/" className="logo"> <i className="fas fa-graduation-cap" /> educa </Link>
            <div id="menu-btn" className="fas fa-bars" />
            <nav className="navbar">
                <ul>
                    <li><Link to="/">inicio</Link></li>
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
                    <li><Link to="contact">contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar