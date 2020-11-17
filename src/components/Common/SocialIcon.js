import React from 'react';
import styled from 'styled-components';

const IconDiv = styled.div`
    max-width: 7vw;
`;

const IconImg = styled.img`
    width: 30%;
    @media (max-width: 1280px) {
      width: 60%;
    }
    @media (max-width: 768px) {
      width: 80%;
    }
`;

const SocialIcon = (props) => {
  const { socialLink, iconLink } = props;
  return (
    <IconDiv>
      <a
        target="_blank"
        href={socialLink}
        rel="noopener noreferrer"
      >
        <IconImg src={iconLink} />
      </a>
    </IconDiv>
  );
};

export default SocialIcon;
