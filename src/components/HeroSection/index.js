import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import {
  HeroContainer, 
  HeroBackground, 
  VideoBackground, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroButtonWrapper, 
  ArrowForward, 
  ArrowRight 
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBackground>
          <VideoBackground autoPlay loop muted 
          src={Video} type='video/mp4' />
      </HeroBackground>
      <HeroContent>
          <HeroH1>Welcome to my site!</HeroH1>
            <HeroP>
              HI Hi
            </HeroP>
            <HeroButtonWrapper>
                <Button to='resume' onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                > 
                  Check out my resume! {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroButtonWrapper>

      </HeroContent>
  </HeroContainer>
  );
};

export default HeroSection;
