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

      <section class="heading">
        <h3>Curso 02</h3>
        <p>
          {" "}
          <a href="home.html">Inicio --{">>"}</a> Curso-2{" "}
        </p>
      </section>

      <section class="course-2">
        <div class="box">
          <div class="image">
            <img src="assets/images/main-course-1.png" alt="" />
          </div>
          <div class="content">
            <span>business</span>
            <h3>learning is what makes you perfect</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quam.
            </p>
            <a href="#" class="btn">
              Leer más
            </a>
            <div class="icons">
              <a href="#">
                {" "}
                <i class="fas fa-book"></i> 12 modules{" "}
              </a>
              <a href="#">
                {" "}
                <i class="fas fa-clock"></i> 6 hours{" "}
              </a>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="assets/images/main-course-2.png" alt="" />
          </div>
          <div class="content">
            <span>language</span>
            <h3>learning is what makes you perfect</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quam.
            </p>
            <a href="#" class="btn">
              Leer más
            </a>
            <div class="icons">
              <a href="#">
                {" "}
                <i class="fas fa-book"></i> 12 modules{" "}
              </a>
              <a href="#">
                {" "}
                <i class="fas fa-clock"></i> 6 hours{" "}
              </a>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="assets/images/main-course-3.png" alt="" />
          </div>
          <div class="content">
            <span>development</span>
            <h3>learning is what makes you perfect</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quam.
            </p>
            <a href="#" class="btn">
              Leer más
            </a>
            <div class="icons">
              <a href="#">
                {" "}
                <i class="fas fa-book"></i> 12 modules{" "}
              </a>
              <a href="#">
                {" "}
                <i class="fas fa-clock"></i> 6 hours{" "}
              </a>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="assets/images/main-course-4.png" alt="" />
          </div>
          <div class="content">
            <span>teaching</span>
            <h3>learning is what makes you perfect</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quam.
            </p>
            <a href="#" class="btn">
              Leer más
            </a>
            <div class="icons">
              <a href="#">
                {" "}
                <i class="fas fa-book"></i> 12 modules{" "}
              </a>
              <a href="#">
                {" "}
                <i class="fas fa-clock"></i> 6 hours{" "}
              </a>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="assets/images/main-course-5.png" alt="" />
          </div>
          <div class="content">
            <span>designing</span>
            <h3>learning is what makes you perfect</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quam.
            </p>
            <a href="#" class="btn">
              Leer más
            </a>
            <div class="icons">
              <a href="#">
                {" "}
                <i class="fas fa-book"></i> 12 modules{" "}
              </a>
              <a href="#">
                {" "}
                <i class="fas fa-clock"></i> 6 hours{" "}
              </a>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="assets/images/main-course-6.png" alt="" />
          </div>
          <div class="content">
            <span>speaking</span>
            <h3>learning is what makes you perfect</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quam.
            </p>
            <a href="#" class="btn">
              Leer más
            </a>
            <div class="icons">
              <a href="#">
                {" "}
                <i class="fas fa-book"></i> 12 modules{" "}
              </a>
              <a href="#">
                {" "}
                <i class="fas fa-clock"></i> 6 hours{" "}
              </a>
            </div>
          </div>
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
