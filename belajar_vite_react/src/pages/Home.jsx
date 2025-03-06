import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Home.css'
import { homeSection } from '../datas/HomeSection'

import parse from 'html-react-parser'

function Home() {
  return (
    <div>
      <Navbar />
        <div className='wrapper'>
            <section id='Home'>
                <img src={homeSection.image} alt="" />
                <div className='kolom'>
                    {parse(homeSection.content)}
                </div>
            </section>
        </div>
      <Footer />
    </div>
  )
}

export default Home
