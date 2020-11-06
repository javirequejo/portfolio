import React from 'react';
import styled from 'styled-components';
import SocialIcon from './SocialIcon';

const ContactDiv = styled.div`  
  padding: 4vh 5vw;
  @media (max-width: 768px) {
    padding: 2vh 5vw;
  }
`;

const ContactP = styled.p`
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SocialIconsContainer = styled.div`
    padding: 2vh 2vw 0;
    display: flex;
    align-items: center;
    justify-content: start;
    @media (max-width: 768px) {
      justify-content: space-around;
    }
`;

const ContactContainer = () => (
  <ContactDiv>
    <ContactP>
      If you're reading this, we can talk!
      <br />
      You can send me an
      {' '}
      <a target="_blank" rel="noreferrer" href="mailto:javierrequejomelchor@gmail.com">email</a>
      {' '}
      or find me on my social accounts:
      <br />
    </ContactP>
    <SocialIconsContainer>
      <SocialIcon
        socialLink="https://twitter.com/javirequejo_"
        iconLink="https://res.cloudinary.com/dls511fr9/image/upload/v1595759560/portfolio/gorjeo.svg"
      />
      <SocialIcon
        socialLink="https://www.linkedin.com/in/javier-requejo/"
        iconLink="https://res.cloudinary.com/dls511fr9/image/upload/v1595759560/portfolio/linkedin.svg"
      />
      <SocialIcon
        socialLink="https://github.com/javirequejo"
        iconLink="https://res.cloudinary.com/dls511fr9/image/upload/v1595759560/portfolio/github.svg"
      />
    </SocialIconsContainer>
  </ContactDiv>
);

export default ContactContainer;
