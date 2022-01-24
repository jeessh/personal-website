import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Contacts = () => {
  return (
    <ServicesContainer id='Projects'>
      <ServicesH1>Some of my favourite projects!</ServicesH1>
      <ServicesH1>Software and Elsewhere!</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Jazzy</ServicesH2>
          <ServicesP>TD Markham Jazz Festival</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Troki</ServicesH2>
          <ServicesP>Entry for HtN2021</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>FrostFest</ServicesH2>
          <ServicesP>Fundraiser with Act4Impact</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Contacts
