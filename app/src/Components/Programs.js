import React from 'react'

const Programs = () => {
  return (
    <>
      <div className='main_container' id='OurPrograms'>
        <div className='ourprogram_container'>
          <h2 className='ourprogram_tittle'>Our Programs</h2>
          <div className="program">
            <h3 className='program_header'>Career Counselling</h3>
            <p className='programe_para'>Our dedicated career counselors provide individualized support to help you discover your true potential.</p>
            <h4 className='programe_offer'>We offer:</h4>
            <ul>
              <li  className='prog_list'><strong >Personalized Assessments:</strong> Understand your strengths and interests to make smart career decisions.</li>
              <li  className='prog_list'><strong>Academic Planning:</strong> Personalized course selection and academic pathway guidance.</li>
              <li  className='prog_list'><strong>Professional Development:</strong> Guidance on resume building, interview preparation, and job search strategies.</li>
            </ul>
          </div>

          <div style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <button className='program_linkbtn'  onClick={() => window.scrollTo({ top: document.getElementById('Contact').offsetTop, behavior: 'smooth' })}>
            Apply
          </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Programs
