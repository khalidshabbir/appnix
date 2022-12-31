import React from "react";
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <footer>
    <div className="footer-top-area footer-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-3">
            <div className="footer-widget">
              <div className="f-logo">
                <Link to="/"><img src="img/logo/logo.png" alt="" /></Link>
              </div>
              <div className="footer-text">
                <p>The best overall dog DNA test Embark Breed &amp; Health Kit (view at Chewy) which provides overall dog you.</p>
              </div>
              <div className="footer-contact">
                <div className="icon"><i className="fas fa-headphones" /></div>
                <div className="content">
                  <h4 className="title"><a href="tel:0987654321">747-800-9880</a></h4>
                  <span>Call Now</span>
                </div>
              </div>
              <div className="footer-social">
                <ul>
                  <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                  <li><a href="/#"><i className="fab fa-youtube" /></a></li>
                  <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="footer-widget">
              <h4 className="fw-title">Our Policies</h4>
              <div className="fw-link">
                <ul>
                  <li><Link to="/contacts">Privacy Policy</Link></li>
                  <li><Link to="/contacts">Terms and Conditions</Link></li>
                  <li><Link to="/contacts">Editorial Policy</Link></li>
                  <li><Link to="/contacts">Return Policy</Link></li>
                  <li><Link to="/contacts">IP Policy</Link></li>
                  <li><Link to="/contacts">Grievance Redressal Policy</Link></li>
                  <li><Link to="/contacts">Our Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="footer-widget">
              <h4 className="fw-title">Our Services</h4>
              <div className="fw-link">
                <ul>
                  <li><Link to="/breeder">Our Breeder</Link></li>
                  <li><Link to="/adoption">Our Adoption</Link></li>
                  <li><Link to="/contacts">Editorial Policy</Link></li>
                  <li><Link to="/contacts">Return Policy</Link></li>
                  <li><Link to="/contacts">Grievance Policy</Link></li>
                  <li><Link to="/contacts">Redressal Policy</Link></li>
                  <li><Link to="/contacts">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="footer-widget">
              <h4 className="fw-title">Instagram</h4>
              <div className="fw-insta">
                <ul>
                  <li><a href="/#"><img src="img/images/insta_img01.png" alt="" /></a></li>
                  <li><a href="/#"><img src="img/images/insta_img02.png" alt="" /></a></li>
                  <li><a href="/#"><img src="img/images/insta_img03.png" alt="" /></a></li>
                  <li><a href="/#"><img src="img/images/insta_img04.png" alt="" /></a></li>
                  <li><a href="/#"><img src="img/images/insta_img05.png" alt="" /></a></li>
                  <li><a href="/#"><img src="img/images/insta_img06.png" alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shape"><img src="img/images/footer_shape01.png" alt="" /></div>
      <div className="footer-shape shape-two"><img src="img/images/footer_shape02.png" alt="" /></div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="copyright-text">
              <p>Copyright © 2022 kutto. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <div className="footer-lang">
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="img/icon/united-states.png" alt="" /> English
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <Link className="dropdown-item" to="/"><img src="img/icon/russia.png" alt="" />Russia</Link>
                  <Link className="dropdown-item" to="/"><img src="img/icon//thailand.png" alt="" />Thailand</Link>
                  <Link className="dropdown-item" to="/"><img src="img/icon/india.png" alt="" />India</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer;
