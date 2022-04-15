import React from 'react'
import styled from 'styled-components'
import { accent, white } from '../../constants/colors'

const ProjectsContainer = styled.div`
  height: 100vh;
  color: ${white};
  background-color: ${accent};
`

const Projects = () => {
  return (
    <ProjectsContainer>Projects</ProjectsContainer>
  )
}

export default Projects