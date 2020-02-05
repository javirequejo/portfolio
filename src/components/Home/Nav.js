import React from 'react'
import { NavUlStyled, NavLiStyled, NavGatsbyLink } from '../../styles/styledComponents/HomeStyledComponents'

export const Nav = () => {
    return (
        <div>
            <NavUlStyled>
                <NavLiStyled>
                    <NavGatsbyLink to='/'>Home</NavGatsbyLink>
                </NavLiStyled>
                <NavLiStyled>
                    <NavGatsbyLink to='/'>Bio</NavGatsbyLink>
                </NavLiStyled>
                <NavLiStyled>
                    <NavGatsbyLink to='/'>Projects</NavGatsbyLink>
                </NavLiStyled>
                <NavLiStyled>
                    <NavGatsbyLink to='/'>Blog</NavGatsbyLink>
                </NavLiStyled>
                <NavLiStyled>
                    <NavGatsbyLink to='/'>Contact</NavGatsbyLink>
                </NavLiStyled>
            </NavUlStyled>
        </div>
    )
}
