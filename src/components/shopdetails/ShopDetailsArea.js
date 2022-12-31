import React, { useState } from 'react'
import{Link} from 'react-router-dom'
import Slider from 'react-slick'
// import $ from 'jquery'



function ShopDetailsArea(){


  // const [nav1, setnav1] = useState(null);
  // const [nav2,setNav2] = useState(null);
  const [val, setVal] = useState(1);
  const increase = ()=>{
    setVal(val+1);
  }
  const decrease = ()=>{
    setVal(val-1);
  }

  const handleActive = (e)=>{
    e.preventDefault();
    
    document.querySelectorAll('.shop-details-dimension ul li').forEach( el => {
      el.classList.remove('active');
    })
    e.target.parentNode.classList = 'active';
  }
   const colorActive = (e)=>{
    e.preventDefault();
    
    document.querySelectorAll('.shop-details-color ul li').forEach( el => {
      el.classList.remove('active');
    })
    e.target.classList += ' active';
  }
   const settings = {

  dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: false,
	autoplaySpeed: 3000,
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

	return(
   
		<section className="shop-details-area pt-110 pb-50">
        <div className="container">
          <div className="shop-details-wrap">
            <div className="row">
              <div className="col-7">
                <div className="shop-details-img-wrap">
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane show active" id="item-one" role="tabpanel" aria-labelledby="item-one-tab">
                      <div className="shop-details-img">
                        <img src="img/product/shop_details01.jpg" alt="" />
                      </div>
                    </div>
                    <div className="tab-pane" id="item-two" role="tabpanel" aria-labelledby="item-two-tab">
                      <div className="shop-details-img">
                        <img src="img/product/shop_details02.jpg" alt="" />
                      </div>
                    </div>
                    <div className="tab-pane" id="item-three" role="tabpanel" aria-labelledby="item-three-tab">
                      <div className="shop-details-img">
                        <img src="img/product/shop_details03.jpg" alt="" />
                      </div>
                    </div>
                    <div className="tab-pane" id="item-four" role="tabpanel" aria-labelledby="item-four-tab">
                      <div className="shop-details-img">
                        <img src="img/product/shop_details04.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop-details-nav-wrap">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="item-one-tab" data-toggle="tab" href="/#item-one" role="tab" aria-controls="item-one" aria-selected="true"><img src="img/product/shop_nav_img01.jpg" alt="" /></a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="item-two-tab" data-toggle="tab" href="/#item-two" role="tab" aria-controls="item-two" aria-selected="false"><img src="img/product/shop_nav_img02.jpg" alt="" /></a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="item-three-tab" data-toggle="tab" href="/#item-three" role="tab" aria-controls="item-three" aria-selected="false"><img src="img/product/shop_nav_img03.jpg" alt="" /></a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="item-four-tab" data-toggle="tab" href="/#item-four" role="tab" aria-controls="item-four" aria-selected="false"><img src="img/product/shop_nav_img04.jpg" alt="" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-5">
                <div className="shop-details-content">
                  <span>hand sanitizer</span>
                  <h2 className="title">Pet Knit Knacks</h2>
                  <div className="shop-details-review">
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span>( 01 Review )</span>
                  </div>
                  <div className="shop-details-price">
                    <h2 className="price">$52.00</h2>
                    <h5 className="stock-status">- IN Stock</h5>
                  </div>
                  <p>The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative.</p>
                  <div className="shop-details-dimension">
                    <span>Dimension :</span>
                    <ul>
                      <li className="active"><a href="/#" onClick={(e)=> handleActive(e)}>Large</a></li>
                      <li><a href="/#" onClick={(e)=> handleActive(e)}>Medium</a></li>
                      <li><a href="/#" onClick={(e)=> handleActive(e)}>Small</a></li>
                    </ul>
                  </div>
                  <div className="shop-details-color">
                    <span>Color :</span>
                    <ul>
                      <li className="active" onClick={(e)=> colorActive(e)}/>
                      <li className="black" onClick={(e)=> colorActive(e)}/>
                      <li className="green" onClick={(e)=> colorActive(e)}/>
                      <li className="blue" onClick={(e)=> colorActive(e)}/>
                    </ul>
                  </div>
                  <div className="shop-details-quantity">
                    <span>Quantity :</span>
                    <div className="cart-plus-minus">
                      <input type="text" value={val} readOnly/>
                      <div className="dec qtybutton" onClick={()=>decrease()}>-</div>
                        <div className="inc qtybutton" onClick={()=>increase()}>+</div>
                    </div>
                    <Link to="/shop-details" className="wishlist-btn"><i className="fas fa-heart" /> Add to Wishlist</Link>
                    <Link to="/shop-details" className="cart-btn">Add to Cart +</Link>
                  </div>
                  <div className="shop-details-bottom">
                    <ul>
                      <li className="sd-category">
                        <span className="title">Categories :</span>
                        <Link to="/shop">HLinknd,</Link>
                        <Link to="/shop">SLinknitizer,</Link>
                        <Link to="/shop">Covid - 19</Link>
                      </li>
                      <li className="sd-sku">
                        <span className="title">SKU :</span>
                        <Link to="/shop">H#21546</Link>
                      </li>
                      <li className="sd-share">
                        <span className="title">Share Now :</span>
                        <a href="/#"><i className="fab fa-facebook-f" /></a>
                        <a href="/#"><i className="fab fa-twitter" /></a>
                        <a href="/#"><i className="fab fa-linkedin-in" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-desc-wrap">
                <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="details-tab" data-toggle="tab" href="/#details" role="tab" aria-controls="details" aria-selected="true">Details More</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="val-tab" data-toggle="tab" href="/#val" role="tab" aria-controls="val" aria-selected="false">Information</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="review-tab" data-toggle="tab" href="/#review" role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContentTwo">
                  <div className="tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="details-tab">
                    <div className="product-desc-content">
                      <p>The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old. doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest</p>
                      <p>These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old. doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest include the core vaccines, which are administered.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="val" role="tabpanel" aria-labelledby="val-tab">
                    <div className="product-desc-info">
                      <div className="row">
                        <div className="col-xl-3 col-md-5">
                          <div className="product-desc-img">
                            <img src="img/product/desc_img.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-xl-9 col-md-7">
                          <h5 className="small-title">100% Knit Knacks</h5>
                          <p>Cramond Leopard &amp; Pythong Print Anorak Jacket In Beige but also the leap into
                            electronic typesetting, remaining lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                          <ul className="product-desc-list">
                            <li>65% poly, 35% rayon</li>
                            <li>Partially lined</li>
                            <li>Hidden front button closure with keyhole accents</li>
                            <li>Button cuff sleeves</li>
                            <li>Lightweight semi-sheer fabrication</li>
                            <li>Made in USA</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                    <div className="product-desc-review">
                      <div className="review-title mb-20">
                        <h4 className="title">Customer Reviews (0)</h4>
                      </div>
                      <div className="left-rc">
                        <p>No reviews yet</p>
                      </div>
                      <div className="right-rc">
                        <a href="/#">Write a review</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="related-products-wrap">
            <h2 className="title">Related Products</h2>
            <Slider className="row related-product-active"{...settings}>
              <div className="col-lg">
                <div className="shop-item mb-55">
                  <div className="shop-thumb">
                    <Link to="/shop-details"><img src="img/product/shop_item01.jpg" alt="" /></Link>
                  </div>
                  <div className="shop-content">
                    <span>Dog toy’s</span>
                    <h4 className="title"><Link to="/shop-details">Pet Knit Knacks</Link></h4>
                    <div className="shop-content-bottom">
                      <span className="price">$28.00</span>
                      <span className="add-cart"><Link to="/shop-details">ADD +</Link></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg">
                <div className="shop-item mb-55">
                  <div className="shop-thumb">
                    <Link to="/shop-details"><img src="img/product/shop_item02.jpg" alt="" /></Link>
                  </div>
                  <div className="shop-content">
                    <span>Dog toy’s</span>
                    <h4 className="title"><Link to="/shop-details">Squeaky Dog</Link></h4>
                    <div className="shop-content-bottom">
                      <span className="price">$19.00</span>
                      <span className="add-cart"><Link to="/shop-details">ADD +</Link></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg">
                <div className="shop-item mb-55">
                  <div className="shop-thumb">
                    <Link to="/shop-details"><img src="img/product/shop_item03.jpg" alt="" /></Link>
                  </div>
                  <div className="shop-content">
                    <span>Dog toy’s</span>
                    <h4 className="title"><Link to="/shop-details">Pet Knit Knacks</Link></h4>
                    <div className="shop-content-bottom">
                      <span className="price">$29.00</span>
                      <span className="add-cart"><Link to="/shop-details">ADD +</Link></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg">
                <div className="shop-item mb-55">
                  <div className="shop-thumb">
                    <Link to="/shop-details"><img src="img/product/shop_item04.jpg" alt="" /></Link>
                  </div>
                  <div className="shop-content">
                    <span>Dog toy’s</span>
                    <h4 className="title"><Link to="/shop-details">Yoda Carriage</Link></h4>
                    <div className="shop-content-bottom">
                      <span className="price">$49.00</span>
                      <span className="add-cart"><Link to="/shop-details">ADD +</Link></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg">
                <div className="shop-item mb-55">
                  <div className="shop-thumb">
                    <Link to="/shop-details"><img src="img/product/shop_item05.jpg" alt="" /></Link>
                  </div>
                  <div className="shop-content">
                    <span>Dog toy’s</span>
                    <h4 className="title"><Link to="/shop-details">Pet Carriage</Link></h4>
                    <div className="shop-content-bottom">
                      <span className="price">$09.00</span>
                      <span className="add-cart"><Link to="/shop-details">ADD +</Link></span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
	)
}
export default ShopDetailsArea ;