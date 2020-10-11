import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
    display: flex;
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
`;

const H2Title = (props) => {
  const { title } = props;
  return (
    <TitleContainer>
      <SectionTitle>{title}</SectionTitle>
    </TitleContainer>
  );
};

export default H2Title;
