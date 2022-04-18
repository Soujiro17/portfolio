import React from 'react'
import useLanguage from '../../hooks/useLanguage'
import SectionContainer from '../../shared/SectionContainer'

const AboutMe = () => {

  const { dictionary } = useLanguage()

  return (
    <SectionContainer title={dictionary.AboutMeTitle} subtitle = {dictionary.AboutMeSubtitle} id = "about-me">AboutMe</SectionContainer>
  )
}

export default AboutMe