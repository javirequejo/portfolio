import React from 'react';
import styled from 'styled-components';
import AboutTitle from './AboutTitle';

const ResumeDiv = styled.div`
  padding: 4vh 5vw;
`;

const ResumeP = styled.p`
  padding: 2vh 0 0;
`;

const ResumeContainer = () => (
  <ResumeDiv>
    <AboutTitle>Resume</AboutTitle>
    <ResumeP>
      Here you can find my resume in
      {' '}
      <a target="_blank" rel="noreferrer" href="https://res.cloudinary.com/dls511fr9/image/upload/v1602499044/portfolio/Javier_Requejo_Resume.pdf">PDF</a>
    </ResumeP>
  </ResumeDiv>
);

export default ResumeContainer;
