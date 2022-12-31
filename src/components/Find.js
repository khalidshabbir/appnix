import React from 'react';
import {Link} from 'react-router-dom'


function Find() {
  return (
    <div className="find-area">
    <div className="container custom-container">
      <div className="row">
        <div className="col-12">
          <form >
            <div className="find-wrap">
              <div className="location">
                <i className="flaticon-location" />
                <input type="text" defaultValue="Enter City, State. or Zip" />
              </div>
              <div className="find-category">
                <ul>
                  <li><Link to="/shop"><i className="flaticon-dog" /> Find Your Dog</Link></li>
                  <li><Link to="/shop"><i className="flaticon-happy" /> Find Your Cat</Link></li>
                  <li><Link to="/shop"><i className="flaticon-dove" /> Find Your Birds</Link></li>
                </ul>
              </div>
              <div className="other-find">
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Find Other Pets
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item" to="/shop">Find Your Dog</Link>
                    <Link className="dropdown-item" to="/shop">Find Your Cat</Link>
                    <Link className="dropdown-item" to="/shop">Find Your Birds</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Find;
