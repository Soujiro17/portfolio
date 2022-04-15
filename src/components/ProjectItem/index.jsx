import React from 'react'
import styled from 'styled-components'
import { white, whiteHover } from '../../constants/colors'

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
    
const ProjectMiniature = styled.img`
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
    height: 10%;
`

const img = 'https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg'

const ProjectItem = ({ name, github, demo, miniature }) => {
  return (
    <ProjectItemContainer>
        <TitleContainer>
            <ProjectTitle>{name}</ProjectTitle>
        </TitleContainer>
        <ProjectContent>
            <ProjectMiniature src={img} alt = ""/>
        </ProjectContent>
        <ProjectButtons>
            Buttons
        </ProjectButtons>
    </ProjectItemContainer>
  )
}

export default ProjectItem