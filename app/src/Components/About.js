import React from 'react'

import aboutrec from "./../Assets/aboutrect.png"
import study_about from "./../Assets/study_about.png"
import study_girl from "./../Assets/study_girls.png"
import "./../Style/Custom.css"


import icon1 from "./../Assets/icons/bulb.png"
import icon2 from "./../Assets/icons/manager.png"
import icon3 from "./../Assets/icons/call.png"
const About = () => {
  return (
    <>
      <div className="main_container">
        <div className="supports">
          <div className="support_card">
            <div className="icon">
              <img src={icon1} />
            </div>
            <h3 className='support_head'>One Stop Study Solution</h3>
            <p className='support_para'>
              Studying abroad can be challenging, but we make it simple. Our
              experienced team supports you every step of the way serving as your
              single point of contact, streamlining the entire process, and
              handling everything so you can focus on your future.
            </p>
          </div>

          <div className="support_card">
            <div className="icon">
              <img src={icon2} />
            </div>
            <h3 className='support_head'>Personalized Guidance</h3>
            <p className='support_para'>
              We understand that every student's journey is unique. Our counselors
              help you discover your strengths, choose the right course and
              university, and navigate financial aid and visa processes with
              ease.
            </p>
          </div>

          <div className="support_card">
            <div className="icon">
              <img src={icon3} />
            </div>
            <h3 className='support_head'>End-to-End Support</h3>
            <p className='support_para'>
              From the initial consultation to your arrival on campus, our
              comprehensive services cover all aspects of your study abroad
              journey. We take care of all the details so you can concentrate on
              your education and development.
            </p>
          </div>
        </div>
      </div>

      <div className='main_container' id='About'>
        <section className="about">

          <div className='All_Heading'>
            <h2>About Company</h2>
          </div>
          <div className="about_container">
            <div className='image_section'>
              <div className="aboutrect_image">
                <img src={aboutrec} alt="About Us" className='img1' />
                <img src={study_about} className='img2' />
                <img src={study_girl} className='img3' />
              </div>
            </div>
            <div className="content">

              <p>
                <span> Brickwayz Academy</span> is a leading educational consultancy dedicated to turning dreams into reality. Our team of experienced professionals provides personalized guidance to help students navigate their educational journeys. We assist with choosing the right career path, securing admission to prestigious international universities, and acquiring in-demand skills through our training programs.
              </p>
              <div className='corestrength'> 
                <h2 className='yeartitle'>CORE STRENGTH</h2>

                <div className="yearstats-container">
                  <div className="yearcard yearblue">
                    <div className="yearnumber">3</div>
                    <div className="yearlabel bluelabel">Years Experience</div>
                  </div>
                  <div className="yearcard yearyellow">
                    <div className="yearnumber">230</div>
                    <div className="yearlabel yellowlabel">Visa Approved</div>
                  </div>
                  <div className="yearcard yeargreen">
                    <div className="yearnumber">98%</div>
                    <div className="yearlabel greenlabel">Success</div>
                  </div>

              </div>
            </div>
          </div>
      </div>
    </section >
      </div >
    </>
  )
}

export default About
