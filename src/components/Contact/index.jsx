import React from 'react'
import useLanguage from '../../hooks/useLanguage'
import SectionContainer from '../../shared/SectionContainer'

const Contact = () => {

  const { dictionary } = useLanguage()

  return (
    <SectionContainer title= {dictionary.ContactTitle} subtitle = {dictionary.ContactSubtitle} id = "contact">Contact</SectionContainer>
  )
}

export default Contact