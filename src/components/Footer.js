import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>explore</h3>
                    <Link to="home"> <i className="fas fa-arrow-right" /> home </Link>
                    <Link to="about"> <i className="fas fa-arrow-right" /> about </Link>
                    {/* <a href="course-1.html"> <i className="fas fa-arrow-right" /> course-1 </a>
                    <a href="course-2.html"> <i className="fas fa-arrow-right" />course-2 </a>
                    <a href="course-3.html"> <i className="fas fa-arrow-right" /> course-3 </a> */}
                    <Link to="teachers"> <i className="fas fa-arrow-right" /> teachers </Link>
                    <Link to="blog"> <i className="fas fa-arrow-right" /> blog </Link>
                    <Link to="contact"> <i className="fas fa-arrow-right" /> contact </Link>
                </div>
                <div className="box">
                    <h3>categories</h3>
                    <Link to="/"> <i className="fas fa-arrow-right" /> web design </Link>
                    <Link to="/"> <i className="fas fa-arrow-right" /> graphic design</Link>
                    <Link to="/"> <i className="fas fa-arrow-right" /> UI / UX design</Link>
                    <Link to="/"> <i className="fas fa-arrow-right" /> seo marketing</Link>
                    <Link to="/"> <i className="fas fa-arrow-right" /> digital marketing</Link>
                    <Link to="/"> <i className="fas fa-arrow-right" /> email marketing</Link>
                    <Link to="/"> <i className="fas fa-arrow-right" /> all courses</Link>
                </div>
                <div className="box">
                    <h3>quick links</h3>
                    <Link to="/"> <i className="fas fa-arrow-right" /> my account </Link>
                    <Link to="/"> <i className="fas fa-arrow-right" /> feedback </Link>
                    <Link to="/"> <i className="fas fa-arrow-right" /> help center </Link>
                    <Link to="/"> <i className="fas fa-arrow-right" /> certificates </Link>
                    <Link to="/"> <i className="fas fa-arrow-right" /> newsletter </Link>
                </div>
                <div className="box">
                    <h3>follow us</h3>
                    <Link to="/"> <i className="fab fa-facebook-f" /> facebook </Link>
                    <Link to="/"> <i className="fab fa-twitter" /> twitter </Link>
                    <Link to="/"> <i className="fab fa-linkedin" /> linkedin </Link>
                    <Link to="/"> <i className="fab fa-instagram" /> instagram </Link>
                    <Link to="/"> <i className="fab fa-pinterest" /> pinterest </Link>
                    <Link to="/"> <i className="fab fa-github" /> github </Link>
                </div>
            </div>
            <div className="credit"> created by <span>mr. web designer</span> | all rights reserved! </div>
        </section>
    );
}

export default Footer