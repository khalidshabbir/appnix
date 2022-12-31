import React from 'react'

function HomeCounter() {
  return (
	<div className="row justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="counter-item">
            <h2 className="count"><span className="odometer">75</span>%</h2>
            <p>dogs are first bred</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="counter-item">
            <h2 className="count"><span className="odometer">259</span>+</h2>
            <p>Most dogs are first</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="counter-item">
            <h2 className="count"><span className="odometer">39</span>K</h2>
            <p>Dog Breeding</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="counter-item">
            <h2 className="count"><span className="odometer">45</span>+</h2>
            <p>Years Of History</p>
          </div>
        </div>
      </div>
  )
}

export default HomeCounter
