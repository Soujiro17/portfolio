import React from 'react'
import SectionContainer from '../../shared/SectionContainer'
import ReactLogo from '../../assets/react.png'
import NodeLogo from '../../assets/node.png'
import MongoLogo from '../../assets/mongo.png'
import MySQLLogo from '../../assets/mysql.png'
import HtmlLogo from '../../assets/html.png'
import CSSLogo from '../../assets/css.png'
import Img from '../../shared/Img'
import styled from 'styled-components'
import useLanguage from '../../hooks/useLanguage'

const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Skills = () => {

  const { dictionary } = useLanguage()

  const imgHeight = "10%"
  const imgWidth = "10%"

  return (
    <SectionContainer title={dictionary.SkillsTitle} subtitle = {dictionary.SkillsSubtitle} id = "skills">
      <SkillsContainer>  
        <Img src={ReactLogo} alt = "" height={imgHeight} width={imgWidth} />
        <Img src={NodeLogo} alt = "" height={imgHeight} width={imgWidth} />
        <Img src={MongoLogo} alt = "" height={imgHeight} width={imgWidth} />
        <Img src={MySQLLogo} alt = "" height={imgHeight} width={imgWidth} />
        <Img src={HtmlLogo} alt = "" height={imgHeight} width={imgWidth} />
        <Img src={CSSLogo} alt = "" height={imgHeight} width={imgWidth} />
      </SkillsContainer>
    </SectionContainer>
  )
}

export default Skills