import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { Navigation, Toggle, Hamburger, Navbox } from '../../styles/styledComponents/NavbarStyledComponents'


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <Navigation>
            <Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
                {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? (
                <Navbox>
                    <NavLinks />
                </Navbox>
            ) : (
                <Navbox open>
                    <NavLinks />
                </Navbox>
            )}
        </Navigation>
    )
}

export default Navbar