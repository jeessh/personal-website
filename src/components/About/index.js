import React, {useState, useEffect} from "react";
import { Button } from '../ButtonElements'
import { AboutCardBG, AboutText2, AboutCard, AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, FadeInDiv, ImgWrap, ImgWrap2, Img, Cutoff } from './AboutElements'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import img1 from '../../images/pfp-1.JPG';
import img2 from '../../images/Floating.svg';


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
          <Column2> 
            <Fade right>
              <ImgWrap style={{transform: `translateY(${offsetY * 0.1}px)`}}>
                <Img src={img1} alt={'pfp'}/>
              </ImgWrap>
            </Fade>
             </Column2>
            <Column1 style={{transform: `translateX(${offsetY * 0.1}px)  translateY(${offsetY * 0.05}px)`}}>
                <TextWrapper>
                  <Heading className="header" >
                    <Fade left cascade>
                      My name's Jesse
                    </Fade>
                  </Heading>
                  <Fade left>
                    <Subtitle>
                      But you can call me Jess if you'd like
                    </Subtitle>
                  </Fade>
                </TextWrapper>
            </Column1>

          </AboutRow>
        </AboutWrapper>

        <AboutWrapper>
        <ImgWrap2 style={{transform: `translateX(${offsetY * 0.6}px)`}}>
                <Img src={img2} alt={'balloon'} />
              </ImgWrap2>
                <AboutText2 style={{transform: `translateY(${offsetY * 0.45}px)`}}>
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
        </AboutWrapper>

      </AboutContainer>
      <Cutoff />
    </>
  )
}

export default About
