import React from 'react'
import {Link} from 'react-router-dom'

function Adoption() {


  
  return (
    <section className="adoption-area">
    <div className="container">
      <div className="row align-items-center align-items-xl-end justify-content-center">
        <div className="col-xl-7 col-lg-6 col-md-10 order-0 order-lg-2">
          <div className="adoption-img">
            <img src="img/images/adoption_img.jpg" alt="" />
          </div>
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="adoption-content">
            <h2 className="title">Working For <br /> Dog <span>Adoption</span> Free, Happy Time</h2>
            <p>The best overall dog DNA test is Embark Breed &amp; Health Kit (view at Chewy), which provides you with a breed brwn and information.</p>
            <Link to="/adoption" className="btn">Adoption <img src="img/icon/w_pawprint.png" alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="adoption-shape"><img src="img/images/adoption_shape.png" alt="" /></div>
  </section>
  )
}

export default Adoption;
