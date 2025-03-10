import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tutors from '../components/Tutors'
import Partners from '../components/Partners'
import Contact from '../components/Contact'

import '../styles/Home.css'

import { homeSection } from '../data/HomeSection'
import { courseSection } from '../data/CourseSection'
import { tutorsSection, tutorsList } from '../data/TutorsSection'
import { partnersSection, partnersList } from '../data/PartnersSection'
import { contactSection } from '../data/ContactSection'

import parse from 'html-react-parser'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='wrapper'>

        {/* home */}
        <section id='Home'>
          <img src={homeSection.image} alt="" />
          <div className='kolom'>
            {parse(homeSection.content)}
          </div>
        </section>

        {/* course */}
        <section id="courses">
          <div className="kolom">
            {parse(courseSection.content)}
          </div>
          <img src={courseSection.image} alt="" />
        </section>

        {/* tutors */}
        <section id="tutors">
            <div className="tengah">
              {parse(tutorsSection.content)}
              <Tutors tutorsList={tutorsList}/>
            </div>
        </section>

        {/* partners */}
        <section id="partners">
          <div className="tengah">
            {parse(partnersSection.content)}
            <Partners partnersList={partnersList}/>
          </div>
        </section>
      
      </div>
      <Contact contactSection={contactSection}/>
      <Footer />
    </div>
  )
}

export default Home
