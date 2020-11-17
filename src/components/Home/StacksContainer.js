/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import AboutTitle from './AboutTitle';

const StacksMainContainer = styled.div`
  padding: 6vh 5vw;
  display: flex;
  flex-direction: column;
`;

const StackProgressDiv = styled.div`
  margin-top: 2vh;
  border-radius: 6px;
  display: flex;
  height: 4rem;
  overflow: hidden;
  transform: skew(-7deg);
`;

const StackProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: ${(props) => props.bgColor};
`;

const StackProgressP = styled.p`
  color: #dbe4ee;
  font-weight: 700;
  text-align: center;
  @media (max-width: 768px) {
    font: 700 1rem;
  }
`;

const StacksContainer = () => (
  <StacksMainContainer>
    <AboutTitle>Profile</AboutTitle>
    <StackProgressDiv>
      <StackProgressBar bgColor="#1d3354">
        <StackProgressP>Frontend 50%</StackProgressP>
      </StackProgressBar>

      <StackProgressBar bgColor="#d64045">
        <StackProgressP>Backend 50%</StackProgressP>
      </StackProgressBar>
    </StackProgressDiv>
  </StacksMainContainer>
);

export default StacksContainer;
