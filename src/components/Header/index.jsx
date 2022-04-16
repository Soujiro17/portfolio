import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { accent, white, whiteHover } from '../../constants/colors'
import { navbarItems } from '../../data/navbar'

const HeaderContainer = styled(motion.header)`
    height: 10vh;
    box-sizing: border-box;
    z-index: 1;
    border-bottom: 1px solid ${white};
    position: relative;
    box-sizing: border-box;
    &::before{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        z-index: -1;
        background-color: ${accent};
        opacity: .8;
    }
`

const NavbarContainer = styled.nav`
    position: absolute;
    right: 0;
    height: 100%;
    justify-self: flex-end;
    padding-left: 2%;
    padding-right: 2%;
`

const NavList = styled.ul`
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`

const NavItem = styled.li`
    display: inline-block;
    box-sizing: border-box;
    text-transform: uppercase;
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
    <HeaderContainer id= 'header'>
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