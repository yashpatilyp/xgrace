import React from 'react'

const Contact = () => {
  return (
   <>
   <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
        If You Have Any Query, Feel Free To Contact Us
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <i className="bi bi-geo-alt" />
              <h3>Address</h3>
              <p>Office No.1, Radha Heights, Near HP Petrol Pump, Ravet Aundh Road, <br/><center>Wakad, Pune, Maharashtra, India</center></p>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-lg-3 col-md-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <i className="bi bi-telephone" />
              <h3>Call Us</h3>
              <p>+91 8007255573</p>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-lg-3 col-md-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <i className="bi bi-envelope" />
              <h3>Email Us</h3>
              <p>info@xgracetech.com</p>
            </div>
          </div>
          {/* End Info Item */}
        </div>
        <div className="row gy-4 mt-1">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
          <iframe
  title="Google Maps Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726355.7954052878!2d70.33215312014231!3d18.98473425552311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f12466d30f%3A0xf0166ae4a56e357e!2sRadhe%20Heights!5e0!3m2!1sen!2sin!4v1730962579717!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: "0", width: "100%", height: "400px" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
          {/* End Google Maps */}
          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
   </>
  )
}

export default Contact