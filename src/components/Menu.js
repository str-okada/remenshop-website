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

import ImageCarousel from "../carousel/ImageCarousel.js";
import GalleryCarousel from '../carousel/GalleryCarousel';
import Products from './Products';

const Menu = () => {
  return (
    <div className="compo">
      <RamenCarousel />

      <Products/>
      
      <section className="home">
        <div className="slide">
          <div className="content">
            <span>Authentic Tonkotsu Ramen</span>
            <h3>delicious ramen</h3>
            <a href="https://h5.auroratech.top/#/" className="btn">Order Now</a>
          </div>
        </div>
      </section>
      
      <ImageCarousel>
        <div>
          <img
            src="https://www.w3schools.com/howto/img_snow_wide.jpg"
            alt="img1"
          />
        </div>
        <div>
          <img
            src="https://www.w3schools.com/howto/img_woods_wide.jpg"
            alt="img2"
          />
        </div>
        <div>
          <img
            src="https://www.w3schools.com/howto/img_lights_wide.jpg"
            alt="img3"
          />
        </div>
      </ImageCarousel>

      <GalleryCarousel />

      <Footer />
    </div>
  )
}

export default Menu