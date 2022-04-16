import React from 'react'
import styled from 'styled-components'
import { Button } from '../../shared/Button'
import { white, whiteHover } from '../../constants/colors'
import { motion } from 'framer-motion'

const ProjectItemContainer = styled.div`
    min-width: 320px;
    display: inline-block;
    margin: 2%;
    height: 450px;
    width: 29%;
    text-transform: uppercase;
    text-align: center;
`
const TitleContainer = styled.div`
    height: 15%;
`

const ProjectTitle = styled.h1`
    margin: 0;
    padding: 1rem;
`

const ProjectContent = styled.div`
    height: 75%;
    position: relative;
`
    
const ProjectMiniature = styled(motion.img)`
    position: absolute;
    inset: 0;
    margin: auto;
    width: 80%;
    vertical-align: middle;
    height: 80%;
    border-radius: 1rem;
    object-fit: cover;
`

const ProjectButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
`

const Anchor = styled.a`
    display: block;
    line-height: 2.5rem;
    height: 100%;
    width: 100%;
    color: ${white};
    text-decoration: none;
`

const img = 'https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg'

const ProjectItem = ({ name, github, demo, miniature }) => {
  return (
    <ProjectItemContainer>
        <TitleContainer>
            <ProjectTitle>{name}</ProjectTitle>
        </TitleContainer>
        <ProjectContent>
            <ProjectMiniature src={miniature || img} whileHover = {{scale: 1.05}} alt = ""/>
        </ProjectContent>
        <ProjectButtons>
            <Button width = "30%" margin = ".5rem" backgroundColor = "purple">
                <Anchor href={github} target = '_blank'>{"</> "}Code</Anchor>
            </Button>
            <Button width = "30%" margin = ".5rem" backgroundColor = "purple">
                <Anchor href={demo} target = '_blank'>Demo</Anchor>
            </Button>
        </ProjectButtons>
    </ProjectItemContainer>
  )
}

export default ProjectItem