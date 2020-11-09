import React from 'react';
import styled from 'styled-components';

const NavLogoContainer = styled.div`
  height: 100%;
  width: 30vw;
  display: flex;
  align-items: center;
`;

const NavLogoImg = styled.img`
  height: 100%;
`;

const NavLogoTitle = styled.h2`
  font-family: 'Permanent Marker', cursive;
  transform: skew(-12deg, -3deg);
  margin-top: 4vh;
  margin-left: 0.5vw;
  color: #f8c630;
`;

const NavLogo = () => (
  <NavLogoContainer>
    <NavLogoImg src="https://res.cloudinary.com/dls511fr9/image/upload/v1595451582/portfolio/profile.png" />
    <NavLogoTitle>JAVI REQUEJO</NavLogoTitle>
  </NavLogoContainer>
);

export default NavLogo;
