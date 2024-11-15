import React from 'react'

const About = () => {
  return (
   <>
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <p className="who-we-are">Who We Are</p>
            <h3>The Best IT Solution With 5 Years of Experience</h3>
            <p className="fst-italic">
             Our story begins in 2017 along the streets of Bhaskar Market, Jalgaon.
             <br></br> <br></br>
             It was here where XGrace opened its first ever office and took its first step in IT industry..
             We are committed to the highest standards of quality and service, while innovating to create new experiences to client, offering affordable,
             Innovative and Timely Solutions.
             <br></br> <br></br>
            Your Search Ends Here! With over 5 years of experience in software development and digital marketing. 
            We Plan, Build and Promote New Applications so you do not have to!
            <br></br> 
            </p>
            <ul>
             
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>
                24/7 Support
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>
                Professional Staff
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>
                Fair Prices
                </span>
              </li>
            </ul>
            <a href="#" className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right" />
            </a>
          </div>
          <div
            className="col-lg-6 about-images"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="row gy-4">
              <div className="col-lg-6">
                <img
                  src="assets/img/about-company-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <img
                      src="assets/img/about-company-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-12">
                    <img
                      src="assets/img/about-company-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default About