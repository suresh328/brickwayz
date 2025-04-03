
import React from 'react'
import "./../Style/Custom.css"
import blog1 from "./../Assets/blog/blog1.png"
import blog2 from "./../Assets/blog/blog2.png"
import blog3 from "./../Assets/blog/blog3.png"

const Blog = () => {

  const posts = [
    {
      sub:"Study Abroad",
      title: "Reflect on your experience:",
      excerpt: "Identify situations experienced abroad to support your claims of skills qualities. Develop short 'stories' to demonstrate your skills in interviews. Understand the importance of preparing for job interviews.",
      image: blog1,
    },
    {
      sub:"Study Consultancy",
      title: "Offer Value-Added Services:",
      excerpt: "Before venturing into the study abroad business, focus on knowledge about higher education for Indian students aspiring to study abroad. Understand the application process, university requirements, and visa regulations to guide students effectively.",
      image: blog2,
    },
    {
      sub:"Study Abroad",
      title: "Which Field Is Demand In Abroad :",
      excerpt: "Artificial Intelligence (AI) and Machine Learning, Data Science, Cybersecurity, Computer Science & IT, Business & Management, Engineering, and Healthcare & Medicine are some of the top courses in demand for studying abroad in 2025.",
      image: blog3,
    },
  ];
  return (
    <>
      <div className="main_container">

        <section className="blog">
          <h2 className='blog_tittle'>Blog</h2>
          <h4 className='blog_disc'>Resources and insights</h4>
          <div className="blog-grid">
            {posts.map((post, index) => (
              <div key={index} className="blog-card">
                <div className='blog_card_image'>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="contentss">
                  <h3 className='blog_subtitles'>{post.sub}</h3>
                  <h3 className='blog_titles'>{post.title}</h3>
                  <p className='blog_parass'>{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          <p className='ceraer'>Stay ahead of the game with the latest insights into international education trends, career development, and talent acquisition. Visit our blog for expert articles and success stories!</p>
        </section>
      </div>
    </>
  )
}

export default Blog

