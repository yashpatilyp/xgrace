import React from 'react'

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="pricing section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>
            We are Offering Competitive Prices for Our Clients
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
              <div className="pricing-item">
                <h3>Basic Plan</h3>
                <p className="description">
                  FOR SMALL SIZE BUSINESS
                </p>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <a href="#" className="cta-btn">
                  Start a free trial
                </a>
                <p className="text-center small">No credit card required</p>
                <ul>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>HTML5 & CSS3</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Bootstrap v5</span>
                  </li>


                  <li className="na">
                    <i className="bi bi-x" />{" "}
                    <span>Cross-Browser Support </span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x" />{" "}
                    <span>Responsive Layout</span>
                  </li>

                </ul>
              </div>
            </div>

            {/* Standard Plan*/}
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
              <div className="pricing-item">
                <h3>Standard Plan</h3>
                <p className="description">
                  FOR MEDIUM SIZE BUSINESS
                </p>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <a href="#" className="cta-btn">
                  Start a free trial
                </a>
                <p className="text-center small">No credit card required</p>
                <ul>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>HTML5 & CSS3</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Bootstrap v5</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Responsive Layout</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x" />{" "}
                    <span>Cross-Browser Support </span>
                  </li>
                  

                </ul>
              </div>
            </div>
            
            
            {/* Advanced Plan*/}
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
              <div className="pricing-item">
                <h3>Advanced Plan</h3>
                <p className="description">
                  FOR LARGE SIZE BUSINESS
                </p>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <a href="#" className="cta-btn">
                  Start a free trial
                </a>
                <p className="text-center small">No credit card required</p>
                <ul>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>HTML5 & CSS3</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Bootstrap v5</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Responsive Layout</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span> Cross-Browser Support</span>
                  </li>


          
                </ul>
              </div>
            </div>
            {/* End Pricing Item */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing