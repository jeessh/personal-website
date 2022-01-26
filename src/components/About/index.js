import React, {useState, useEffect} from "react";
import { Button } from '../ButtonElements'
import { AboutCardBG, AboutText2, AboutCard, AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, FadeInDiv, ImgWrap, Img } from './AboutElements'
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'
import img1 from '../../images/pfp-1.JPG';


const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutRow>
            <Column1 style={{transform: `translateX(${offsetY * 0.1}px)  translateY(${offsetY * 0.05}px)`}}>
                <TextWrapper>
                <Fade left>

                    <Heading className="header" >My name's Jesse</Heading>
                    <Subtitle>But you can call me Jess if you'd like</Subtitle>
                </Fade>
                </TextWrapper>
            </Column1>
             <Column2> 
              <ImgWrap >
                <Img src={img1} alt={'pfp'}/>
              </ImgWrap>
             </Column2>
          </AboutRow>
        </AboutWrapper>

        <AboutWrapper>
                <AboutText2 style={{transform: `translateY(${offsetY * 0.3}px)`}}>
                  <AboutCardBG>
                  <AboutCard>
                    <Heading>Ambition with Curiosity</Heading>
                      <Subtitle>Currently a Gr. 12 IBDP Student at Milliken Mills High School, 
                        my favourite parts of life are when I'm able to interact with the community.
                      </Subtitle>
                      <Subtitle>hi</Subtitle>
                      </AboutCard>
                      </AboutCardBG>
                </AboutText2>
              <ImgWrap >
                <Img/>
              </ImgWrap>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default About
