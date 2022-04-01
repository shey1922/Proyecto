import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <section className="about">

            <div className="image">
                <img src="assets/images/about-img.png" alt="about" />
            </div>

            <div className="content">
                <h3>I will stay with you until you pass your exam.</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ducimus at maiores repellat aut debitis aliquam esse, quisquam nobis laborum velit voluptate excepturi obcaecati dignissimos omnis. Fugiat hic quod nobis?</p>
                <Link to="#" className="btn">learn more</Link>
            </div>

        </section>
    )
}

export default About;