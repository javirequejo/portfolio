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
  overflow:hidden;
`;

const StackProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: ${(props) => props.bgColor};
`;

const StackProgressP = styled.p`
  color: #e9fff9;
  font:700 1.25rem sans-serif;
  text-align: center; 
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
