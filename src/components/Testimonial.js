import React from 'react';
import Slider from 'react-slick'

function Testimonial() {
  const settings = {
    dots: true,
	infinite: true,
	speed: 4000,
	autoplay: false,
	arrows: false,
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
      <section className="testimonial-area testimonial-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-65">
                <div className="section-icon"><img src="img/icon/pawprint.png" alt="" /></div>
                <h5 className="sub-title">Testimonials</h5>
                <h2 className="title">Our Happy Customers</h2>
                <p>The best overall dog DNA test is Embark Breed &amp; Health Kit (view at Chewy), which provides you with a
                  breed brwn and information Most dogs</p>
              </div>
            </div>
          </div>
          <Slider className="row testimonial-active"{...settings}>
            <div className="col">
              <div className="testimonial-item">
                <div className="testi-avatar-thumb">
                  <img src="img/images/testi_avatar01.png" alt="" />
                </div>
                <div className="testi-content">
                  <p>“ The best overall dog DNA test Embark Breed &amp; Health Kit (view at Chewy), which provides with a breed brwn and information ”</p>
                  <div className="testi-avatar-info">
                    <h5 className="title">Alessia Cara</h5>
                    <span>Googel CEO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="testi-avatar-thumb">
                  <img src="img/images/testi_avatar02.png" alt="" />
                </div>
                <div className="testi-content">
                  <p>“ The best overall dog DNA test Embark Breed &amp; Health Kit (view at Chewy), which provides with a breed brwn and information ”</p>
                  <div className="testi-avatar-info">
                    <h5 className="title">Alessia Cara</h5>
                    <span>Googel CEO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="testi-avatar-thumb">
                  <img src="img/images/testi_avatar01.png" alt="" />
                </div>
                <div className="testi-content">
                  <p>“ The best overall dog DNA test Embark Breed &amp; Health Kit (view at Chewy), which provides with a breed brwn and information ”</p>
                  <div className="testi-avatar-info">
                    <h5 className="title">Alessia Cara</h5>
                    <span>Googel CEO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-item">
                <div className="testi-avatar-thumb">
                  <img src="img/images/testi_avatar02.png" alt="" />
                </div>
                <div className="testi-content">
                  <p>“ The best overall dog DNA test Embark Breed &amp; Health Kit (view at Chewy), which provides with a breed brwn and information ”</p>
                  <div className="testi-avatar-info">
                    <h5 className="title">Alessia Cara</h5>
                    <span>Googel CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
  )
}

export default Testimonial;
