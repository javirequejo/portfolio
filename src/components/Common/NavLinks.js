import React from 'react'
import { NavGatsbyLink } from '../../styles/styledComponents/CommonStyledComponents'

const NavLinks = () => {
    return (
        <div>
            <NavGatsbyLink to='/'>Home</NavGatsbyLink>
            <NavGatsbyLink to='/'>About</NavGatsbyLink>
            <NavGatsbyLink to='/'>Projects</NavGatsbyLink>
            <NavGatsbyLink to='/'>Blog</NavGatsbyLink>
            <NavGatsbyLink to='/'>Contact</NavGatsbyLink>
        </div>
    )
}

export default NavLinks