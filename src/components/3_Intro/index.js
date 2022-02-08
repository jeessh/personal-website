import React, {useState, useEffect} from 'react'
import Video from '../../videos/HeroBg.mp4'
import { IntroContainer, IntroBg, VideoBg, IntroContent, IntroH1, IntroP, IntroBtnWrapper, ArrowForward, ArrowRight } from './IntroElements'

const Intro = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <IntroContainer id='home'>
      <IntroBg style={{transform: `translateY(${offsetY * 0.45}px)`}}>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </IntroBg>
      <IntroContent>
        <IntroH1>Hey there!</IntroH1>
        <IntroP></IntroP>
        <IntroP>Hope you enjoy this deep take into my life :)</IntroP>
      </IntroContent>
    </IntroContainer>
  )
}
//


export default Intro
