import React from 'react'
import aboutImage from "../Images//about/3.jpg";


const About = () => {
    return (
        <div className="container text-center">
                
            

            <img src={aboutImage} className="profileImage" />

            <p>
                Welcome to my portfolio website. My name is Shotaro. <br />
                I'm studying web development at Tamwood college in Vancouver.
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

            <section className="page-section project">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Title 2</h2>
                </div>

                <div className="text-center">
                    <div className="row text-center">
                        <h4 className="my-3">Title 2 details</h4>
                        <p className="text-muted">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde quibusdam aliquam esse error nam dolores beatae doloremque vitae officiis!<br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde quibusdam aliquam esse error nam dolores beatae doloremque vitae officiis!<br />
                        </p>
                    </div>
                </div>
            </section>

            <section className="page-section project">

                <div className="text-center">
                    <h2 className="section-heading text-uppercase">PROJECTS</h2>
                </div>

                <div className="text-center">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 align-items-center">
                            <div className="col-lg-7">
                                <img className="img-fluid rounded mb-4 mb-lg-0" src={aboutImage} alt="ramen" />
                            </div>
                            <div className="col-lg-5">
                                <h3 className="font-weight-light">details</h3>
                                <p>discription</p>

                                <h5>details</h5>
                                <p>discription</p>

                                <a className="btn btn-primary" href="#">Go to github <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default About