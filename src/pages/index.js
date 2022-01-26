import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import About from '../components/About'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Contacts from '../components/Contacts';
import Sidebar from '../components/SideBar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <About {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Info {...homeObjThree}/>      
      <Contacts />
      <Footer />
    </>
  )
}

export default Home
