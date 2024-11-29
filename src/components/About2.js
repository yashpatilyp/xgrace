import React from 'react';


const About2 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5 mt-5 ">
        <div className="container text-center mt-5 "data-aos="fade-up" >
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://i.pinimg.com/736x/c3/f7/de/c3f7deaed6dae920b436abef04b847e3.jpg"
                alt="About Us"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="">About Us</h2>
              <p className="">
                We deliver innovative solutions that empower businesses to excel
                in their industries, ensuring operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-5"data-aos="fade-up">
        <div className="container section-title">
          <h2 className="text-center mb-4">
            <span className="text-warning">★</span> Vision
          </h2>
          <p className="text-center ">
            To deliver solutions that align with executive goals, enabling
            leaders to achieve operational excellence and long-term vision.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-light py-5" data-aos="fade-up">
        <div className="container section-title">
          <h2 className="text-center mb-4">
            <span className="text-warning">★</span> Mission
          </h2>
          <p className="text-center text-muted">
            To set new benchmarks in the industry by executing every project
            with precision, passion, and commitment.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5" data-aos="fade-up">
        <div className="container section-title">
          <h2 className="text-center mb-5">
            <span className="text-warning">★</span> Our Values
          </h2>
          <div className="row">
            {/* Value 1 */}
            <div className="col-md-4 text-center mb-4">
              <img
                src="https://i.pinimg.com/736x/71/3c/39/713c3911a3512ea9da90b7af71bcba60.jpg"
                alt="Integrity"
                className="mb-3 rounded-circle shadow"
                width={200}
              />
              
              <h4>Integrity</h4>
              <p className="text-muted">
                We uphold the highest standards of integrity in all of our
                actions.
              </p>
            </div>
            {/* Value 2 */}
            <div className="col-md-4 text-center mb-4">
              <img
                src="https://i.pinimg.com/736x/74/93/fd/7493fd5f0bcc018c46871888643e95a1.jpg"
                alt="Innovation"
                className="mb-3 rounded-circle shadow"
                width={200}
              />
              <h4>Innovation</h4>
              <p className="text-muted">
                We pursue creative ideas that revolutionize industries.
              </p>
            </div>
            {/* Value 3 */}
            <div className="col-md-4 text-center mb-4">
              <img
                src="https://i.pinimg.com/736x/ab/e2/5a/abe25aeb74391d2b3c12ad7686943e5b.jpg"
                alt="Teamwork"
                className="mb-3 rounded-circle shadow"
                width={200}
              />
              <h4>Teamwork</h4>
              <p className="text-muted">
                We work together across boundaries to meet customer needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About2;
