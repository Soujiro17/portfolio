import { motion } from 'framer-motion'
import styled from 'styled-components'

const Img = styled(motion.img)`
    height: ${props => props.height};
    width: ${props => props.width};
    object-fit: contain;
`

export default Img