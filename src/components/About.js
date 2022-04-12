import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about">
      <div className="image">
        <img src="assets/images/about-img.png" alt="" />
      </div>
      <div className="content">
        <h3>
          Sistema para la capacitación del personal de salud en la atención de
          casos de violencia
        </h3>
        <p> </p>
        <a href="#" className="btn">
          Aprende más
        </a>
      </div>
    </section>
  );
}

export default About;
