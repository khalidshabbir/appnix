import React from 'react';
// import { Component } from "react";
import Slider from 'react-slick'
import{Link} from 'react-router-dom'
function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button type="button" className={ className  } onClick={ onClick }><img src="img/icon/arrow.png" alt="PREV"/></button>
    );
}

function BreedServices() {
  const settings = {

   	nav: true,
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: true,
    prevArrow:<PrevArrow/>,
    autoplaySpeed: 4000,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
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
    <section className="breeds-services pt-110 pb-110">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-9">
          <div className="section-title text-center mb-65">
            <div className="section-icon"><img src="img/icon/pawprint.png" alt="" /></div>
            <h5 className="sub-title">Service to Breeds</h5>
            <h2 className="title">Most Popular Dog Breed</h2>
            <p>The best overall dog DNA test is Embark Breed &amp; Health Kit (view at Chewy), which provides you with a breed brwn and information Most dogs</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Slider className="breed-services-active slick"{...settings}>
            <div className="breed-services-item">
              <div className="thumb">
                <img src="img/images/breed_services_img01.jpg" alt="" />
              </div>
              <div className="content">
                <h3 className="title"><Link to="/breeder-details">Golden Retriever</Link></h3>
              </div>
            </div>
            <div className="breed-services-item">
              <div className="thumb">
                <img src="img/images/breed_services_img02.jpg" alt="" />
              </div>
              <div className="content">
                <h3 className="title"><Link to="/breeder-details">German Sharped</Link></h3>
              </div>
            </div>
            <div className="breed-services-item">
              <div className="thumb">
                <img src="img/images/breed_services_img03.jpg" alt="" />
              </div>
              <div className="content">
                <h3 className="title"><Link to="/breeder-details">Siberian Husky</Link></h3>
              </div>
            </div>
            <div className="breed-services-item">
              <div className="thumb">
                <img src="img/images/breed_services_img04.jpg" alt="" />
              </div>
              <div className="content">
                <h3 className="title"><Link to="/breeder-details">Bernes Mountain</Link></h3>
              </div>
            </div>
          </Slider>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="breed-services-info" style={{backgroundImage:'url("img/bg/breed_services_bg.jpg")'}}>
            <h5 className="sub-title">Dog Breeder</h5>
            <h3 className="title">Available for Breed</h3>
            <p>The best overall dog DNA test is Embark Breed &amp; Health Kit (view at Chewy), which provid dogs</p>
            <Link to="/doglist" className="btn">More Pets <img src="img/icon/w_pawprint.png" alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="breed-services-shape"><img src="img/images/breed_services_shape01.png" alt="" /></div>
    <div className="breed-services-shape shape-two"><img src="img/images/breed_services_shape02.png" alt="" /></div>
  </section>
  )
}

export default BreedServices;
