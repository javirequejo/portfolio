import React from 'react';
import styled from 'styled-components';

const NavLogoContainer = styled.div`
  height: 85%;
  float: left;
  padding: 0.5vh 0.5vw;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    padding: 1vh 2vw;
  }
`;

const NavLogoImg = styled.img`
  height: 100%;
`;

const NavLogoTitleImg = styled.img`
  height: 25px;
  max-width: 80%;
  margin-left: 1.5vw;
`;

const NavLogo = () => (
  <NavLogoContainer>
    <NavLogoImg src="https://res.cloudinary.com/dls511fr9/image/upload/v1595451582/portfolio/profile.png" />
    <NavLogoTitleImg src="https://res.cloudinary.com/dls511fr9/image/upload/v1605568289/portfolio/javi-requejo-logo.svg" />
  </NavLogoContainer>
);

export default NavLogo;
