import React from 'react'
import Navbarr from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import image22 from '../../assets/image/download.jpg'

export default function About() {
      return (
            <section>
                  <Navbarr/>
                  <Hero img={image22} title={'About us'}/>
            </section>
      )
}
