import React from 'react';
import { 
  SidebarContainer, 
  CloseIcon, 
  SideIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideButtonWrap,
  SidebarRoute,
 } 
from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
      
      <SideIcon onClick={toggle}>
          <CloseIcon />
      </SideIcon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="experiences" onClick={toggle}>Experiences</SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
        <SideButtonWrap>
          <SidebarRoute to= '/resume'>Resume</SidebarRoute>
        </SideButtonWrap>
      </SidebarWrapper>
  </SidebarContainer>
  );
};


export default Sidebar;