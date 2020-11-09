import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import NavLogo from './NavLogo';

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  overflow: hidden;
  padding: 0 5vw;
  margin: 2vh 0;

  @media (max-width: 768px) {
    height: 8vh;
  }
`;

const Navbar = () => (
  <Navigation>
    <Link to="/">
      <NavLogo />
    </Link>
  </Navigation>
);

export default Navbar;
