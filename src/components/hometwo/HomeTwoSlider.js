import React from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button type="button" className={ className  } onClick={ onClick }><img src="img/icon/arrow.png" alt="PREV"/></button>
    );
}
function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <button type="button" className={ className  } onClick={ onClick }><img src="img/icon/arrow.png" alt="NEXT"/></button>
    );
}

function HomeTwoSlider() {
  const settings = {
  dots: false,
	infinite: true,
	speed: 1000,
  prevArrow:<PrevArrow/>,
  nextArrow:<NextArrow/>,
	autoplay: true,
	arrows: true,
	autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 1000,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				speed: 1000,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				speed: 1000,
			}
		},
	]
  }
  return (
	   <section className="slider-area slider-style-two">
        <Slider className="slider-active"{...settings}>
          <div>
            <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage:'url("img/slider/s_slider_bg01.jpg")'}}>
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
          <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage:'url("img/slider/s_slider_bg02.jpg")'}}>
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
      </section>
  )
}

export default HomeTwoSlider;






