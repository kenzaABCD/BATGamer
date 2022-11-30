import React, {Component} from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1, } from './HeroElements.js'
import Hero1 from '../../images/Hero1.jpg'
import "./test.css";

class HeroSection extends Component {
 
    
    componentDidMount() {
     
      }
    
    render()
    {
      
    return (
        <>
        <HeroContainer id="home">
            <HeroBg>
              <img alt="Hero" src={Hero1}/>
            </HeroBg> 
            <HeroContent>
            <HeroH1> Hero Section </HeroH1>
            </HeroContent>
        </HeroContainer>
        </>
    )
    }
}

export default HeroSection
