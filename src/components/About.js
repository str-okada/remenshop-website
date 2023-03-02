import React from 'react'
import aboutImage from "../Images//about/3.jpg";
import "./About.css"
import Footer from './Footer'

const About = () => {

    return (
        <div className="container text-center">

            <img src={aboutImage} className="aboutImage" />

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde quibusdam aliquam esse error nam dolores beatae doloremque vitae
            </p>
            <section className="page-section project">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Title 1</h2>
                </div>

                <div className="text-center">
                    <div className="row text-center">
                        <h4 className="my-3">Title 1 details</h4>
                        <p className="text-muted">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde quibusdam aliquam esse error nam dolores beatae doloremque vitae officiis!<br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde quibusdam aliquam esse error nam dolores beatae doloremque vitae officiis!<br />
                        </p>
                    </div>
                </div>
            </section>

            
            <Footer />
        </div >
    )
}

export default About