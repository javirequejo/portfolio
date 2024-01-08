import React from 'react';
import styled from 'styled-components';

const FooterParagraph = styled.p`
    padding: 2vh 8vw;
    border-top: 1px solid #243b55;
    color: #243b55;
`;

const Footer = () => (
  <footer>
    <FooterParagraph>Created by Javi Requejo, 2024</FooterParagraph>
  </footer>
);

export default Footer;
