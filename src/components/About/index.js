import React, {useState, useEffect} from "react";
import { Button } from '../ButtonElements'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, FadeInDiv, ImgWrap, Img } from './AboutElements'
import ScrollAnimation from 'react-animate-on-scroll';



const About = ({lightBg, id, imgStart, topLine, 
  lightText, headline, darkText, description, 
  buttonLabel, alt, img, primary, dark, dark2 }) => {
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
                <ScrollAnimation animateIn="FadeIn" duration={5000}>
                    <TopLine>{topLine}</TopLine>
                    <Heading className="header" 
                    lightText={lightText}
                    >{headline}</Heading>
                    <Subtitle darkText={darkText} >{description}</Subtitle>
                </ScrollAnimation>
                </TextWrapper>
            </Column1>
             <Column2> 
              <ImgWrap >
                <Img src={img} alt={alt}/>
              </ImgWrap>
             </Column2>
          </AboutRow>
        </AboutWrapper>

        <AboutWrapper>
          <AboutRow>
            <Column1 style={{transform: `translateX(${offsetY * 0.1}px)  translateY(${offsetY * 0.05}px)`}}>
                <TextWrapper>
                <ScrollAnimation animateIn="FadeIn" duration={5000}>
                    <TopLine>{topLine}</TopLine>
                    <Heading className="header" 
                    lightText={lightText}
                    >{headline}</Heading>
                    <Subtitle darkText={darkText} >{description}</Subtitle>
                </ScrollAnimation>
                </TextWrapper>
            </Column1>
             <Column2> 
              <ImgWrap >
                <Img src={img} alt={alt}/>
              </ImgWrap>
             </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default About
