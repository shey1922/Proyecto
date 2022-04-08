import React from 'react'

function Contact() {
    return (
        <section className="contact">
            <div className="icons-container">
                <div className="icons">
                    <i className="fas fa-phone" />
                    <h3>our number</h3>
                    <p>+123-456-7890</p>
                    <p>+111-222-3333</p>
                </div>
                <div className="icons">
                    <i className="fas fa-envelope" />
                    <h3>our email</h3>
                    <p>shaikhanas@gmail.com</p>
                    <p>anasbhai@gmail.com</p>
                </div>
                <div className="icons">
                    <i className="fas fa-map-marker-alt" />
                    <h3>our address</h3>
                    <p>mumbai, india - 400104</p>
                </div>
            </div>
            <div className="row">
                <form>
                    <h3>get in touch</h3>
                    <input type="text" placeholder="your name" className="box" />
                    <input type="number" placeholder="your number" className="box" />
                    <input type="email" placeholder="your email" className="box" />
                    <textarea name placeholder="your message" cols="30" rows="10" />
                    <input type="submit" defaultValue="send message" className="btn" />
                </form>
            </div>
        </section>
    )
}

export default Contact