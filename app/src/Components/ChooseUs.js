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


      {/* Why Choose Us Section */}
      <div className='All_Heading'>

        <h2 >Why Choose Us?</h2>
      </div>
      <div className="chooseus__features">

        {/* Feature 1 */}
        <div className='di_fele'>
          <div className="chooseus__feature">
            <div className="chooseus__diamond">
              <div className="chooseus__card">
                <div className="chooseus__card-front">
                  <div className='erea'>
                    <img src={choose4} alt="End" className="chooseus__image" />
                  </div>
                  <h4 className="chooseus__title">End-to-End Solutions:</h4>
                </div>
                <div className="chooseus__card-back">
                  <div className='erea'>
                    <img src={choose4} alt="End" className="chooseus__image" />
                  </div>
                  <p className="chooseushovertext">
                    From career guidance to study abroad assistance & skill enhancement, we provide complete solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="chooseus__feature">
            <div className="chooseus__diamond">
              <div className="chooseus__card">
                <div className="chooseus__card-front">
                  <div className='erea'>
                    <img src={choose3} alt="End" className="chooseus__image" />
                  </div>
                  <h4 className="chooseus__title">Global Partnerships:</h4>
                </div>
                <div className="chooseus__card-back">
                  <div className='erea'>
                    <img src={choose3} alt="End" className="chooseus__image" />
                  </div>
                  <p className="chooseushovertext">
                    Collaborations with prestigious institutions from across the globe to offer you varied opportunities.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Center Feature */}
        <div className='di_fele2' >
          <div className="chooseus__feature chooseus__feature--center">
            <div className="chooseus__diamond rrr">
              <div className="chooseus__card">
                <div className="chooseus__card-front">
                  <div className='erea'>
                    <img src={choose5} alt="End" className="chooseus__image" />
                  </div>
                  <h4 className="chooseus__title">Expert Team:</h4>
                </div>
                <div className="chooseus__card-back">
                  <div className='erea'>
                    <img src={choose5} alt="End" className="chooseus__image" />
                  </div>
                  <p className="chooseushovertext">
                  Our experts possess extensive experience and individualized attention for each student.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className='di_fele '>
          <div className="chooseus__feature chooseus__feature">
            <div className="chooseus__diamond center2">
              <div className="chooseus__card">
                <div className="chooseus__card-front">
                  <div className='erea'>
                    <img src={choose1} alt="End" className="chooseus__image" />
                  </div>
                  <h4 className="chooseus__title">Hands-On Training <br/>Programs:</h4>
                </div>
                <div className="chooseus__card-back">
                  <div className='erea'>
                    <img src={choose1} alt="End" className="chooseus__image" />
                  </div>
                  <p className="chooseushovertext">
                  Practical, experience-based learning in STEM, robotics, and creative building to equip children with future-ready skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="chooseus__feature">
            <div className="chooseus__diamond">
            <div className="chooseus__card">
                <div className="chooseus__card-front">
                  <div className='erea'>
                    <img src={choose2} alt="End" className="chooseus__image" />
                  </div>
                  <h4 className="chooseus__title">Proven Success:</h4>
                </div>
                <div className="chooseus__card-back">
                  <div className='erea'>
                    <img src={choose2} alt="End" className="chooseus__image" />
                  </div>
                  <p className="chooseushovertext">
                  We have a proven success rate of guiding students to accomplish their education and career goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChooseUs;

