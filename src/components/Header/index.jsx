import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { accent, primary, white, whiteHover } from '../../constants/colors'
import { navbarItems } from '../../data/navbar'

const HeaderContainer = styled(motion.header)`
    height: 10vh;
    box-sizing: border-box;
    z-index: 1;
    border-bottom: 1px solid ${white};
    position: relative;
    &::before{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        z-index: -1;
        background-color: ${accent};
        opacity: .9;
    }
`

const NavbarContainer = styled.nav`
    height: 100%;
`

const NavList = styled.ul`
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
`

const NavItem = styled.li`
    display: inline-block;
    box-sizing: border-box;
    padding: .5rem;
`
    
const NavRedirect = styled.a`
    height: 100%;
    color: ${white};
    text-decoration: none;
    transition: .2s all;
    &:hover{
        color: ${whiteHover}
    }
`

const Header = () => {

  return (
    <HeaderContainer>
        <NavbarContainer>
            <NavList>
                {
                    navbarItems.map((item, i) => 
                        <NavItem key={i}>
                            <NavRedirect href={item.url}>
                                {item.name}
                            </NavRedirect>
                        </NavItem>)
                }
            </NavList>
        </NavbarContainer>
    </HeaderContainer>
  )
}

export default Header