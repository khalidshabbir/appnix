import React from "react";
function Newsletter(){
    return(
        <div className="newsletter-area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsletter-wrap">
                <div className="newsletter-content">
                  <h2 className="title">Newsletter For</h2>
                  <p><span>*</span> Do Not Show Your Email.</p>
                </div>
                <div className="newsletter-form">
                  <form >
                    <input type="email" placeholder="Enter Your Email..." />
                    <button type="submit" className="btn">Subscribe</button>
                  </form>
                </div>
                <div className="newsletter-shape"><img src="img/images/newsletter_shape01.png" alt="" /></div>
                <div className="newsletter-shape shape-two"><img src="img/images/newsletter_shape02.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Newsletter