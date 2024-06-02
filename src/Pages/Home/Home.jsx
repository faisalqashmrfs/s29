import React from 'react'
import Hero from '../../components/Hero/Hero'
import Navbarr from '../../components/Navbar/Navbar'
import img1 from './../../assets/image/map.jpg';
import Form from '../../components/Form/Form';

export default function Home() {
  return (
    <>
      <Navbarr />
      <Hero  img={img1} title={'Helo To Our Stor'}/>
      <Form/>
    </>
  )
}
