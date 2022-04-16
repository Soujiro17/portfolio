import React from 'react'
import styled from 'styled-components'
import SectionContainer from '../../shared/SectionContainer'
import { projectsItems } from '../../data/projects'
import ProjectItem from '../ProjectItem'

const TitleContainer = styled.div`
`

const Title = styled.h2`
  font-size: clamp(3rem, 4vw, 15rem);
  text-transform: uppercase;
  margin: 0;
  @media (max-width: 1364px){
    text-align: center;
  }
`

const MainContent = styled.div`
  @media (max-width: 1364px){
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`


const Projects = () => {
  return (
    <SectionContainer id='projects'>
      <TitleContainer>
        <Title>Projects</Title>
      </TitleContainer>
      <MainContent>
        {
          projectsItems.map((project, i) => <ProjectItem {...project} key = {i} />)
        }
      </MainContent>
    </SectionContainer>
  )
}

export default Projects