import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const AboutDescriptionDiv = styled.div`
  padding: 2vh 0;

  @media (max-width: 768px) {
    padding: 2vh 5vw;
  }
`;

const AboutDescriptionP = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
`;

const AboutDescriptionContainer = () => (
  <AboutDescriptionDiv>
    <AboutDescriptionP>
      I am a talented full stack developer living in London
      <span role="img" aria-label="uk-flag">🇬🇧</span>
      currently working for a spanish startup:
      {' '}
      <Link to="https://alternaonline.es/">Alterna Online</Link>
      <br />
      I mainly work with Javascript (React & Node.js)
      but I also have experience working with PHP (Symfony) and others.
    </AboutDescriptionP>
  </AboutDescriptionDiv>
);

export default AboutDescriptionContainer;