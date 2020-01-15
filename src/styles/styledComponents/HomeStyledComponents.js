import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


export const NavUlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    width: 20rem;
`

export const NavLiStyled = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    font-weight: bold;
    border: 2px solid black;
    border-color: #FFFFFF;
    
`

export const NavGatsbyLink = styled(Link)`
    text-decoration: none;
`