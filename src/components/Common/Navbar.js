import React, { useState } from 'react';
import NavBox from './NavBox';
import {
  Navigation, Toggle, Hamburger,
} from '../../styles/styledComponents/NavbarStyledComponents';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation>
      <Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen && (<NavBox />)}
    </Navigation>
  );
};

export default Navbar;
