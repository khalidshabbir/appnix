import React from 'react';

function AdoptionFaq() {
  return (

	  <section className="faq-area faq-two-bg">
        <div className="faq-two-img" />
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-6">
              <div className="faq-wrapper">
                <div className="section-title white-title mb-35">
                  <h5 className="sub-title">FAQ Question</h5>
                  <h2 className="title">History &amp; Family Adoption</h2>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Working for dog adoption
                        </button>
                      </h2>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        The best overall dog DNA test is embark breed &amp; health Kit (view atths Chewy), which
                        provides you with a breed brwn and ition on provides ancestors most dogs.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Competitions &amp; Awards
                        </button>
                      </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body">
                        The best overall dog DNA test is embark breed &amp; health Kit (view atths Chewy), which
                        provides you with a breed brwn and ition on provides ancestors most dogs.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          The puppies are 3 months old
                        </button>
                      </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body">
                        The best overall dog DNA test is embark breed &amp; health Kit (view atths Chewy), which
                        provides you with a breed brwn and ition on provides ancestors most dogs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-shape"><img src="img/images/faq_shape.png" alt="" /></div>
      </section>
  )
}

export default AdoptionFaq;
