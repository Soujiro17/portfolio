import styled from 'styled-components'
import { white } from '../constants/colors'

const Container = styled.div`
    min-height: 100vh;
    height: fit-content;
    position: relative;
    color ${white};
`

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
  position: absolute;
  inset: 0;
  margin: auto;
  height: fit-content;
  @media (max-width: 1364px){
    position: static;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const SectionContainer = ({ title, children, id }) => {
    return(
        <Container id={id}>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <MainContent>{children}</MainContent>
        </Container>
    )
}

export default SectionContainer