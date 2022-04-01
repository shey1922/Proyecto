import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <section className="home">

                <div className="image">
                    <img src="assets/images/home-img.png" alt="home" />
                </div>

                <div className="content">
                    <h3>your course to success</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa cumque neque quam amet perferendis sed rem ut tenetur porro praesentium.</p>
                    <Link to="/" className="btn">get started</Link>
                </div>

            </section>

            <section className="category">

                <Link to="/" className="box">
                    <img src="assets/images/category-1.png" alt="category1" />
                        <h3>computer science</h3>
                </Link>

                <Link to="/" className="box">
                    <img src="assets/images/category-2.png" alt="category2" />
                        <h3>biology &amp; life</h3>
                </Link>

                <Link to="/" className="box">
                    <img src="assets/images/category-3.png" alt="category3" />
                        <h3>business analysis</h3>
                </Link>

                <Link to="/" className="box">
                    <img src="assets/images/category-4.png" alt="category4" />
                        <h3>social science</h3>
                </Link>

                <Link to="/" className="box">
                    <img src="assets/images/category-5.png" alt="category5" />
                        <h3>data analysis</h3>
                </Link>

            </section>
        </>
    )
}

export default Home