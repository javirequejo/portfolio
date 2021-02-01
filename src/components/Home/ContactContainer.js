import React from 'react';
import styled from 'styled-components';
import SocialIconsContainer from '../Common/SocialIconsContainer';

const ContactDiv = styled.div`  
  padding: 4vh 5vw;
  width: 100%;
  & div {
    width: 80%;
  }
  @media (max-width: 768px) {
    padding: 2vh 2vw;
  }
`;

const ContactP = styled.p`
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
const ContactContainer = () => (
  <ContactDiv>
    <ContactP>
      If you're reading this, we can talk!
      <br />
      You can find me and send me a message on my social accounts:
      <br />
    </ContactP>
    <SocialIconsContainer />
  </ContactDiv>
);

export default ContactContainer;
