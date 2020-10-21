import React from 'react';
import styled from 'styled-components';

const MainContainerDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 5vh;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        font-size: 2rem;
    }
`;

const MainDivTitle = styled.div`
    min-width: 34rem;
    padding: 4vh 4vw;
    @media (max-width: 1100px) {
      min-width: 25rem;
    }
    @media (max-width: 768px) {
      min-width: 0;
    }
`;

const MainH1Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    border-radius: 0.1em;
`;

const MainImgDiv = styled.div`
    max-width: 30rem;
    max-height: 20rem;
`;

const MainCoverImg = styled.img`
    width: 100%;
    height: 100%;
`;

const MainContainer = () => (
  <MainContainerDiv>
    <MainDivTitle>
      <MainH1Title>
        Hello, I'm Javi
        <span role="img" aria-label="computer-boy">👨🏽‍💻</span>
        <br />
        a Full Stack Developer
      </MainH1Title>
    </MainDivTitle>
    <MainImgDiv>
      <MainCoverImg
        src="https://res.cloudinary.com/dls511fr9/image/upload/v1602502374/portfolio/computer-cover.png"
        alt="Computer cover image"
      />
    </MainImgDiv>
  </MainContainerDiv>
);

export default MainContainer;
