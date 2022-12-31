import React from 'react';

function BlogNewsletter() {
  return (
	  <div className="widget sidebar-newsletter">
                  <div className="sn-icon">
                    <img src="img/icon/sn_icon.png" alt="" />
                  </div>
                  <div className="sn-title">
                    <h4 className="title">Subscribe Newsletter</h4>
                    <p>Sign-up For Latest News</p>
                  </div>
                  <form className="sn-form">
                    <input type="text" placeholder="Enter Your Email" />
                    <button className="btn">subscribe</button>
                  </form>
                </div>
  )
}

export default BlogNewsletter;
