import styled from 'styled-components'
import { white, whiteHover } from '../constants/colors'

const Container = styled.div`
    min-height: 100vh;
    height: fit-content;
    position: relative;
    color ${white};
`

const TitleContainer = styled.div`
  text-transform: uppercase;
  padding-top: 1rem;
  h2, h4{
    margin: 0;
  }
  @media (max-width: 1364px){
    text-align: center;
  }
`

const Title = styled.h2`
  font-size: clamp(3rem, 4vw, 15rem);
  text-transform: uppercase;

`

const SubTitle = styled.h4`
  font-size: clamp(1.2rem, 2vw, 12rem);
  font-weight: lighter;
  letter-spacing: 5px;
  color: ${whiteHover};
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

const SectionContainer = ({ title, children, id, subtitle }) => {
    return(
        <Container id={id}>
            <TitleContainer>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </TitleContainer>
            <MainContent>{children}</MainContent>
        </Container>
    )
}

export default SectionContainer