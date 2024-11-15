import React from 'react'

const Services = () => {
  return (
   <>
    <section id="services" className="services section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>
         Custom IT Solution for Your Successful Business
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row g-5">
         <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="service-item item-cyan position-relative">
              <i className="bi bi-activity icon" />
              <div>
                <h3>Cyber Security</h3>
                <p>
                  Manager risk and accelerate your bussiness innovation and security 
                  at the same pace. With the industry's broadest portfolio of 
                  consulting and global managed security services.
                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="service-item item-orange position-relative">
              <i className="bi bi-broadcast icon" />
              <div>
                <h3>UX/UI</h3>
                <p>
                 Increase customer satisfaction and loyalty with
                  eye-catching UI UX design and devlopement services
                  tailored to enhance your user experience.
                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="service-item item-teal position-relative">
              <i className="bi bi-easel icon" />
              <div>
                <h3>Web Devlopment</h3>
                <p>
                  Full-cycle customized web app devlopement services with cross-platform
                  solution for a seamless running websites. convert more visitors into clients.
                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
            <div className="service-item item-red position-relative">
              <i className="bi bi-bounding-box-circles icon" />
              <div>
                <h3>Apps Devlopment</h3>
                <p>
                  Combine the best of web and mobile apps! Our Progressive Web Apps are built
                  using web technologies but act and feel just like a Mobile App. 
                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
            <div className="service-item item-indigo position-relative">
              <i className="bi bi-calendar4-week icon" />
              <div>
                <h3>SEO Optimization </h3>
                <p>
                 Improve your website's visibility and boost
                 your web traffic to stay ahead of the competition and keep business booming.
                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          {/* End Service Item */}
          {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay={600}>
            <div className="service-item item-pink position-relative">
              <i className="bi bi-chat-square-text icon" />
              <div>
                <h3>Dolori Architecto</h3>
                <p>
                  Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                  neque non et debitis iure. Corrupti recusandae ducimus enim.
                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div> */}
          {/* End Service Item */}
        </div>
      </div>
    </section>
   </>
  )
}

export default Services