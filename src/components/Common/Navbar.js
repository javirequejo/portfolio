import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import NavLogo from './NavLogo';
import SocialIconsContainer from './SocialIconsContainer';

const Navigation = styled.nav`
  height: 8vh;
  padding: 0 2vw;
  margin: 2vh 0;
  display: flex;
  justify-content: space-between;
  & a {
    max-width: 40%;
  }
  @media (max-width: 768px) {
    height: 6vh;
  }
`;

const Navbar = () => (
  <Navigation>
    <Link to="/">
      <NavLogo />
    </Link>
    <SocialIconsContainer />
  </Navigation>
);

export default Navbar;
