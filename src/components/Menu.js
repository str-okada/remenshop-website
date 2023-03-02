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



const Menu = () => {


  return (
    <div className="container text-center">
      {/* <h1>Menu</h1> */}
      <RamenCarousel />

      <section className="page-section project">

        <div className="text-center">
          <h2 className="section-heading text-uppercase">Ramen</h2>
        </div>

        <div className="text-center">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-lg-7">
                <img className="img-fluid rounded mb-4 mb-lg-0" src={ramen1} alt="ramen" />
              </div>
              <div className="col-lg-5">
                <h3 className="font-weight-light">Ramen 1</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde quibusdam aliquam esse
                  <br />
                  error nam dolores beatae doloremque vitae officiis!<br />
                </p>
              </div>
            </div>

            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-lg-7">
                <img className="img-fluid rounded mb-4 mb-lg-0" src={ramen5} alt="ramen" />
              </div>
              <div className="col-lg-5">
                <h3 className="font-weight-light">Ramen 5</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde quibusdam aliquam esse
                  <br />
                  error nam dolores beatae doloremque vitae officiis!<br />
                </p>
              </div>
            </div>

            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-lg-7">
                <img className="img-fluid rounded mb-4 mb-lg-0" src={ramen7} alt="ramen" />
              </div>
              <div className="col-lg-5">
                <h3 className="font-weight-light">Ramen 7</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde quibusdam aliquam esse
                  <br />
                  error nam dolores beatae doloremque vitae officiis!<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="page-section project">

        <div className="text-center">
          <h2 className="section-heading text-uppercase">Appetizer</h2>
        </div>

        <div className="text-center">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-lg-7">
                <img className="img-fluid rounded mb-4 mb-lg-0" src={a1} alt="ramen" />
              </div>
              <div className="col-lg-5">
                <h3 className="font-weight-light">Appetizer 1</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde quibusdam aliquam esse
                  <br />
                  error nam dolores beatae doloremque vitae officiis!<br />
                </p>
              </div>
            </div>

            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-lg-7">
                <img className="img-fluid rounded mb-4 mb-lg-0" src={a2} alt="ramen" />
              </div>
              <div className="col-lg-5">
                <h3 className="font-weight-light">Appetizer 5</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde quibusdam aliquam esse
                  <br />
                  error nam dolores beatae doloremque vitae officiis!<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="page-section project">

        <div className="text-center">
          <h2 className="section-heading text-uppercase">Rice</h2>
        </div>

        <div className="text-center">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-lg-7">
                <img className="img-fluid rounded mb-4 mb-lg-0" src={r1} alt="ramen" />
              </div>
              <div className="col-lg-5">
                <h3 className="font-weight-light">Rice 1</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde quibusdam aliquam esse
                  <br />
                  error nam dolores beatae doloremque vitae officiis!<br />
                </p>
              </div>
            </div>

            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-lg-7">
                <img className="img-fluid rounded mb-4 mb-lg-0" src={r2} alt="ramen" />
              </div>
              <div className="col-lg-5">
                <h3 className="font-weight-light">Rice 2</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi unde quibusdam aliquam esse
                  <br />
                  error nam dolores beatae doloremque vitae officiis!<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >


      <Footer />
    </div>
  )
}

export default Menu