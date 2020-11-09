import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
    display: flex;
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    color: #f8c630;
    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
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
