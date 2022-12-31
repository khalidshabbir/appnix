import React from "react";
import {Link} from 'react-router-dom'



function BlogsHome() {
  return (
    <section className="blog-area pt-110 pb-60">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-9">
          <div className="section-title text-center mb-65">
            <div className="section-icon"><img src="img/icon/pawprint.png" alt="" /></div>
            <h5 className="sub-title">Our News</h5>
            <h2 className="title">Latest News Update</h2>
            <p>The best overall dog DNA test is Embark Breed &amp; Health Kit (view at Chewy), which provides you with a
              breed brwn and information Most dogs</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="blog-post-item mb-50">
            <div className="blog-post-thumb">
              <Link to="/blog-details"><img src="img/blog/blog_post_thumb01.jpg" alt="" /></Link>
              <div className="blog-post-tag">
                <Link to="/"><i className="flaticon-bookmark-1" />Sharped</Link>
              </div>
            </div>
            <div className="blog-post-content">
              <div className="blog-post-meta">
                <ul>
                  <li><i className="far fa-user" /><Link to="/">Admin</Link></li>
                  <li><i className="far fa-bell" /> Mar 10, 2021</li>
                </ul>
              </div>
              <h3 className="title"><Link to="blog-details">Working For Dog Adoption</Link></h3>
              <p>The best overall dog test is Embark Breed &amp; Health Kit view at Chewy.</p>
              <Link to="/blog-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog-post-item mb-50">
            <div className="blog-post-thumb">
              <Link to="/blog-details"><img src="img/blog/blog_post_thumb02.jpg" alt="" /></Link>
              <div className="blog-post-tag">
                <Link to="/"><i className="flaticon-bookmark-1" />Creative</Link>
              </div>
            </div>
            <div className="blog-post-content">
              <div className="blog-post-meta">
                <ul>
                  <li><i className="far fa-user" /><Link to="/">Admin</Link></li>
                  <li><i className="far fa-bell" /> Mar 12, 2021</li>
                </ul>
              </div>
              <h3 className="title"><Link to="/blog-details">Dog Derived From an Ancient</Link></h3>
              <p>The best overall dog test is Embark Breed &amp; Health Kit view at Chewy.</p>
              <Link to="/blog-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog-post-item mb-50">
            <div className="blog-post-thumb">
              <Link to="/blog-details"><img src="img/blog/blog_post_thumb03.jpg" alt="" /></Link>
              <div className="blog-post-tag">
                <Link to="/"><i className="flaticon-bookmark-1" />Business</Link>
              </div>
            </div>
            <div className="blog-post-content">
              <div className="blog-post-meta">
                <ul>
                  <li><i className="far fa-user" /><Link to="/">Admin</Link></li>
                  <li><i className="far fa-bell" /> Mar 12, 2021</li>
                </ul>
              </div>
              <h3 className="title"><Link to="/blog-details">Ten Dog Breeds are Noted</Link></h3>
              <p>The best overall dog test is Embark Breed &amp; Health Kit view at Chewy.</p>
              <Link to="/blog-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BlogsHome;
