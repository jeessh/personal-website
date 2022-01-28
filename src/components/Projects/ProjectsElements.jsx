import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 2;



  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`

export const ProjectsWrapper = styled.div`
  z-index: 1;
  height: 3000px;
  width: 100%;
  padding-top: 400px;
  padding-bottom: 700px;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: center;
  
`
export const ProjectsWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  z-index: 5;
  height: 2300px;
  width: 100%;
  position: relative;
  top: -800px;
  
  padding-left: 15px;
  padding-right: 15px;
  justify-content: center;
  
  
`

export const ProjectsCutoff = styled.div`
  background-color: #fff;
  display: flex;
  position: relative;
  width: 100%;
  height: 1px;
  box-shadow: 0 -20px 100px 150px #fff;
  z-index: 5;
`

export const Column = styled.div`
  margin-bottom: 0px;
  max-width: 300px;
  padding: 0 15px;
`

export const ProjectCard = styled.div`
  background: #ffffff5d;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  border-radius: 25px;
  height: 740px;
  padding: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    box-shadow: 0 5px 30px #8a222289;
    transition: 0.3s ;
    cursor:pointer;

  }
`

export const ProjectCardBG = styled.div`
  background: #fdba8d77;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 25px;
  height: 760px;
  padding:  10px;
  box-shadow: 0 5px 30px #00000033;
  
`

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 0 0 0;
  border-radius: 20px;
`

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 0px;
  position: relative;
  align-items: center;
  display: flex;
  top: 200px;
  z-index: 6;

  @media screen and (max-width: 768px) {
    top: -40px;}


`

export const ProjectsHeadline = styled.h1`
  width: 100%;
  margin-bottom: 24px;
  font-size: 80px;
  color: #010606;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px
  }
  @media screen and (max-width: 650px) {
    font-size: 32px
  }
`