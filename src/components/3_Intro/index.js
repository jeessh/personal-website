import React, {useState, useEffect} from 'react'
import Video from '../../videos/HeroBg.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './IntroElements'

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
    <HeroContainer id='home'>
      <HeroBg style={{transform: `translateY(${offsetY * 0.45}px)`}}>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hey there!</HeroH1>
        <HeroP></HeroP>
        <HeroP>Hope you enjoy this deep take into my life :)</HeroP>
      </HeroContent>
    </HeroContainer>
  )
}
//


export default Intro
