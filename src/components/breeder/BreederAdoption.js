import React from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import HomeCounter from '../hometwo/HomeCounter'

function BreederAdoption() {

  const settings = {
    dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1,
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
	  <section className="inner-breeder-area breeder-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-4 col-lg-9 col-md-12 col-sm-9">
              <div className="adoption-content">
                <h5 className="sub-title">Meet Breeder</h5>
                <h2 className="title">Work For <span>Breeder</span> Happy Time</h2>
                <p>The best overall dog DNA test is Embark Breed &amp; Health Kit view at Chewy which pres domesti
                  dog is a sticated descendant.</p>
                <div className="adoption-list">
                  <ul>
                    <li><i className="flaticon-tick" /> Embark Breed &amp; Health</li>
                    <li><i className="flaticon-tick" /> The domestic dog is a domesticated</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-9 col-md-12 col-sm-9">
              <div className="breeder-info-wrap">
                <div className="row no-gutters justify-content-center">
                  <div className="col-md-6">
                    <Slider className="breeder-active slick"{...settings}>
                      <div className="breeder-item">
                        <Link to="/breeder-details">
                          <img src="img/images/breeder_img01.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="breeder-item">
                        <Link to="/breeder-details">
                          <img src="img/images/breeder_img02.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="breeder-item">
                        <Link to="/breeder-details">
                          <img src="img/images/breeder_img03.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="breeder-item">
                        <Link to="/breeder-details">
                          <img src="img/images/breeder_img04.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="breeder-item">
                        <Link to="/breeder-details">
                          <img src="img/images/breeder_img05.jpg" alt="" />
                        </Link>
                      </div>
                    </Slider>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="breed-services-info" style={{backgroundImage:'url("img/bg/breed_services_bg.jpg")'}}>
                      <h5 className="sub-title">Dog Breeder</h5>
                      <h3 className="title">Available for Breed</h3>
                      <p>The best overall dog DNA test is Embark Breed &amp; Health Kit (view at Chewy), which
                        provid dogs</p>
                      <Link to="/doglist" className="btn">More Pets <img src="img/icon/w_pawprint.png" alt="" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="counter-area mt-70">
          <HomeCounter/>
        </div>
        </div>
        
      </section>
  )
}
export default BreederAdoption;
