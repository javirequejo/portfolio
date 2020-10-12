import React from 'react';
import styled from 'styled-components';
import SocialIcon from './SocialIcon';

const ContactDiv = styled.div`  
  padding: 4vh 5vw;
`;

const ContactP = styled.p`

`;

const SocialIconsContainer = styled.div`
    padding: 2vh 2vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
`;

const ContactContainer = () => (
  <ContactDiv>
    <ContactP>
      If you're reading this, we can talk!
      <br />
      You can send me an
      {' '}
      <a href="mailto:javierrequejomelchor@gmail.com">email</a>
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
