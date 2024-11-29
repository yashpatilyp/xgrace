import React from 'react';

const Gallery = () => {
  return (
    <div className="container container-1 ">
      {/* Inline CSS for hover effect and image layout */}
     
         
     
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }} className='section-title'data-aos="fade-up">
      <div>
        <h2>OUR GALLERY</h2>
      </div>
    </div>
      {/* Gallery */}
      <div className="row ">
        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
          <img
            src="assets/img/computer1.jpeg"
            className="shadow-1-strong rounded"
            alt="Boat on Calm Water"
          />
          <img
            src="assets/img/computer.2.jpeg"
            className="shadow-1-strong rounded"
            alt="Wintry Mountain Landscape"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"data-aos="fade-up">
          <img
            src="assets/img/computer.3.jpeg"
            className="shadow-1-strong rounded"
            alt="Mountains in the Clouds"
          />
          <img
            src="assets/img/computer.4.jpeg"
            className="shadow-1-strong rounded"
            alt="Boat on Calm Water"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"data-aos="fade-up">
          <img
            src="assets/img/computer.5.jpeg"
            className="shadow-1-strong rounded"
            alt="Waves at Sea"
          />
          <img
            src="assets/img/computer.6.jpeg"
            className="shadow-1-strong rounded"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
