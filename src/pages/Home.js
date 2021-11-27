import React from "react";
import { Link } from "react-router-dom";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

export default function Home() {
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

      <section class="home">
        <div class="image">
          <img src="assets/images/home-img.png" alt="" />
        </div>

        <div class="content">
          <h3>Lideres en capacitaciones de personal en sector salud</h3>
          <p>.</p>
          <a href="#" class="btn">
            Empezar
          </a>
        </div>
      </section>

      <section class="category">
        <a href="#" class="box">
          <img src="assets/images/category-1.png" alt="" />
          <h3>Multiplataforma</h3>
        </a>

        <a href="#" class="box">
          <img src="assets/images/category-2.png" alt="" />
          <h3>Conocimiento</h3>
        </a>

        <a href="#" class="box">
          <img src="assets/images/category-3.png" alt="" />
          <h3>Rendimiento</h3>
        </a>

        <a href="#" class="box">
          <img src="assets/images/category-4.png" alt="" />
          <h3>Chat Grupal</h3>
        </a>

        <a href="#" class="box">
          <img src="assets/images/category-5.png" alt="" />
          <h3>Videoconferencia</h3>
        </a>
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
