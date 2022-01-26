import React, {useState} from 'react'
import Video from '../../videos/HeroBg.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
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


export default Hero
