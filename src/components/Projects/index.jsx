import React from 'react'
import SectionContainer from '../../shared/SectionContainer'
import { projectsItems } from '../../data/projects'
import ProjectItem from '../ProjectItem'

const Projects = () => {
  return (
    <SectionContainer title="Projects" id = "projects">
        {
          projectsItems.map((project, i) => <ProjectItem {...project} key = {i} />)
        }
    </SectionContainer>
  )
}

export default Projects