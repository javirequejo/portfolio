import styled from 'styled-components'
import { Link } from 'gatsby'

export const MainDivTitle = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    padding: 2rem;
    border: 2px solid black;
    border-color: #FFFFFF;
`

export const MainH1Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
`

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
    width: 80%;
    margin-top: 1rem;
    font-weight: 700;
    border: 2px solid black;
    border-color: #FFFFFF;
    
`

export const NavGatsbyLink = styled(Link)`
    text-decoration: none;
`