import React from 'react'

const MoreFeatures = () => {
  return (
    <>
      <section id="more-features" className="more-features section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <h3>Why X-Grace</h3>
              <p>
                X-Grace in project development can be invaluable for its advanced data visualization capabilities, enabling precise graph plotting and data analysis. It supports detailed customization, making it ideal for scientific and engineering projects that require clear, high-quality visual representations of data .
              </p>
              <div className="row">
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-easel flex-shrink-0" />
                  <div>
                    <h4>Advanced Plot Customization: </h4>
                    <p>
                    Enables detailed control over plot elements like labels, colors, and scales for high-quality presentations.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-patch-check flex-shrink-0" />
                  <div>
                    <h4>Multiple File Format Support: </h4>
                    <p>
                    Exports graphs in various formats (EPS, PDF, PNG) suitable for publications or presentations.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0" />
                  <div>
                    <h4>Scripting Capability:</h4>
                    <p>
                     Allows automation through scripting, saving time on repetitive tasks and enhancing productivity.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0" />
                  <div>
                    <h4>Data Handling Flexibility:</h4>
                    <p>
                   Supports complex datasets and various data formats, ideal for scientific and engineering applications.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
              </div>
            </div>
            <div
              className="features-image col-lg-5 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <img src="assets/img/features-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MoreFeatures