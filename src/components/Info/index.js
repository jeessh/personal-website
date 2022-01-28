import React, {useState, useEffect} from "react";
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, FadeInDiv, ImgWrap, Img } from './InfoElements'
import ScrollAnimation from 'react-animate-on-scroll';



const Info = ({lightBg, id, imgStart, topLine, 
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
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
          
          <Column1>
            <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading className="header" 
                lightText={lightText}
                >{headline}</Heading>
                <Subtitle >{description}</Subtitle>
       {/*         <BtnWrap>
                  <Button to='home'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel}
                  </Button>
                 </BtnWrap>  */}
              </TextWrapper>
             </Column1>
          
             <Column2> 
              <ImgWrap >
                <Img src={img} alt={alt}/>
              </ImgWrap>
             </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info
