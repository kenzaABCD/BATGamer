import React, {useState } from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SectionElements from '../components/SectionsElements'



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
 
    const toggle = () => {
        setIsOpen(!isOpen)
    }

 
 
     return (
        <>
        
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <SectionElements/>
        <Footer />
        </>
     )
 }
 
 export default Home