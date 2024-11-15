import React from 'react'

const Features2 = () => {
  return (
   <>
   <section id="features" className="features section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>
       We Are Here to Grow Your Business Exponentially
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 d-flex align-items-center">
            <ul
              className="nav nav-tabs"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-1"
                >
                  <i className="bi bi-binoculars" />
                  <div>
                    <h4 className="d-none d-lg-block">
                    Custom Software Solutions
                    </h4>
                    <p>
                    Delivers personalized, robust solutions that align with clients'
                     unique workflows, improving efficiency and productivity.
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-2"
                >
                  <i className="bi bi-box-seam" />
                  <div>
                    <h4 className="d-none d-lg-block">
                    Scalable Cloud Infrastructure
                    </h4>
                    <p>
                    Allows businesses to expand and adapt seamlessly without worrying about 
                    infrastructure limitations, saving costs on physical hardware.

                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-3"
                >
                  <i className="bi bi-brightness-high" />
                  <div>
                    <h4 className="d-none d-lg-block">
                    Advanced Cybersecurity Services
                    </h4>
                    <p>
                    End-to-end security assessments, threat detection, and data protection strategies.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
            {/* End Tab Nav */}
          </div>
          <div className="col-lg-6">
            <div
              className="tab-content"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="tab-pane fade active show" id="features-tab-1">
                <img src="assets/img/tabs-1.jpg" alt="" className="img-fluid" />
              </div>
              {/* End Tab Content Item */}
              <div className="tab-pane fade" id="features-tab-2">
                <img src="assets/img/tabs-2.jpg" alt="" className="img-fluid" />
              </div>
              {/* End Tab Content Item */}
              <div className="tab-pane fade" id="features-tab-3">
                <img src="assets/img/tabs-3.jpg" alt="" className="img-fluid" />
              </div>
              {/* End Tab Content Item */}
            </div>
          </div>
        </div>
      </div>
    </section>
     {/* Features Details Section */}
     <section id="features-details" className="features-details section">
      <div className="container">
        <div className="row gy-4 justify-content-between features-item">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <img src="assets/img/features-1.jpg" className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-5 d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="content">
              <h3> Maintenance and Support Services</h3>
              <p>
              Comprehensive post-launch support, including troubleshooting, updates, and system upgrades.<br></br> 
              Guarantees smooth operation and enhances system longevity, allowing clients to focus on growth rather than maintenance.
              </p>
              <a href="#" className="btn more-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
        {/* Features Item */}
        <div className="row gy-4 justify-content-between features-item">
          <div
            className="col-lg-5 d-flex align-items-center order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="content">
              <h3>Digital Transformation Services</h3>
              <p>
              Guides clients through digital transformation, modernizing their processes and systems.
              </p>
              <ul>
                <li>
                  <i className="bi bi-easel flex-shrink-0" /> Professional Staff
                </li>
                <li>
                  <i className="bi bi-patch-check flex-shrink-0" />{" "}
                  24/7 Support
                </li>
               
              </ul>
              <p />
              <a href="#" className="btn more-btn">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <img src="assets/img/features-2.jpg" className="img-fluid" alt="" />
          </div>
        </div>
        {/* Features Item */}
      </div>
    </section>
   </>
  )
}

export default Features2