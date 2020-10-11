import React from 'react';
import styled from 'styled-components';

const FooterParagraph = styled.p`
    padding: 2vh 8vw;
    border-top: 1px solid;
`;

const Footer = () => (
  <footer>
    <FooterParagraph>Created by Javi Requejo, 2020</FooterParagraph>
  </footer>
);

export default Footer;
