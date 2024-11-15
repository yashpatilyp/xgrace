import React from 'react'

const Hero = () => {
  return (
    <>
     <section id="hero" className="hero section">
      <div className="hero-bg">
        <img src="assets/img/hero-bg-light.webp" alt="" />
      </div>
      <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-up">
            Welcome to <span>XGrace</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay={100}>
          Creative & Innovative Digital Solution
            <br />
          </p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
            <a href="#about" className="btn-get-started">
              Get Started
            </a>
            {/* <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle" />
              <span>Watch Video</span>
            </a> */}
          </div>
          <img
            src="assets/img/hero-services-img.webp"
            className="img-fluid hero-img"
            alt=""
            data-aos="zoom-out"
            data-aos-delay={300}
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero