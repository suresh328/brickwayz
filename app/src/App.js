import React, { useEffect, useRef } from 'react';
import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Countries from './Components/Countries';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Programs from './Components/Programs';
import Testimonials from './Components/Testimonials';
import ChooseUs from './Components/ChooseUs';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const fetchreq = async () => {
      try {
         await axios.get('https://brickwayz.onrender.com/health');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchreq();

  }, []);

  const sectionRefs = {
    Home: homeRef,
    About: aboutRef,
    OurPrograms: programsRef,
    Testimonials: testimonialsRef,
    Blog: blogRef,
    Contact: contactRef,
  };

  return (
    <>
      <BrowserRouter>
      <div>
        <Navbar sectionRefs={sectionRefs} />

        <div ref={homeRef} style={{ overflow: "hidden" }}><Hero /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={programsRef}><Programs /></div>
        <Countries />
        <ChooseUs />
        <div ref={testimonialsRef}><Testimonials /></div>
        <div ref={blogRef}><Blog /></div>
        <FAQ />
        <div ref={contactRef}><Contact /></div>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
