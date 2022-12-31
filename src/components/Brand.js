import React from 'react';
import Slider from 'react-slick';
function Brand() {
    const settings={
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
      }
  return (
     
    <div className="brand-area pt-80 pb-80">
    <div className="container">
      <Slider className="row brand-active"{...settings}>
            <div className="col-12">
            <div className="brand-item">
                <img src="img/brand/brand_item01.png" alt="img" />
            </div>
            </div>
            <div className="col-12">
            <div className="brand-item">
                <img src="img/brand/brand_item02.png" alt="img" />
            </div>
            </div>
            <div className="col-12">
            <div className="brand-item">
                <img src="img/brand/brand_item03.png" alt="img" />
            </div>
            </div>
            <div className="col-12">
            <div className="brand-item">
                <img src="img/brand/brand_item04.png" alt="img" />
            </div>
            </div>
            <div className="col-12">
            <div className="brand-item">
                <img src="img/brand/brand_item05.png" alt="img" />
            </div>
            </div>
            <div className="col-12">
            <div className="brand-item">
                <img src="img/brand/brand_item06.png" alt="img" />
            </div>
            </div>
            <div className="col-12">
            <div className="brand-item">
                <img src="img/brand/brand_item03.png" alt="img" />
            </div>
            </div>
      </Slider>
    </div>
  </div>
  )
}

export default Brand;
