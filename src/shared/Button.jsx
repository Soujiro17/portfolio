import { motion } from 'framer-motion'
import styled from 'styled-components'
import { accent, buttonAndInputHeight, buttonAndInputRadius, primary, white, whiteHover } from '../constants/colors'

export const Button = styled(motion.button)`
    display: ${props => props.inline? 'inline-block' : 'inherit'};
    margin: ${props => props.margin? '.5rem' : '0'};
    min-width: 10rem;
    background-color: ${accent};
    color: ${white};
    height: ${buttonAndInputHeight};
    border-radius: ${buttonAndInputRadius};
    border: 1px solid ${white};
    font-weight: bolder;
    cursor: pointer;
    text-transform: uppercase;
    transition: .2s all;
    &:hover{
        background-color: ${whiteHover}
    }
`