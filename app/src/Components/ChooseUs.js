import React from 'react'
import "./../Style/Custom.css"
import choose1 from "./../Assets/chooseusicon/virus-on-hand.png"
import choose2 from "./../Assets/chooseusicon/global-protection.png"
import choose3 from "./../Assets/chooseusicon/global-businessman.png"
import choose4 from "./../Assets/chooseusicon/call.png"
import choose5 from "./../Assets/chooseusicon/artificial-intelligence.png"

const ChooseUs = () => {


  return (
    <div className="chooseus__container">
      {/* Training Programs Section */}
      <h2 className="chooseus__heading">Training Programs</h2>
      <div className="chooseus__section">
        <p className="chooseus__text"><strong>Standardized Test Preparation:</strong> Complete coaching for tests like IELTS, TOEFL, GRE, GMAT, and SAT, ensuring you achieve the scores needed for your desired programs.</p>
        <p className="chooseus__text"><strong>STEM Learning:</strong> Attend workshops that incorporate Science, Technology, Engineering, and Math with hands-on projects.</p>
        <p className="chooseus__text"><strong>Robotics & Coding:</strong> Explore the realm of technology with interactive coding classes and robotics challenges.</p>
        <p className="chooseus__text"><strong>Creative Building:</strong> Develop creativity through creative building activities that promote problem solving.</p>
        <p className="chooseus__text"><strong>Holiday Camps:</strong> Engage in holiday camps that blend learning with fun activities.</p>
      </div>

      {/* Why Choose Us Section */}
      <h2 className="chooseus__heading">Why Choose Us?</h2>
      <div className="chooseus__features">

        {/* Feature 1 */}
        <div className='di_fele'>
          <div className="chooseus__feature">
            <div className="chooseus__diamond">
              <div className='erea'>
                <img src={choose1} alt="End" className="chooseus__image" />
              </div>
              <h4 className="chooseus__title">End-to-End Solutions</h4>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="chooseus__feature">
            <div className="chooseus__diamond">
              <img src={choose2} alt="Global" className="chooseus__image" />
              <h4 className="chooseus__title">Global Partnerships</h4>
            </div>
          </div>
        </div>

        {/* Center Feature */}
        <div className='di_fele2' >
          <div className="chooseus__feature chooseus__feature--center">
            <div className="chooseus__diamond rrr">
              <img src={choose3} alt="Expert" className="chooseus__image" />
              <h4 className="chooseus__title" >Expert Team</h4>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className='di_fele '>
          <div className="chooseus__feature chooseus__feature">
            <div className="chooseus__diamond center2">
              <img src={choose4} alt="Hands" className="chooseus__image" />
              <h4 className="chooseus__title" >Hands-On Training<br /> Programs</h4>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="chooseus__feature">
            <div className="chooseus__diamond">
              <img src={choose5} alt="Proven" className="chooseus__image" />
              <h4 className="chooseus__title" >Proven Success</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChooseUs;

