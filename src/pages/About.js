import React from "react";
import { Link } from "react-router-dom";

import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

export default function About() {
  return (
    <React.Fragment>
      <header class="header">
        <a href="home.html" class="logo">
          {" "}
          <i class="fas fa-graduation-cap"></i> WebCS{" "}
        </a>

        <div id="menu-btn" class="fas fa-bars"></div>

        <nav class="navbar">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <a href="#">Cursos +</a>
              <ul>
                <li>
                  <Link to="/course1">Curso 01</Link>
                </li>
                <li>
                  <Link to="/course2">Curso 02</Link>
                </li>
                <li>
                  <a href="course-3.html">Curso 03</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Páginas +</a>
              <ul>
                <li>
                  <a href="teachers.html">Administradores</a>
                </li>
                <li>
                  <a href="blog.html">Blogs</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contacto</a>
            </li>
            <li>
              <Link to="/">
                <AmplifySignOut />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section class="heading">
        <h3>Sobre Nosotros</h3>
        <p>
          {" "}
          <a href="home.html">Inicio --{">>"}</a> Sobre Nosotros{" "}
        </p>
      </section>

      <section class="about">
        <div class="image">
          <img src="assets/images/about-img.png" alt="" />
        </div>

        <div class="content">
          <h3>
            Sistema para la capacitación del personal de salud en la atención de
            casos de violencia
          </h3>
          <p> </p>
          <a href="#" class="btn">
            Aprende más
          </a>
        </div>
      </section>

      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3>Explorar</h3>
            <a href="home.html">
              {" "}
              <i class="fas fa-arrow-right"></i> Inicio{" "}
            </a>
            <a href="about.html">
              {" "}
              <i class="fas fa-arrow-right"></i> Acerca de{" "}
            </a>
            <a href="course-1.html">
              {" "}
              <i class="fas fa-arrow-right"></i> Curso-1{" "}
            </a>
            <a href="course-2.html">
              {" "}
              <i class="fas fa-arrow-right"></i> Curso-2{" "}
            </a>
            <a href="course-3.html">
              {" "}
              <i class="fas fa-arrow-right"></i> Curso-3{" "}
            </a>
            <a href="teachers.html">
              {" "}
              <i class="fas fa-arrow-right"></i> Administradores{" "}
            </a>
            <a href="blog.html">
              {" "}
              <i class="fas fa-arrow-right"></i> Blog{" "}
            </a>
            <a href="contact.html">
              {" "}
              <i class="fas fa-arrow-right"></i> Contacto{" "}
            </a>
          </div>

          <div class="box">
            <h3>Redes Sociales</h3>
            <a href="https://www.gob.pe/minsa">
              {" "}
              <i class="fas fa-heartbeat"></i> MINSA{" "}
            </a>
            <a href="https://www.facebook.com/PeruPaisDigital/">
              {" "}
              <i class="fab fa-facebook-f"></i> Facebook{" "}
            </a>
            <a href="https://twitter.com/PeruPaisDigital">
              {" "}
              <i class="fab fa-twitter"></i> Twitter{" "}
            </a>
          </div>
        </div>

        <div class="credit">
          {" "}
          Creado por <span> Sheyla Mallma </span> | Todos los derechos
          reservados!{" "}
        </div>
      </section>

      <script src="js/script.js"></script>
    </React.Fragment>
  );
}
