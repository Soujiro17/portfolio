import styled from 'styled-components'
import React from 'react'
import { white } from '../../constants/colors'
import { keyframes } from 'styled-components'

const spin = keyframes`
    0% { transform: rotate(0deg)}
    100% { transform: rotate(360deg)}
`

const SpinnerContainer = styled.div`
    border: 6px solid rgb(0,0,0,1);
    box-sizing: border-box;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border-left-color: ${white};
    animation: ${spin} 1s linear infinite;
`

const Spinner = () => {
  return (
    <SpinnerContainer />
  )
}

export default Spinner