import styled from 'styled-components'
import React, { useState } from 'react'
import { accent, white, whiteHover } from '../../constants/colors'
import ArrowUp from '../Icons/ArrowUp'

const GoUpContainer = styled.div`
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    height: 4.5rem;
    min-height: 4.5rem;
    width: 4.5rem;
    min-width: 4.5rem;
    background-color: ${accent};
    border-radius: 50%;
    border: 1px solid ${white};
    z-index: 1000;
    color: ${white};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s all;
    svg{
        height: 50%;
        width: 50%;
    }
    &:hover{
        background-color: ${whiteHover};
    }
`

const GoUp = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () => window.scrollTo({top: 0 })
    const goUpStyle = { visibility: visible? 'visible' : 'hidden' }
    
    window.addEventListener("scroll", toggleVisible)

  return (
    <GoUpContainer onClick={scrollToTop} style = {goUpStyle}>
        <ArrowUp />
    </GoUpContainer>
  )
}

export default GoUp