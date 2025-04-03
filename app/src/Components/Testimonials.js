import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./../Style/Custom.css"
import test from "./../Assets/testimonial.png"

const Testimonials = () => {
  // 3 static testimonial entries (each with a subheading, image, and 2 quotes).
  const testimonialsData = [
    {
      subheading: "Our success stories",
      image: test,
      quote1: "Brickwayz Academy led me through each step of my study abroad process. Their customized approach made it so easy and stress-free!" ,
      author1: "– Student",
      quote2: "“The career guidance at Brickwayz Academy guided me towards my rightful profession and laid the foundation for my success." ,
      author2: "– Alumnus",
    },
    {
      subheading: "Our success stories",
      image: test,
      quote1: "“I found the perfect university abroad thanks to Brickwayz Academy. They provided exceptional support!”",
      author1: "– Student",
      quote2: "“The team’s commitment and expertise made my transition seamless. Highly recommend!”",
      author2: "– Alumnus",
    },
    {
      subheading: "Our success stories",
      image: test,
      quote1: "“My dream to study overseas became a reality with Brickwayz Academy’s dedicated guidance.”",
      author1: "– Student",
      quote2: "“Their training programs and career advice prepared me for every challenge.”",
      author2: "– Alumnus",
    },
  ];

  // Keep track of which testimonial is currently shown
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for next/previous
  const handlePrev = () => {
    // Wrap around if we go below 0
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    // Wrap around if we exceed the last index
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Extract the current testimonial data
  const { subheading, image, quote1, author1, quote2, author2 } =
    testimonialsData[currentIndex];

  return (
    <div className='main_container'>

    <section className="testimonials-section">
      {/* Main Heading */}
      <h2 className="testimonials-heading">Testimonials</h2>

      <div className="testimonial-container">
        {/* Left Arrow */}
        <div className="arrow-circle" onClick={handlePrev}>
          <FaChevronLeft className="arrow-icon" />
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-card">
          {/* Subheading */}

          {/* Circular Image */}
          <div className="image-wrapper">
            <img src={image} alt="Student" className="testimonial-image" />
          </div>
          <h3 className="testimonial-subheading">{subheading}</h3>

          {/* First Quote */}
          <p className="testimonial-quote">{quote1}</p>
          <p className="testimonial-author">{author1}</p>

          {/* Second Quote */}
          <p className="testimonial-quote">{quote2}</p>
          <p className="testimonial-author">{author2}</p>
        </div>

        {/* Right Arrow */}
        <div className="arrow-circle" onClick={handleNext}>
          <FaChevronRight className="arrow-icon" />
        </div>
      </div>
    </section>
    </div>
  );
}



/* Inline style objects for demonstration.
   Feel free to move these into an external CSS file. */
const styles = {
  section: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "24px",
    color: "#008080",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "left",
  },
  testimonialContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },
  arrowCircle: {
    width: "40px",
    height: "40px",
    backgroundColor: "#008080",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  card: {
    flex: "1",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  subheading: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#333",
  },
  imageWrapper: {
    margin: "0 auto 20px",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid #008080",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  quote: {
    fontSize: "16px",
    fontStyle: "italic",
    lineHeight: "1.5",
    color: "#555",
    marginBottom: "10px",
  },
  author: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#008080",
    marginBottom: "20px",
  },
};

export default Testimonials;
