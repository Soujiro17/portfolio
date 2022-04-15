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
`

const MainContent = styled.div`
`


const Projects = () => {
  return (
    <SectionContainer id='projects'>
      <TitleContainer>
        <Title>Projects</Title>
      </TitleContainer>
      <MainContent>
        {
          projectsItems.map((project) => <ProjectItem {...project} />)
        }
      </MainContent>
    </SectionContainer>
  )
}

export default Projects