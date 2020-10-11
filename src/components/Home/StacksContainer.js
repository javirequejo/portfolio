import React from 'react';
import styled from 'styled-components';

const StacksDiv = styled.div`
    padding: 2vh 10vw;
    display: flex;
    justify-content: space-around;
`;

const SingleStack = styled.div`
    border: 1px solid red;
    height: 15vh;
    width: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StacksContainer = () => (
  <StacksDiv>
    <SingleStack>
      <h4>Frontend: 50%</h4>
    </SingleStack>
    <SingleStack>
      <h4>Backend: 50%</h4>
    </SingleStack>
  </StacksDiv>
);

export default StacksContainer;
