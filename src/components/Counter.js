import React from 'react';



function Counter() {
   

  return (
    <section className="counter-area counter-bg" style={{backgroundImage:"url('img/bg/counter_bg.jpg')"}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
          <div className="counter-title text-center mb-65">
            <h6 className="sub-title">Why Choose Us?</h6>
            <h2 className="title">Best Service to Breeds Your Loved Dog Explore</h2>
          </div>
        </div>
      </div>
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
    </div>
  </section>

  )
}

export default Counter;
