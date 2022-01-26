import React from 'react'
import Icon1 from '../../images/IGicon.png'
import Icon2 from '../../images/LIicon.png'
import Icon3 from '../../images/GHicon.png'
import {SMContainer, SMIcon, SMWrapper, ContactsH1} from '././ContactsElements'
import { Link } from 'react-router-dom'

const Contacts = () => {
  return (
    <SMContainer id='contact'>
      <ContactsH1>Feel Free to Connect!</ContactsH1>
      <SMWrapper>
        <Link to='https://www.instagram.com/mac_n_jeess/'>
          <SMIcon src={Icon1}/>
        </Link>
        <Link to='https://www.linkedin.com/in/huang-jesse/'>
          <SMIcon src={Icon2}/>
        </Link>          
        <Link to='https://www.github.com/jeessh/'>
          <SMIcon src={Icon3}/>
        </Link>
      </SMWrapper>
    </SMContainer>
  )
}

export default Contacts
