import React from 'react';
import styled from 'styled-components';
import { SpanSpacer } from '../../styles/styledComponents/CommonStyledComponents';

const MainDivTitle = styled.div`
    display: flex;
`;

const MainH1Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    border-radius: 0.1em;

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`;

const MainTitleContainer = () => (
  <MainDivTitle>
    <MainH1Title>
      Hello, I'm Javi
      <span role="img" aria-label="computer-boy">👨🏽‍💻</span>
      <br />
      a Full Stack Developer
      <SpanSpacer />
    </MainH1Title>
  </MainDivTitle>
);

export default MainTitleContainer;
