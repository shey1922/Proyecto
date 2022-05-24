import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Explorar</h3>
          <a href="home.html">
            <i className="fas fa-arrow-right" /> Inicio
          </a>
          <a href="blog.html">
            <i className="fas fa-arrow-right" /> Blog
          </a>
          <a href="contact.html">
            <i className="fas fa-arrow-right" /> Contacto
          </a>
        </div>
        <div className="box">
          <h3>Redes Sociales</h3>
          <a href="https://www.gob.pe/minsa">
            <i className="fas fa-heartbeat" /> MINSA
          </a>
          <a href="https://www.facebook.com/PeruPaisDigital/">
            <i className="fab fa-facebook-f" /> Facebook
          </a>
          <a href="https://twitter.com/PeruPaisDigital">
            <i className="fab fa-twitter" /> Twitter
          </a>
        </div>
      </div>
      <div className="credit">
        Creado por <span> Sheyla Mallma </span> | Todos los derechos reservados!
      </div>
    </section>
  );
}

export default Footer;
