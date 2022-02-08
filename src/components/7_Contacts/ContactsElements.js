import styled from 'styled-components'

export const SMContainer = styled.div` //social media container
  height: 710px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 750px) {
    height: 360px;
  }

  @media screen and (max-width: 620px) {
    height: 300px;
  }
 `

export const SMIcon = styled.img`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
`

export const SMWrapper = styled.div`
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 60px;
    padding: 0 25px;
`
export const ContactsH1 = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
  margin-top: 40px;

  @media screen and (max-width: 600px){
    font-size: 2rem;
    margin-top: 20px;
  }
`

/*     @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  } */

/* export const SMCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
` */
/* 

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`

 */
