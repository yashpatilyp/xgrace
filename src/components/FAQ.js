import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggles the active index for the FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: '1. What services does your company offer?',
      answer:
        'We specialize in [list of services such as software development, app development, IT consulting, custom solutions, etc.]. Our team focuses on creating tailored solutions for businesses to enhance their digital presence and operational efficiency.',
    },
    {
      question: '2. What types of industries do you serve?',
      answer:
        'We work with a wide range of industries, including [list industries such as healthcare, finance, education, retail, technology, etc.]. Our solutions are designed to meet the specific needs of each industry.',
    },
    {
      question: '3. Do you offer custom software development?',
      answer:
        'Yes, we offer custom software development services tailored to your business requirements. Our team works closely with you to understand your goals and build a solution that meets your unique needs.',
    },
    {
      question: '4. How long does it take to develop a software solution?',
      answer:
        'The timeline for software development depends on the complexity and scope of the project. We typically provide an estimated timeline after an initial consultation and project assessment.',
    },
    {
      question: '5. What is the process for starting a project with your company?',
      answer:
        'The process begins with an initial consultation to discuss your needs and goals. From there, we work with you to create a project plan, define milestones, and get started with development.',
    },
    {
      question: '6. What technologies do you work with?',
      answer:
        'Our team is skilled in a wide range of technologies, including [list of technologies such as Python, Java, React, Angular, Node.js, .NET, etc.]. We use the best tools for your specific needs.',
    },
  ];

  return (
    <section id="faq" className="faq section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay={100}>
            <div className="faq-container">
              {faqData.map((item, index) => (
                <div
                  className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                  key={index}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{item.question}</h3>
                  <div className="faq-content" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                    <p>{item.answer}</p>
                  </div>
                  <i className={`faq-toggle bi ${activeIndex === index ? 'bi-chevron-down' : 'bi-chevron-right'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
