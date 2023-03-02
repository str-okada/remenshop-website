import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="container text-center">
      <h3>Contact us</h3>
      <section className="contact-section bg-black">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">111 ramen St Richmond BC<br />R1R 1R1</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50"><a href="#!">ramen@ramen.com</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">+1 xxx-xxx-xxx</div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"></i></a>
            <a className="mx-2" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a className="mx-2" href="#" target="_blank"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </section>
      <footer>
        Copyright © 2023 Ramen Shop "G"
      </footer>
    </div>
  )
}

export default Footer