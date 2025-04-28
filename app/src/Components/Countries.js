import React from 'react'
import "./../Style/Custom.css"
import { Link } from "react-router-dom"

import country1 from "./../Assets/country/count1.png"
import country2 from "./../Assets/country/count2.png"
import country3 from "./../Assets/country/count3.png"
import country4 from "./../Assets/country/count4.png"
import country5 from "./../Assets/country/count5.png"
import country6 from "./../Assets/country/count6.png"


import explore1 from "./../Assets/explore/explore1.png"
import explore2 from "./../Assets/explore/explore2.png"
import explore3 from "./../Assets/explore/explore3.png"
import explore4 from "./../Assets/explore/explore4.png"
import explore5 from "./../Assets/explore/explore5.png"
import explore6 from "./../Assets/explore/explore6.png"
import explore7 from "./../Assets/explore/explore7.png"
import explore8 from "./../Assets/explore/explore8.png"
import explore9 from "./../Assets/explore/explore9.png"
import explor10 from "./../Assets/explore/explor10.png"
import explor11 from "./../Assets/explore/explor11.png"
import explor12 from "./../Assets/explore/explor12.png"
import explor13 from "./../Assets/explore/explor13.png"


const Countries = () => {
  const countries = [
    { name: "United States", img: country1 },
    { name: "United Kingdom", img: country2 },
    { name: "Canada", img: country3 },
    { name: "Australia", img: country4 },
    { name: "Germany", img: country5 },
    { name: "Ireland", img: country6 },
  ];

  const explore = [
    { name: 'Agriculture & Forestry', img: explore1 },
    { name: 'Science & Professional Studies', img: explore2 },
    { name: 'Art, Design & Culture', img: explore3 },
    { name: 'Business & Management', img: explore4 },
    { name: 'Computer Science & IT', img: explore5 },
    { name: 'Education & Training', img: explore6 },
    { name: 'Engineering & Technology', img: explore7 },
    { name: 'Hospitality & Sports', img: explore8 },
    { name: 'Journalism & Media', img: explore9 },
    { name: 'Law', img: explor10 },
    { name: 'Social Sciences', img: explor11 },
    { name: 'Humanities', img: explor12 },
    { name: 'Environmental Studies', img: explor13 }
  ];


  return (
    <div className='main_container'>
      <section className="study-abroad-section">
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Link to="https://brickwayz.edumilestones.com/" className="program_linkbtn">
            Learn more
          </Link>

        </div>
        {/* Section Title */}
        <h2 className="studyabroad_title">Study Abroad</h2>

        {/* Bullet Points */}
        <ul className="studyabroad_bullet-list">
          <li><strong>University Selection:</strong> Identifying institutions that align with your academic goals and preferences.</li>
          <li><strong>Academic Planning:</strong> Streamlining the application process for a seamless experience.</li>
          <li><strong>Scholarship Counselling:</strong> Assisting you in searching and applying for funding opportunities.</li>
          <li><strong>Visa Assistance:</strong> Detailed support to guide you through the visa application process.</li>
        </ul>




        {/* Subtitle */}
        <p className="subtitle">Our global network includes top universities in:</p>

        {/* Flags Grid (EXACTLY 3 columns per row) */}
        <div className="grid">
          {countries.map((country) => (
            <div key={country.name} className="country-card">
              <div className='country_image'>
                <img
                  src={country.img}
                  alt={country.name}
                  className="flag-image"
                />
              </div>
              <p className="country-name">{country.name}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Link to="https://brickwayz.edumilestones.com/" className="program_linkbtn">
            Apply online
          </Link>
        </div>


        <section className="explore_section">
          {/* Section Title */}
          <h2 className="explore_sectiontitle">Explore Diverse Academic Disciplines</h2>

          {/* Grid Layout */}
          <div className="explore_section_grid">
            {explore.map((country) => (
              <div key={country.name} className="explore_card">
                <div className='explore_image'>
                  <img
                    src={country.img}
                    alt={country.name}
                    className="flag-image"
                  />
                </div>
                <p className="explore_name">{country.name}</p>
              </div>
            ))}
          </div>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Link to="https://brickwayz.edumilestones.com/abroad-studies/" className="program_linkbtn">
              Learn more
            </Link>
          </div>
        </section>

        <h2 className="chooseus__heading">Training Programs</h2>
        <div className="chooseus__section">
          <p className="chooseus__text"><strong>Standardized Test Preparation:</strong> Complete coaching for tests like IELTS, TOEFL, GRE, GMAT, and SAT, ensuring you achieve the scores needed for your desired programs.</p>
          <p className="chooseus__text"><strong>STEM Learning:</strong> Attend workshops that incorporate Science, Technology, Engineering, and Math with hands-on projects.</p>
          <p className="chooseus__text"><strong>Robotics & Coding:</strong> Explore the realm of technology with interactive coding classes and robotics challenges.</p>
          <p className="chooseus__text"><strong>Creative Building:</strong> Develop creativity through creative building activities that promote problem solving.</p>
          <p className="chooseus__text"><strong>Holiday Camps:</strong> Engage in holiday camps that blend learning with fun activities.</p>
        </div>

      </section>
    </div>
  );
}



export default Countries;
