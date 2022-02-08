import React, {useState, useEffect} from "react";
import { Button } from '../ButtonElements'
import RevealFade from 'react-reveal/Fade';
import { Column, ProjectCard, ProjectsContainer, ProjectsRow, ProjectsWrapper, ProjectsWrapper2, ProjectImg, ProjectCardBG, ProjectsCutoff, TextWrapper, ProjectsHeadline } from "./ProjectsElements";
import Icon1 from '../../images/Beach.jpg'

const Projects = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
    <ProjectsCutoff/>

    <ProjectsContainer id='experiences'> 
        <ProjectsWrapper>
            <TextWrapper>
                <RevealFade up>
                <ProjectsHeadline>
                    Do what you love.
                </ProjectsHeadline>
                </RevealFade>

                <RevealFade down>
                <ProjectsHeadline style={{transform: `translateY(${offsetY * 0.03}px)`}}>
                    Love what you do.
                </ProjectsHeadline>
                </RevealFade>
            </TextWrapper>
            <ProjectsWrapper2>
                    <Column>
                        <ProjectCardBG style={{transform: `translateY(${offsetY * 0.5}px)`}}> {/* 3rd */}
                        <ProjectCard>
                            <ProjectImg src={Icon1} />
                        </ProjectCard>
                        </ProjectCardBG>
                    </Column>
                    <Column>
                        <ProjectCardBG style={{transform: `translateY(${offsetY * 0.415}px)`}}> {/*  */}
                        <ProjectCard>
                            <ProjectImg src={Icon1} />
                        </ProjectCard>
                        </ProjectCardBG>
                    </Column>
                    <Column>
                        <ProjectCardBG style={{transform: `translateY(${offsetY * 0.45}px)`}}>
                        <ProjectCard>
                            <ProjectImg src={Icon1} />
                        </ProjectCard>
                        </ProjectCardBG>
                    </Column>
                    <Column>
                        <ProjectCardBG style={{transform: `translateY(${offsetY * 0.47}px)`}}>
                        <ProjectCard>
                            <ProjectImg src={Icon1} />
                        </ProjectCard>
                        </ProjectCardBG>
                    </Column>
                    <Column>
                        <ProjectCardBG style={{transform: `translateY(${offsetY * 0.38}px)`}}>
                        <ProjectCard>
                            <ProjectImg src={Icon1} />
                        </ProjectCard>
                        </ProjectCardBG>
                    </Column>


            </ProjectsWrapper2>
        </ProjectsWrapper>
    </ProjectsContainer>


    </>
  )
}

export default Projects;
