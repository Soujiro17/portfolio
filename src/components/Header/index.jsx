import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import { accent, white, whiteHover } from '../../constants/colors'
import List from '../Icons/List'
import useNavbarItems from '../../hooks/useNavbarItems'

const mediaQuery = 500

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
    width: fit-content;
    inset: 0;
    margin: auto;
    height: 100%;
`

const NavList = styled.ul`
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    z-index: 1;
    @media (max-width: ${mediaQuery}px){
        display: block;
        position: relative;
        top: 10vh;
        // left: ${props => props.showNav? '0' : '-100vw'};
        z-index: -1;
        width: 100vw;
        overflow: hidden;
        height: fit-content;
        background-color: ${props => props.showNav? whiteHover : ''};

    }
`

const NavItem = styled.li`
    display: inline-block;
    box-sizing: border-box;
    text-transform: uppercase;
    padding: .5rem;
    border-radius: 50%;
    transition: .7s all;

    @media (max-width: ${mediaQuery}px){
        position: relative;
        display: block;
        width: 100%;
        border-radius: 0;
        &:nth-child(2n){
            left: -100vw;
        }
        &:nth-child(2n+1){
            left: 200vw;
        }
        left: ${props => props.showNav? '0 !important' : '-100vw'};
    }
`
    
const NavRedirect = styled.a`
    height: 100%;
    color: ${white};
    text-decoration: none;
    transition: .2s all;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        margin-right: .5rem;
    }

    &:hover{
        color: ${whiteHover};
    }
    
    @media (max-width: ${mediaQuery}px){
        display: block;
        width: 100%;
        text-align: center;
    }

`

const NavItemIcon = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

const NavItemText = styled.div`
    display: inline-block;

    @media (max-width: ${mediaQuery}px){
        width: 5rem;
        text-align: left;
    }
    
`

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const navbarItems = useNavbarItems()

    const handleShowNavbar = () => setShowNavbar(!showNavbar)

  return (
    <HeaderContainer id= 'header'>
        <List MobileDesign onClick={handleShowNavbar} />
        <NavbarContainer>
            <NavList showNav = {showNavbar}>
                {
                    navbarItems.map((item, i) => 
                        <NavItem key={i} showNav = {showNavbar} onClick={item.function}>
                            <NavRedirect href={item.url}>
                                <NavItemIcon>
                                    {item.icon}
                                </NavItemIcon>
                                <NavItemText>
                                    {item.name}
                                </NavItemText>
                            </NavRedirect>
                        </NavItem>)
                }
            </NavList>
        </NavbarContainer>
    </HeaderContainer>
  )
}

export default Header