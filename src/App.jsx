import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import { accent, white } from './constants/colors'
import { motion } from 'framer-motion'
import { Button } from './shared/Button'
import { keyframes } from 'styled-components'
import { SourceVideo } from './shared/SourceVideo'
import Projects from './components/Projects'
import ContentLayout from './shared/ContentLayout'
import Spinner from './components/Spinner'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import GoUp from './components/GoUp'
const BackgroundVideo = React.lazy(() => import('./components/BackgroundVideo'))


const typingAnimation = keyframes`
  from { width: 0 }
`

const blinkAnimation = keyframes`
  50% { border-color: transparent }
`

const AppLayout = styled.div`
  height: 100vh;
  background-color: ${accent};
  position: relative;
  z-index: 1;
  &::before{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: ${accent};
    opacity: .8;
  }
`

const TitlesContainer = styled(motion.div)`
  color: ${white};
  position: absolute;
  margin: auto;
  width: fit-content;
  height: fit-content;
  inset: 0;
  text-align: center;
  h1, h3{
    margin: 0;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
  }

  @media (max-width: 560px){
    h1, h3{
      max-width: 99vw;
    }
  }
`

const Title = styled(motion.h1)`
  width: 17ch;
  border-right: .5rem solid;
  font-size: clamp(2.3rem, 6vw, 30rem);
  animation: ${typingAnimation} 2s steps(17), ${blinkAnimation} .5s infinite step-end alternate;
  `
  
const Subtitle = styled(motion.h3)`
  position: relative;
  font-size: clamp(1.8rem, 4vw, 30rem);
`

const MainContent = styled.div`
  position: relative;
  height: 90vh;
  overflow: hidden;
`

function App() {

  return (
    <>
      <AppLayout>
        <Header />
        <React.Suspense fallback = {<Spinner/>}>
          <BackgroundVideo />
        </React.Suspense>
        <MainContent>
          <TitlesContainer>
            <Title>Full Stack Developer</Title>
            <Subtitle>Vicente Reyes Cáceres</Subtitle>
            <Button whileHover = {{ scale: 1.05}} whileTap = {{scale: 0.9}} inline margin>Download CV</Button>
            <Button whileHover = {{ scale: 1.05}} whileTap = {{scale: 0.9}} inline margin>Projects</Button>
          </TitlesContainer>
        </MainContent>          
      </AppLayout>
      <ContentLayout>
        <Projects />
        <Skills />
        <AboutMe />
        <Contact />
      </ContentLayout>
      <GoUp />
    </>
  )
}

export default App
