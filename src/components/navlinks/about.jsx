import React from 'react'
import "./about.css"
import Navbar from '../navbar'

const About = () => {
  return (
    <>
    <Navbar/>
    
    <div className="about">
    <h1>what is Orb?</h1>
    <div className="about-content">
    Our project "ORB" is expansion of its well-known Chat GPT we have made. With a variety of innovative features and capabilities that go beyond Chat GPT's limitations, ORB is a major advancement.
     </div>
    </div>
    <h2>Connect With Us !</h2>
    <section className="container experience__container">
        {/* First creator */}
        <div className="experience__webd" data-aos="fade-up">
          <div className="experience__content">
            <img src="" alt="" className="dp" />
            <h3>Sanjana Prabha</h3>
            <article className="experience__detail">
              <div>
                <h4>Developer</h4>
                <a className="text-light">experienced</a>
              </div>
            </article>
          </div>
        </div>

        {/* Second creator */}
        <div className="experience__webd" data-aos="fade-up">
          <div className="experience__content">
            {/* <img src="himani.jpeg" alt="loading" className="dp" /> */}
            <h3>Himani Sharma</h3>
            <article className="experience__detail">
              <div>
                <h4>Developer</h4>
                <a className="text-light">experienced</a>
              </div>
            </article>
          </div>
        </div>

        {/* Third creator */}
        <div className="experience__webd" data-aos="fade-up">
          <div className="experience__content">
            {/* <img src="soumi.jpeg" alt="loading" className="dp" /> */}
            <h3>Soumi Pandit</h3>
            <article className="experience__detail">
              <div>
                <h4>Developer</h4>
                <a className="text-light">experienced</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default About