import React from 'react'
import Navbarr from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import img123 from '../../assets/image/ras-al-jinz-turtle-reserve.jpg'

export default function Contact() {
      return (
            <div>
                  <Navbarr />
                  <Hero img={img123} title={'CONTACT US'}/>
            </div>
      )
}
