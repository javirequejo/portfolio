import React from 'react';
import styled from 'styled-components';
import AboutTitle from './AboutTitle';

const RESUME_LINK = 'https://res.cloudinary.com/dls511fr9/image/upload/v1605533386/portfolio/Javier_Requejo_Resume.pdf';

const ResumeDiv = styled.div`
  padding: 4vh 5vw;
`;

const ResumeButton = styled.a`
  padding: 1.5vh 1.5vw;
  font-size: 0.9rem;
  background: #f8c630;
  color: #141e30;
  margin-top: 3vh;
  border-radius: 10px;
  @media (max-width: 768px) {

  }
`;

const ResumeContainer = () => (
  <ResumeDiv>
    <AboutTitle>Resume</AboutTitle>
    <ResumeButton target="_blank" rel="noreferrer" href={RESUME_LINK}>
      Download PDF
    </ResumeButton>
  </ResumeDiv>
);

export default ResumeContainer;
