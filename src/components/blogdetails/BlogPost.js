import React from 'react';
import {Link} from 'react-router-dom'

function BlogPost() {
  return (
	  <section className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="standard-blog-item mb-50">
                <div className="standard-blog-thumb">
                  <img src="img/blog/blog_thumb01.jpg" alt="" />
                </div>
                <div className="standard-blog-content blog-details-content">
                  <div className="blog-post-meta">
                    <ul>
                      <li className="tags"><i className="flaticon-bookmark-1" />
                        <a href="/#">Siberian Husky , </a>
                        <a href="/#">Breed</a>
                      </li>
                      <li><i className="far fa-user" /><a href="/#">Admin</a></li>
                      <li><i className="far fa-bell" /> Mar 10, 2021</li>
                    </ul>
                  </div>
                  <h4 className="title">Online Pet Everything Your Pet Needs</h4>
                  <p>The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old.</p>
                  <p>Within a few hours 3-5 days after vaccion for the dog to begin developing immunity. Until a puppy has received its entire vaccine series, or until an adult dog is up to date on vaccines, their exposure to parvovirus should be minimized as much as possible.</p>
                  <blockquote>
                    “ Dog to begin developing immunity. Until a puppy has receivd its entire vaccine series, or until an adult dog is up to date on vaines their exposure to parvovirus ”
                    <footer>Rosalina D.William</footer>
                  </blockquote>
                  <p>Non-core vaccines are given dependng on the dog's exposure risk. These include vaccines against Bordetella
                    bronchiseptica, Borrelia burgdorferi and Leptosira bacteria.The dog was the first species to be domesticated, by
                    hunter–gatherers include the core vaccines.</p>
                  <div className="blog-details-list">
                    <ul>
                      <li><a href="/#">Best Online Pet Until Need</a> – an app becomes ans interactive story that can engage users. Designers have tools to make</li>
                      <li><a href="/#">Until a puppy has receivd entire vaccine</a> – an app becomes ans interactive story that can engage users. Designers have tools to make</li>
                    </ul>
                  </div>
                  <p>Doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf the dog's nrest living relative. The dog was the first species to be dticaed, by hunte–gatherers. These will include the core vaccines, which are administered.</p>
                  <div className="blog-details-img">
                    <div className="row">
                      <div className="col-md-6">
                        <img src="img/blog/blog_details_img01.jpg" alt="" />
                      </div>
                      <div className="col-md-6">
                        <img src="img/blog/blog_details_img02.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <p>Non-core vaccines are given dependng on the dog's exposure risk. These include vaccines against Bordetella
                    bronchiseptica, Borrelia burgdorferi and Leptosira bacteria.The dog was the first species to be domesticated, by
                    hunter–gatherers include the core vaccines.</p>
                  <div className="blog-line" data-background="img/blog/blog_item_line.png" />
                  <div className="blog-details-bottom">
                    <div className="blog-details-tags">
                      <ul>
                        <li className="title"><i className="fas fa-tags" /> Tags :</li>
                        <li><a href="/#">Business</a></li>
                        <li><a href="/#">Work</a></li>
                        <li><a href="/#">Knowledge</a></li>
                        <li><a href="/#">Online</a></li>
                      </ul>
                    </div>
                    <div className="blog-details-social">
                      <ul>
                        <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="avatar-post mt-50 mb-50">
                <div className="post-avatar-img">
                  <img src="img/blog/post_avatar_img.png" alt="img" />
                </div>
                <div className="post-avatar-content">
                  <h5>Thomas Herlihy</h5>
                  <p>Non-core vaccines are given dependng on the dog's exposure risk. These include vaccines against Bordetella.</p>
                  <div className="blog-details-social">
                    <ul>
                      <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="blog-next-prev">
                <ul>
                  <li className="blog-prev">
                    <a href="/#"><img src="img/icon/left_arrow.png" alt="img" />Previous Post</a>
                  </li>
                  <li className="blog-next">
                    <a href="/#">Next Post<img src="img/icon/right_arrow.png" alt="img" /></a>
                  </li>
                </ul>
              </div>
              <div className="comment-reply-box">
                <h5 className="title">Leave a Reply</h5>
                <form className="comment-reply-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="text" placeholder="Author *" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="email" placeholder="Your Email *" />
                      </div>
                    </div>
                  </div>
                  <div className="form-grp">
                    <textarea name="message" placeholder="Type Comment Here..." defaultValue={""} />
                  </div>
                  <div className="form-grp checkbox-grp">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Don’t show your email address</label>
                  </div>
                  <button type="submit" className="btn">Submit now</button>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="blog-sidebar">
                <div className="widget">
                  <h4 className="sidebar-title">Search</h4>
                  <div className="sidebar-search">
                    <form>
                      <input type="text" placeholder="Search ..." />
                      <button type="submit"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="sidebar-title">Categories</h4>
                  <div className="sidebar-cat-list">
                    <ul>
                      <li><a href="/#">Siberian Husky <i className="fas fa-angle-double-right" /></a></li>
                      <li><a href="/#">German Sherped <i className="fas fa-angle-double-right" /></a></li>
                      <li><a href="/#">French Bulldog <i className="fas fa-angle-double-right" /></a></li>
                      <li><a href="/#">Golden Retriever <i className="fas fa-angle-double-right" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="sidebar-title">Recent Post</h4>
                  <div className="rc-post-list">
                    <ul>
                      <li>
                        <div className="rc-post-thumb">
                          <Link to="/blog-details"><img src="img/blog/rc_post_thumb01.jpg" alt="" /></Link>
                        </div>
                        <div className="rc-post-content">
                          <h5 className="title"><Link to="/blog-details">Best Online Pet Everything Your Pet Needs</Link></h5>
                          <div className="rc-post-meta">
                            <ul>
                              <li><i className="far fa-calendar-alt" /> April 15, 2021</li>
                              <li>By <a href="/#">Admin</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="rc-post-thumb">
                          <Link to="/blog-details"><img src="img/blog/rc_post_thumb02.jpg" alt="" /></Link>
                        </div>
                        <div className="rc-post-content">
                          <h5 className="title"><Link to="blog-details">Pet Needs Special Food like Human Foods</Link></h5>
                          <div className="rc-post-meta">
                            <ul>
                              <li><i className="far fa-calendar-alt" /> October 15, 2021</li>
                              <li>By <a href="/#">Admin</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
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
              </aside>
            </div>
          </div>
        </div>
      </section>

  )
}

export default BlogPost;
