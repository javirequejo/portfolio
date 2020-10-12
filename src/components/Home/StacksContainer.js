import React from 'react';
import styled from 'styled-components';
import AboutTitle from './AboutTitle';

const StacksMainContainer = styled.div`
  padding: 4vh 5vw;
  display: flex;
  flex-direction: column;
`;

const StacksDiv = styled.div`
  padding: 5vh 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 0.5rem;
`;

const SingleStack = styled.div`
  box-shadow: 0 0 4px #000000;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SingleStackH4 = styled.h4`
  font-size: 1.5rem;
`;

const StacksContainer = () => (
  <StacksMainContainer>
    <AboutTitle>Profile</AboutTitle>
    <StacksDiv>
      <SingleStack>
        <SingleStackH4>Frontend: 50%</SingleStackH4>
      </SingleStack>
      <SingleStack>
        <SingleStackH4>Backend: 50%</SingleStackH4>
      </SingleStack>
    </StacksDiv>
  </StacksMainContainer>
);

export default StacksContainer;
