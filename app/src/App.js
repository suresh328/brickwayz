import React, { useRef } from 'react';
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

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

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
      <div>
        <Navbar sectionRefs={sectionRefs} />
        
        <div ref={homeRef} style={{overflow:"hidden"}}><Hero /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={programsRef}><Programs /></div>
        <Countries/>
        <div ref={testimonialsRef}><Testimonials /></div>
        <div ref={blogRef}><Blog /></div>
        <div ref={contactRef}><Contact /></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
