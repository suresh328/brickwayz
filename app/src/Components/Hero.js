
import React from 'react'
import "./../Style/Custom.css"
import { FaArrowCircleUp } from "react-icons/fa";
import girl from "./../Assets/girlimg.png"

const Hero = () => {
  return (

    <>

      <section className="hero" id='Home'>
        <div className='main_container'>
          <div className='hero_container'>
            <div className='hero_content'>
              <h2>Welcome to
                <br />
                <span>Brickwayz</span> Academy<br />
                Your gateway to Global <br />
                Education and Career Success!</h2>
              <p className='hero_p'>
                At Brickwayz Academy, we empower students to achieve their
                academic and professional aspirations. Our comprehensive
                services in career guidance, study abroad counseling, and
                expert training programs are intended to help you succeed.
              </p>
              <div className='apply_btn' onClick={() => window.scrollTo({ top: document.getElementById('Contact').offsetTop, behavior: 'smooth' })}>
                <button className="btn">Apply now</button>
              </div>
            </div>
            <div className='image_content'>
              <img src={girl} />
            </div>
          </div>
        </div>

        <div className='scrollup_btn'  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowCircleUp size={40} color='#2771d8'/>

        </div>
      </section>
    </>
  )
}

export default Hero

