import React from 'react'
import RamenCarousel from '../carousel/RamenCarousel';
import './Menu.css'
import Footer from './Footer'
import ramen1 from '../Images/menu/1.jpg'
import ramen5 from '../Images/menu/5.jpg'
import ramen7 from '../Images/menu/7.jpg'

import a1 from '../Images/menu/a1.jpg'
import a2 from '../Images/menu/a2.jpg'
import r1 from '../Images/menu/r1.jpg'
import r2 from '../Images/menu/r2.jpg'

import img12 from "../Images/about/12.jpg";
import aboutImage from "../Images/about/3.jpg";



const Menu = () => {
  return (
    <div className="compo">
      <RamenCarousel />
      <section className="home">
        <div className="slide">
          <div className="content">
            <span>Authentic Tonkotsu Ramen</span>
            <h3>delicious ramen</h3>
            <a href="https://h5.auroratech.top/#/" className="btn">Order Now</a>
          </div>
        </div>

        <img className="aboutImage" src={img12} />

      </section>





      <Footer />
    </div>
  )
}

export default Menu