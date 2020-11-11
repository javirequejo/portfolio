import React from 'react';
import styled from 'styled-components';

const NavLogoContainer = styled.div`
  height: 85%;
  float: left;
  padding: 0.5vh 0.5vw;
  display: flex;
  align-items: center;
  border: 2px solid #f8c630;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 1vh 2vw;
  }
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
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 2vh;
  }
`;

const NavLogo = () => (
  <NavLogoContainer>
    <NavLogoImg src="https://res.cloudinary.com/dls511fr9/image/upload/v1595451582/portfolio/profile.png" />
    <NavLogoTitle>JAVI REQUEJO</NavLogoTitle>
  </NavLogoContainer>
);

export default NavLogo;
