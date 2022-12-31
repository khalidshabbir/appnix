import React from 'react';
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import Catagories from './Catagories'
import SideBarTitle from './SideBarTitle'
import BlogNewsletter from './BlogNewsletter'

function BlogContent() {
  return (


      <section className="standard-blog-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="standard-blog-item">
                <div className="standard-blog-thumb">
                  <Link to="/blog-details"><img src="img/blog/blog_thumb01.jpg" alt="" /></Link>
                </div>
                <div className="standard-blog-content">
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
                  <h2 className="title"><Link to="/blog-details">Online pet everything your pet needs</Link></h2>
                  <p>The domestic dog is a domesticated descendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers.</p>
                  <Link to="/blog-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
              <div className="standard-blog-item">
                <div className="standard-blog-thumb">
                  <Link to="/blog-details"><img src="img/blog/blog_thumb02.jpg" alt="" /></Link>
                </div>
                <div className="standard-blog-content">
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
                  <h2 className="title"><Link to="/blog-details">Pet needs special food like human foods</Link></h2>
                  <p>The domestic dog is a domesticated descendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers.</p>
                  <Link to="/blog-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
              <div className="standard-blog-item">
                <div className="standard-blog-thumb">
                  <Link to="/blog-details"><img src="img/blog/blog_thumb03.jpg" alt="" /></Link>
                </div>
                <div className="standard-blog-content">
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
                  <h2 className="title"><Link to="/blog-details">Special grades for carry-home food</Link></h2>
                  <p>The domestic dog is a domesticated descendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers.</p>
                  <Link to="/blog-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <aside className="blog-sidebar">
               <SearchBar/>
                <Catagories/>
                <div className="widget">
                  <h4 className="sidebar-title">Recent Post</h4>
                    <SideBarTitle/>
                </div>
                <BlogNewsletter/>
              </aside>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BlogContent;
