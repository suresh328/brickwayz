import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import "./../Style/Custom.css"

const FAQ = () => {
   // The five questions & answers from your screenshot
   const faqData = [
    {
      question: "What services does Brickwayz Academy offer?",
      answer: "Our services include career counseling, admissions guidance, visa assistance, and more."
    },
    {
      question: "How can career counselling benefit me?",
      answer: "Career counselling helps you identify your strengths and interests, guiding you toward suitable career paths. We offer personalized assessments, academic planning, and professional development support."
    },
    {
      question: "Which countries can I consider for studying abroad through Brickwayz Academy?",
      answer: "We have partnerships with institutions in the USA, UK, Canada, Australia, and several European countries."
    },
    {
      question: "What training programs are available at Brickwayz Academy?",
      answer: "We offer specialized training programs in test preparation (IELTS, TOEFL, GRE, GMAT) and language proficiency, among others."
    },
    {
      question: "How do I get started with Brickwayz Academy's services?",
      answer: "Contact us via phone or email to schedule a consultation. Our team will provide personalized guidance tailored to your educational and career aspirations."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='main_container'>

    <section className="faq-section">
      <h2 className="faq-title">FAQs</h2>
      <p className="faq-subtitle">Frequently Asked Questions</p>
      
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            {/* Question Row */}
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <div className="question-text">
                <span className="question-number">{index + 1}. </span>
                {item.question}
              </div>
              {/* Icon on the right */}
              <div className="icon-wrapper">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>

            {/* Answer (shown if active) */}
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Optional Additional Text Below */}
      <p className="contact-text">
        Contact us via phone or email to schedule a consultation. Our team will provide personalized guidance
        tailored to your educational and career aspirations.
      </p>
      <p className="form-text">
      For more information or specific inquiries, please reach out to us directly:
      </p>
    </section>
    </div>
  );
}



export default FAQ


