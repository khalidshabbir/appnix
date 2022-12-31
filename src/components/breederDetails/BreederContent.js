import React from 'react';
import {Link} from 'react-router-dom'

function BreederContent() {
  return (
	   <section className="breeder-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="breeder-details-content">
                <h4 className="title">Siberian Husky</h4>
                <p>The domestic dog is a doiated dendant of the wolf. The dog t is derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nesdarest living relative. The dog was the first species to be domesticated, by
                  hunter–gateiherers. These will include the core vaccines, which are in a series of three: at 6-, 12-, and 16 weeks old.</p>
                <p>The dog was the first species to be domesticated, by hunter–gateiherers. These will include and the modern grey wolf is the dog's.</p>
                <div className="breeder-details-img">
                  <img src="img/images/breeder_details.jpg" alt="" />
                </div>
                <h4 className="title">About Bio</h4>
                <p>The domestic dog is doiated dendant of the wolf. The dog t is derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nesdarest living relative. The dog was the first species to be dometed, by hunter.</p>
                <div className="breeder-dog-info">
                  <h5 className="title">Dog Information</h5>
                  <div className="row">
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Gender:</h6>
                        <span>Male</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Age:</h6>
                        <span>1 year</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Color:</h6>
                        <span>White</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Pet ID:</h6>
                        <span>09481</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Size:</h6>
                        <span>Med. 26-60 lbs</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Gender:</h6>
                        <span>Male</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>City:</h6>
                        <span>New York</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Breed:</h6>
                        <span>Husky</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/contacts" className="btn">Apply Today <img src="img/icon/w_pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="breeder-sidebar">
                <div className="widget breeder-widget">
                  <div className="breeder-widget-title mb-20">
                    <h5 className="title">Find Your Pets</h5>
                  </div>
                  <form  className="sidebar-find-pets">
                    <div className="form-grp search-box">
                      <input type="text" placeholder="Search" />
                      <button><i className="fas fa-search" /></button>
                    </div>
                    <div className="form-grp">
                      <i className="flaticon-location" />
                      <input type="text" placeholder="Location" />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="flaticon-color-palette" />
                          <input type="text" placeholder="White" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="far fa-calendar-alt" />
                          <input type="text" defaultValue={2021} />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <i className="flaticon-sex" />
                      <select name="name" className="selected">
                        <option value>Female</option>
                        <option value>Male</option>
                        <option value>Adoption</option>
                        <option value>Breeder</option>
                      </select>
                    </div>
                    <div className="form-grp">
                      <i className="fas fa-dollar-sign" />
                      <select name="name" className="selected">
                        <option value>Price</option>
                        <option value>$100 - $150</option>
                        <option value>$150 - $250</option>
                        <option value>$250 - $350</option>
                        <option value>$350 - $550</option>
                        <option value>$550 - $1000</option>
                      </select>
                    </div>
                    <div className="form-grp">
                      <i className="flaticon-plus-18-movie" />
                      <select name="name" className="selected">
                        <option value>Adult :</option>
                        <option value>6 Month</option>
                        <option value>9 Month</option>
                        <option value>1 Year</option>
                      </select>
                    </div>
                    <button className="btn">Find New Pets</button>
                  </form>
                </div>
                <div className="widget sidebar-newsletter">
                  <div className="sn-icon">
                    <img src="img/icon/sn_icon.png" alt="" />
                  </div>
                  <div className="sn-title">
                    <h4 className="title">Subscribe Newsletter</h4>
                    <p>Sign-up For Latest News</p>
                  </div>
                  <form  className="sn-form">
                    <input type="text" placeholder="Enter Your Email" />
                    <button className="btn">subscribe</button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BreederContent;
