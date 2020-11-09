import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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

const NavLogo = styled.div`
  height: 100%;
  width: 30vw;
  display: flex;
  align-items: center;
`;

const NavLogoTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0;
  color: #dbe4ee;
  &::hover {
    text-decoration: none;
    color: red;
  }
`;

const NavLogoImg = styled.img`
  height: 100%;
`;

const Navbar = () => (
  <Navigation>
    <Link to="/">
      <NavLogo>
        <NavLogoImg src="https://res.cloudinary.com/dls511fr9/image/upload/v1595451582/portfolio/profile.png" />
        <NavLogoTitle>JAVI REQUEJO</NavLogoTitle>
      </NavLogo>
    </Link>
  </Navigation>
);

export default Navbar;
