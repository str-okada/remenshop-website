import React from 'react'
import img12 from "../Images/about/12.jpg";
import aboutImage from "../Images/about/3.jpg";
import "./About.css"
import Footer from './Footer'
import myVideo from '../videos/2.mp4';


const About = () => {

    return (
        <>
            <section className="home">
                <div className="slide">
                    <div className="content">
                        <span>Authentic Tonkotsu Ramen</span>
                        <h3>delicious ramen</h3>
                    </div>
                </div>
            </section>

            <section id="wrapper">
                <div class="mainVisual"></div>
                <div id="mainTitle" class="items">
                    <h1>About us</h1>
                </div>
                <div id="c01" class="items">
                    <h3>contensts</h3>
                </div>
                <div id="c02" class="items">
                    <h3>contensts</h3>
                </div>
                <div id="c03" class="items">
                    <h3>We are hiring</h3>
                    <p>
                        Gmen is looking for new stuff.<br /><br />

                        Housewives, students, and those who are looking to work two jobs at the same time are welcome to apply.
                        We offer flexible shifts so that each individual can find a work style that suits them best.<br /><br />

                        We will give preference to those with customer service experience or those with no experience but with good energy.<br /><br />

                        Ramen chef $18~ + tip<br />
                        Kitchen Staff/Dishwasher $15.65~ +TIP<br /><br />

                        Server $15.65~ +TIP (Serving it Right certification is required)<br />
                        Hourly wage will be considered based on position, experience, etc.<br />
                        Working hours<br />
                        Kitchen Staff Lunch around 6 hours, Dinner around 5 hours<br />
                        Server Lunch around 4 hours Dinner around 4 hours<br />
                        *Varies depending on the position.<br /><br />

                        For more information, please email us with your resume, desired position, and visa type and expiration date.<br />
                        ramenramenranmeeee@gmail.com <br /><br />

                        We look forward to hearing from you!<br />
                    </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About