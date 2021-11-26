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
        <h3>Curso 01</h3>
        <p>
          {" "}
          <a href="home.html">Inicio --{">>"}</a> Curso-1{" "}
        </p>
      </section>

      <section class="course-1">
        <div class="box">
          <img src="assets/images/course-1.png" alt="" />
          <h3>web design</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">
            Leer más
          </a>
        </div>

        <div class="box">
          <img src="assets/images/course-2.png" alt="" />
          <h3>seo marketing</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">
            Leer más
          </a>
        </div>

        <div class="box">
          <img src="assets/images/course-3.png" alt="" />
          <h3>science & biology</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">
            Leer más
          </a>
        </div>

        <div class="box">
          <img src="assets/images/course-4.png" alt="" />
          <h3>music & dance</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">
            Leer más
          </a>
        </div>

        <div class="box">
          <img src="assets/images/course-5.png" alt="" />
          <h3>digital marketing</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">
            Leer más
          </a>
        </div>

        <div class="box">
          <img src="assets/images/course-6.png" alt="" />
          <h3>maths & statistics</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">
            Leer más
          </a>
        </div>

        <div class="box">
          <img src="assets/images/course-7.png" alt="" />
          <h3>data analysis</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">
            Leer más
          </a>
        </div>

        <div class="box">
          <img src="assets/images/course-8.png" alt="" />
          <h3>email marketing</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">
            Leer más
          </a>
        </div>

        <div class="box">
          <img src="assets/images/course-9.png" alt="" />
          <h3>graphic design</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">
            Leer más
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
