import React from 'react'

const Features = () => {
  return (
    <>
    <section
      id="featured-services"
      className="featured-services section light-background"
    >
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-xl-4 col-lg-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-briefcase" />
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">
                    Lorem Ipsum
                  </a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-xl-4 col-lg-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-card-checklist" />
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">
                    Dolor Sitema
                  </a>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip exa
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-xl-4 col-lg-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-bar-chart" />
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">
                    Sed ut perspiciatis
                  </a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum
                </p>
              </div>
            </div>
          </div>
          {/* End Service Item */}
        </div>
      </div>
    </section>
    </>
  )
}

export default Features