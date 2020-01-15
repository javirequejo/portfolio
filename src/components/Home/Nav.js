import React from 'react'
import { NavUlStyled, NavLiStyled } from '../../styles/styledComponents/HomeStyledComponents'

export const Nav = () => {
    return (
        <div>
            <NavUlStyled>
                <NavLiStyled>
                    Home
                </NavLiStyled>
                <NavLiStyled>
                    Bio
                </NavLiStyled>
                <NavLiStyled>
                    Projects
                </NavLiStyled>
                <NavLiStyled>
                    Blog
                </NavLiStyled>
                <NavLiStyled>
                    Contact
                </NavLiStyled>
            </NavUlStyled>
        </div>
    )
}
