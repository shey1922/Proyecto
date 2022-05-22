import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home">
        <div className="image">
          <img src="assets/images/home-img.png" alt="" />
        </div>
        <div className="content">
          <h3>Lideres en capacitaciones de personal en sector salud</h3>
          <a href="#" className="btn-cta">
            Empezar
          </a>
        </div>
      </section>
      <section className="category">
        <a href="#" className="box">
          <img src="assets/images/category-1.png" alt="" />
          <h3>Multiplataforma</h3>
        </a>
        <a href="#" className="box">
          <img src="assets/images/category-2.png" alt="" />
          <h3>Conocimiento</h3>
        </a>
        <a href="#" className="box">
          <img src="assets/images/category-3.png" alt="" />
          <h3>Rendimiento</h3>
        </a>
        <a href="#" className="box">
          <img src="assets/images/category-4.png" alt="" />
          <h3>Chat Grupal</h3>
        </a>
        <a href="#" className="box">
          <img src="assets/images/category-5.png" alt="" />
          <h3>Videoconferencia</h3>
        </a>
      </section>
    </>
  );
}

export default Home;
