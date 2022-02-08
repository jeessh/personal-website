import React, {useState} from 'react'
import Footer from '../components/8_Footer';
import Intro from '../components/3_Intro'
import Info from '../components/Info'
import About from '../components/4_About'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/Info/Data';
import Navbar from '../components/1_Navbar'
import Contacts from '../components/7_Contacts';
import Sidebar from '../components/2_Sidebar'
import Projects from '../components/5_Projects';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Intro />
      <About/>
      <Projects/>
      <Info {...homeObjThree}/>      
      <Contacts />
      <Footer />
    </>
  )
}

export default Home
