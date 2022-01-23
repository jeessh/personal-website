import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import { 
    Nav, 
    NavContainer,
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavButton,
    NavButtonLink 
} from './NavElements';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to='/' onClick={toggleHome}>Jesse</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass='active'
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experiences"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                activeClass='active'
                                >Experiences</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass='active'
                            >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass='active'
                            >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavButton>
                        <NavButtonLink to="/resume">Resume</NavButtonLink>
                    </NavButton>
                </NavContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;