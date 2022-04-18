import React from 'react'
import SectionContainer from '../../shared/SectionContainer'
import { projectsItems } from '../../data/projects'
import ProjectItem from '../ProjectItem'
import useLanguage from '../../hooks/useLanguage'

const Projects = () => {

  const { dictionary } = useLanguage()

  return (
    <SectionContainer title={dictionary.ProjectsTitle} subtitle = {dictionary.ProjectsSubtitle} id = "projects">
        {
          projectsItems.map((project, i) => <ProjectItem {...project} key = {i} />)
        }
    </SectionContainer>
  )
}

export default Projects