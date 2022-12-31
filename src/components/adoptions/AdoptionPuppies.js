import React from 'react';
import Slider from 'react-slick'
import {Link} from 'react-router-dom'

function PrevArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className ={ className } onClick={ onClick }><img src="img/icon/arrow.png" alt='prev' /></button>
  );
}
function NextArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className ={ className } onClick={ onClick }><img src="img/icon/arrow.png" alt='next' /></button>
  );
}

function AdoptionPuppies() {
  const settings = {

  dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: true,
	autoplaySpeed: 3000,
	prevArrow: <PrevArrow/>,
	nextArrow: <NextArrow/>,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				speed: 1000,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
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

	  <section className="adoption-area-two pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-65">
                <div className="section-icon"><img src="img/icon/pawprint.png" alt="" /></div>
                <h5 className="sub-title">Meet the animals</h5>
                <h2 className="title">Puppies Waiting for Adoption</h2>
                <p>The best overall dog DNA test is Embark Breed &amp; Health Kit (view at Chewy), which provides
                  you with a breed brwn and information most dogs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container custom-container">
          <Slider className="row adopt-active" {...settings}>
            <div className="col-xl">
              <div className="adoption-item">
                <div className="adopt-thumb">
                  <Link to="/breeder-details"><img src="img/images/adop_img01.png" alt="" /></Link>
                  <span className="status">Free</span>
                </div>
                <div className="adopt-content">
                  <div className="adopt-date"><i className="far fa-calendar-alt" /> Birth : 2021</div>
                  <h3 className="title"><Link to="/breeder-details">Golden Retriever</Link></h3>
                  <p>The Golden Retriever is a medium-large gun dog that was bred.</p>
                  <Link to="/breeder-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="adoption-item">
                <div className="adopt-thumb">
                  <Link to="/breeder-details"><img src="img/images/adop_img02.png" alt="" /></Link>
                  <span className="status">Free</span>
                </div>
                <div className="adopt-content">
                  <div className="adopt-date"><i className="far fa-calendar-alt" /> Birth : 2021</div>
                  <h3 className="title"><Link to="/breeder-details">German Sharped</Link></h3>
                  <p>The German Shepherd is a breed of medium to large-sized.</p>
                  <Link to="/breeder-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="adoption-item">
                <div className="adopt-thumb">
                  <Link to="/breeder-details"><img src="img/images/adop_img03.png" alt="" /></Link>
                  <span className="status">Free</span>
                </div>
                <div className="adopt-content">
                  <div className="adopt-date"><i className="far fa-calendar-alt" /> Birth : 2021</div>
                  <h3 className="title"><Link to="/breeder-details">Siberian Husky</Link></h3>
                  <p>The Siberian Husky is a medium-sized working sled dog breed.</p>
                  <Link to="/breeder-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="adoption-item">
                <div className="adopt-thumb">
                  <Link to="/breeder-details"><img src="img/images/adop_img04.png" alt="" /></Link>
                  <span className="status">Free</span>
                </div>
                <div className="adopt-content">
                  <div className="adopt-date"><i className="far fa-calendar-alt" /> Birth : 2021</div>
                  <h3 className="title"><Link to="/breeder-details">French Bulldog</Link></h3>
                  <p>French Bulldog is a breed of domestic dog, bred to be companion.</p>
                  <Link to="/breeder-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="adoption-item">
                <div className="adopt-thumb">
                  <Link to="/breeder-details"><img src="img/images/adop_img05.png" alt="" /></Link>
                  <span className="status">Free</span>
                </div>
                <div className="adopt-content">
                  <div className="adopt-date"><i className="far fa-calendar-alt" /> Birth : 2021</div>
                  <h3 className="title"><Link to="/breeder-details">Siberian Husky</Link></h3>
                  <p>French Bulldog is a breed of domestic dog, bred to be companion.</p>
                  <Link to="/breeder-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
  )
}

export default AdoptionPuppies;
