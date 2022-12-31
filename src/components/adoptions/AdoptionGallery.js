import React from 'react';
import Slider from 'react-slick'

function AdoptionGallery() {
  const settings = {
    dots: true,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1,
  vertical: true,
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
	  <section className="breeder-gallery-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-0 order-lg-2">
              <Slider className="breeder-gallery-active" {...settings}>
                <div className="breeder-gallery-item">
                  <img src="img/images/breeder_gallery01.jpg" alt="" />
                </div>
                <div className="breeder-gallery-item">
                  <img src="img/images/breeder_gallery02.jpg" alt="" />
                </div>
                <div className="breeder-gallery-item">
                  <img src="img/images/breeder_gallery03.jpg" alt="" />
                </div>
                <div className="breeder-gallery-item">
                  <img src="img/images/breeder_gallery04.jpg" alt="" />
                </div>
              </Slider>
            </div>
            <div className="col-lg-6">
              <div className="adoption-content">
                <h5 className="sub-title">Meet Adoption</h5>
                <h2 className="title">Working For <span>Adoption</span> <br /> Happy Time</h2>
                <p>The best overall dog DNA test is Embark Breed &amp; Health Kit view at Chewy which provides domestic dog is a sticated
                  descendant of the wolf. The dog derived from an ancient.</p>
                <div className="adoption-list">
                  <ul>
                    <li><i className="flaticon-tick" /> Embark Breed &amp; Health</li>
                    <li><i className="flaticon-tick" /> The domestic dog is a domesticated</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AdoptionGallery;
