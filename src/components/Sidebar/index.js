import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About Me</SidebarLink>
          <SidebarLink to='experiences' onClick={toggle}>Experiences</SidebarLink>
          <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
