import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`
    height: 10vh;
    display: flex;
    overflow: hidden;
    padding: 0 5vw;

    @media (max-width: 768px) {
        position: sticky;
        height: 8vh;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
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
  font-weight: bold;
  margin: 0;
`;

const NavLogoImg = styled.img`
  height: 100%;
`;

const Navbar = () => (
  <Navigation>
    <NavLogo>
      <NavLogoImg src="https://res.cloudinary.com/dls511fr9/image/upload/v1595451582/portfolio/profile.png" />
      <NavLogoTitle>JAVI REQUEJO</NavLogoTitle>
    </NavLogo>
  </Navigation>
);

export default Navbar;
