import React from "react";
import Slider from 'react-slick';
import {Link}  from 'react-router-dom';

function MainSlider() {
    const settings = {
        autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
    }

  return (
    <section className="slider-area">
    <Slider className="slider-active" {...settings}>
      <div>
        <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage: "url('img/slider/slider_bg01.jpg')"}}>
          <div className="container custom-container">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-10">
                <div className="slider-content">
                  <div className="slider-title">
                    <h2 className="title" data-animation="fadeInUpBig" data-delay=".2s" data-duration="1.2s">Best Friend <span>with</span> Happy Time</h2>
                  </div>
                  <div className="slider-desc">
                    <p className="desc" data-animation="fadeInUpBig" data-delay=".4s" data-duration="1.2s">Human Shampoo on Dogs After six days of delirat, the jury found Hernandez guilty of first-degree murder</p>
                  </div>
                  <Link to="/doglist" className="btn" data-animation="fadeInUpBig" data-delay=".6s" data-duration="1.2s">View More <img src="img/icon/w_pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="single-slider slider-bg d-flex align-items-center" style = {{backgroundImage:"url('img/slider/slider_bg02.jpg')"}}>
          <div className="container custom-container">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-10">
                <div className="slider-content">
                  <div className="slider-title">
                    <h2 className="title" data-animation="fadeInUpBig" data-delay=".2s" data-duration="1.2s">Best Friend <span>with</span> Happy Time</h2>
                  </div>
                  <div className="slider-desc">
                    <p className="desc" data-animation="fadeInUpBig" data-delay=".4s" data-duration="1.2s">Human Shampoo on Dogs After six days of delirat, the jury found Hernandez guilty of first-degree murder</p>
                  </div>
                  <Link to="/doglist" className="btn" data-animation="fadeInUpBig" data-delay=".6s" data-duration="1.2s">View More <img src="img/icon/w_pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
    <div className="slider-shape"><img src="img/slider/slider_shape01.png" alt="" /></div>
    <div className="slider-shape shape-two"><img src="img/slider/slider_shape02.png" alt="" /></div>
  </section>
  )
}

export default MainSlider;
