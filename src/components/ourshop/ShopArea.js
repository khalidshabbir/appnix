import React from 'react';
import {Link} from 'react-router-dom'

function ShopArea() {
  return (
	  <div className="shop-area pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-8 order-2 order-lg-0">
              <aside className="shop-sidebar">
                <div className="widget">
                  <div className="sidebar-search">
                    <form>
                      <input type="text" placeholder="Search ..." />
                      <button type="submit"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="sidebar-title">Category</h4>
                  <div className="shop-cat-list">
                    <ul>
                      <li><Link to="/shop">Squeaky <span>+</span></Link></li>
                      <li><Link to="/shop">Dog Food <span>+</span></Link></li>
                      <li><Link to="/shop">Dog-Kit <span>+</span></Link></li>
                      <li><Link to="/shop">Dog Home <span>+</span></Link></li>
                      <li><Link to="/shop">Safety-Suits <span>+</span></Link></li>
                      <li><Link to="/shop">Pet Protect <span>+</span></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="sidebar-title">Top Brand</h4>
                  <div className="shop-brand-list">
                    <ul>
                      <li><Link to="/shop">Geco</Link></li>
                      <li><Link to="/shop">Carnation</Link></li>
                      <li><Link to="/shop">Suppke</Link></li>
                      <li><Link to="/shop">WeBeyond</Link></li>
                      <li><Link to="/shop">Edstudy</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="sidebar-title">Filter by Price</h4>
                  <div className="price_filter">
                    <div id="slider-range" />
                    <div className="price_slider_amount">
                      <span>Price :</span>
                      <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                      <input type="submit" className="btn" defaultValue="Filter" />
                    </div>
                  </div>
                </div>
                <div className="widget shop-widget-banner">
                  <Link to="/shop"><img src="img/product/shop_add.jpg" alt="" /></Link>
                </div>
              </aside>
            </div>
            <div className="col-lg-9">
              <div className="shop-wrap">
                <h4 className="title">Shop</h4>
                <div className="shop-page-meta mb-30">
                  <div className="shop-grid-menu">
                    <ul>
                      <li className="active"><a href="/#"><i className="fas fa-th" /></a></li>
                      <li><a href="/#"><i className="fas fa-list" /></a></li>
                    </ul>
                  </div>
                  <div className="shop-showing-result">
                    <p>Total Items 1-12 of 13</p>
                  </div>
                  <div className="shop-show-list">
                    <form>
                      <label htmlFor="show">Show</label>
                      <select id="show" className="selected">
                        <option value>08</option>
                        <option value>12</option>
                        <option value>16</option>
                        <option value>18</option>
                        <option value>20</option>
                      </select>
                    </form>
                  </div>
                  <div className="shop-short-by">
                    <form>
                      <label htmlFor="shortBy">Sort By</label>
                      <select id="shortBy" className="selected">
                        <option value>Sort by latest</option>
                        <option value>Low to high</option>
                        <option value>High to low</option>
                        <option value>Popularity</option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6">
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
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item02.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Squeaky Dog</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">$19.00</span>
                          <span className="add-cart"><Link to="shop-details">ADD +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
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
                  <div className="col-lg-4 col-sm-6">
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
                  <div className="col-lg-4 col-sm-6">
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
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item06.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Squeaky Dog</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">$16.00</span>
                          <span className="add-cart"><Link to="/shop-details">ADD +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item07.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Carriage Dog</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">$18.00</span>
                          <span className="add-cart"><Link to="/shop-details">ADD +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item08.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Yoda Carriage</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">$12.00</span>
                          <span className="add-cart"><Link to="/shop-details">ADD +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item09.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Pet Knit Knacks</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">$32.00</span>
                          <span className="add-cart"><Link to="/shop-details">ADD +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop-page-meta">
                  <div className="shop-grid-menu">
                    <ul>
                      <li className="active"><a href="/#"><i className="fas fa-th" /></a></li>
                      <li><a href="/#"><i className="fas fa-list" /></a></li>
                    </ul>
                  </div>
                  <div className="shop-showing-result">
                    <p>Total Items 1-12 of 13</p>
                  </div>
                  <div className="shop-show-list">
                    <form>
                      <label htmlFor="bottomShow">Show</label>
                      <select id="bottomShow" className="selected">
                        <option value>08</option>
                        <option value>12</option>
                        <option value>16</option>
                        <option value>18</option>
                        <option value>20</option>
                      </select>
                    </form>
                  </div>
                  <div className="shop-pagination">
                    <ul>
                      <li className="active"><Link to="/shop">1</Link></li>
                      <li><Link to="/shop">2</Link></li>
                      <li><Link to="/shop"><i className="fas fa-angle-double-right" /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ShopArea;
