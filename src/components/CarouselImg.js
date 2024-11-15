import React from "react";

const CarouselImg = () => {
  return (
    <div id="carouselExample" className="carousel slide mt-5 corosell" data-bs-ride="carousel">
      <div className="carousel-inner">
        
        <div className="carousel-item active" data-bs-interval="3000">
          <img src="assets/img/carousel-1.jpg" className="d-block w-100" alt="carousel-1" />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
          <h1 data-aos="fade-up">
            Welcome to <span>XGrace</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay={100}>
          Creative & Innovative Digital Solution
            <br />
          </p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img src="assets/img/carousel-2.jpg" className="d-block w-100" alt="carousel-2" />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
          <h1 data-aos="fade-up">
              Affordable, Innovative & Timely!
            </h1>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselImg;
