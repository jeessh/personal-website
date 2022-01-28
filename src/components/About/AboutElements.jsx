import styled, { keyframes } from 'styled-components';

  
export const AboutContainer = styled.div`
  color: #010606;
  background: #010606;
  position: sticky;
  overflow: hidden;
  box-shadow: 0 -10px 80px 50px;

  z-index: 1;

  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`
export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 500px;
  width: 100%;
  padding-top: 400px;
  padding-bottom: 700px;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: center;
  
`
export const AboutWrapper2 = styled.div`
  display: grid;
  z-index: 1;
  height: 1200px;
  width: 100%;
  padding-top: 400px;
  margin-bottom: 0px;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: center;
  
`

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    
  }
`
export const Column1 = styled.div`
  margin-bottom: 0px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 0px;
  padding: 0 15px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0px;
  position: relative;
  top: -120px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    top: -40px;}

`
export const TopLine = styled.p`
  color: #fdba8d;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  color: #fff;
  text-align: center;
  transition: 1s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 40px
  }
  @media screen and (max-width: 650px) {
    font-size: 32px
  }
  

/*   color: #fff;
  font-size: 48px;
  text-align: center;
  transition: 1s ease-in-out; */

`
export const Subtitle  = styled.p`
  font-size: 18px;
  line-height: 24px;
  padding-bottom:10px;
  color: #fff;
  `
  
export const BtnWrap = styled.div`
  display:flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;

`;

export const ImgWrap2 = styled.div`
  max-width: 555px;
  position: absolute;
  left: -1100px;
  bottom: -200px;
  
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  border-radius: 60px;
  position: relative;
  z-index:-1;


  @media screen and (max-width: 768px) {
  top: 100px;
  };
`

export const AboutText2 = styled.div`
  max-width: 1600px;
  padding-top: 0;
  padding-bottom: 0px;
  position: relative;
  align-items: center;
  top: -650px; 

`
export const AboutCard = styled.div`
  background: #fdba8d35;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding:  25px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: all 0.8s ease-in-out;
  z-index: -1;
  position: relative;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
  }
`

export const AboutCardBG = styled.div`
  background: #fdba8d35;
  justify-content: flex-start;
  align-items: center;
  margin-left: 300px;
  border-radius: 10px;
  padding:  30px;
  max-width: 800px;
  z-index: -1;
  position: relative;
  top: -200px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`

export const Cutoff = styled.div`
  background-color: #010606;
  height: 500px;
  width: 100%;
  position: relative;
  z-index: 1;
`

const fadeIn = keyframes`
    from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`;

export const Fade = styled.div`
  display: inline-block;
  visibility: ${props => props.out ? 'hidden' : 'visible'};
  animation: ${props => props.out ? fadeOut : fadeIn} 2s linear;
  transition: visibility 2s linear;
`;