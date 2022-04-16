import styled from 'styled-components'
import { accent, white } from '../constants/colors'

const SectionContainer = styled.div`
    min-height: 100vh;
    height: fit-content;
    color ${white};
    background-color: ${accent}
`

export default SectionContainer