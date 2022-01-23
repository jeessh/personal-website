import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesIcon,
    ServicesP
} from './ServicesElements';

const Services = () => {
  return (
  <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>

          <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP>We help you.</ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2>Reduce expenses2</ServicesH2>
              <ServicesP>We help you2.</ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2>Reduce expenses3</ServicesH2>
              <ServicesP>We help you3.</ServicesP>
          </ServicesCard>

      </ServicesWrapper>
  
  </ServicesContainer>

  )
};

export default Services;
