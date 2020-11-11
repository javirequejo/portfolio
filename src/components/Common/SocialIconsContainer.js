import React from 'react';
import styled from 'styled-components';
import SocialIcon from './SocialIcon';

const SocialIconsDiv = styled.div`
    padding: 2vh 2vw 0;
    display: flex;
    align-items: center;
    justify-content: start;
    @media (max-width: 768px) {
      justify-content: space-around;
      width: 50%;
    }
`;

const SocialIconsContainer = () => (
  <SocialIconsDiv>
    <SocialIcon
      socialLink="https://github.com/javirequejo"
      iconLink="https://res.cloudinary.com/dls511fr9/image/upload/v1604933942/portfolio/social/github-yellow.png"
    />
    <SocialIcon
      socialLink="https://www.linkedin.com/in/javier-requejo/"
      iconLink="https://res.cloudinary.com/dls511fr9/image/upload/v1604933942/portfolio/social/linkedin-yellow.png"
    />
    <SocialIcon
      socialLink="https://twitter.com/javirequejo_"
      iconLink="https://res.cloudinary.com/dls511fr9/image/upload/v1604933942/portfolio/social/twitter-yellow.png"
    />
    <SocialIcon
      socialLink="https://t.me/javirequejo"
      iconLink="https://res.cloudinary.com/dls511fr9/image/upload/v1604933942/portfolio/social/telegram-yellow.png"
    />
  </SocialIconsDiv>
);

export default SocialIconsContainer;
