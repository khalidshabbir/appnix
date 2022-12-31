import React from 'react';
import ContactAddress from './ContactAddress'

function ContactForm() {
  return (

	  <section className="contact-area pt-110 pb-110">
        <div className="container">
          <div className="container-inner-wrap">
            <div className="row justify-content-center justify-content-lg-between">
              <div className="col-lg-6 col-md-8 order-2 order-lg-0">
                <div className="contact-title mb-20">
                  <h5 className="sub-title">Contact Us</h5>
                  <h2 className="title">Let's Talk Question<span>.</span></h2>
                </div>
                <div className="contact-wrap-content">
                  <p>The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey.</p>
                  <form className="contact-form">
                    <div className="form-grp">
                      <label htmlFor="name">Your Name <span>*</span></label>
                      <input type="text" id="name" placeholder="Jon Deo..." />
                    </div>
                    <div className="form-grp">
                      <label htmlFor="email">Your Email <span>*</span></label>
                      <input type="text" id="email" placeholder="info.example@.com" />
                    </div>
                    <div className="form-grp">
                      <label htmlFor="message">Your Message <span>*</span></label>
                      <textarea name="message" id="message" placeholder="Opinion..." defaultValue={""} />
                    </div>
                    <div className="form-grp checkbox-grp">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Don’t show your email address</label>
                    </div>
                    <button type="button" className="btn rounded-btn">Send Now</button>
                  </form>
                </div>
              </div>

              <ContactAddress/>

            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactForm;
