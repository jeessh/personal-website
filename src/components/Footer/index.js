import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinkTitle,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Help me</FooterLinkTitle>
                            <FooterLink to="/resume">Instagram</FooterLink>
                            <FooterLink to="/resume">LinkedIn</FooterLink>
                            <FooterLink to="/resume">GitHub</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        lmao
                    </SocialLogo>
                    <WebsiteRights>websiterights {new Date().getFullYear()}
                    All rights reserved.</WebsiteRights>
                    <SocialIcons>

                        <SocialIconLink href="/" target="_blank"
                        aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank"
                        aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank"
                        aria-label="GitHub">
                            <FaGithub />
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    );
};

export default Footer;
