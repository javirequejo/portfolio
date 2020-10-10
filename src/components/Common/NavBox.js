import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavBoxDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    height: 80rem;
    width: 20rem;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    flex-direction: column; 
    background-color: ${(props) => props.theme.colors.primary};
  `;

const NavGatsbyLink = styled(Link)`
    text-decoration: none;
    color: white;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all 200ms ease-in;
    position: relative;

    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: ".";
        color: transparent;
        background: ${(props) => props.theme.colors.pale};
        height: 1px;
        transition: all 0.4s ease-in;
    }

    :hover {
        color: ${(props) => props.theme.colors.pale};
        ::after {
        width: 100%;
        }
    }

    @media (max-width: 768px) {
        padding: 20px 0;
        font-size: 1.5rem;
        z-index: 6;
    }
`;

const NavBox = () => (
  <NavBoxDiv>
    <NavGatsbyLink to="/">Home</NavGatsbyLink>
    <NavGatsbyLink to="/">About</NavGatsbyLink>
    <NavGatsbyLink to="/">Projects</NavGatsbyLink>
    <NavGatsbyLink to="/">Blog</NavGatsbyLink>
    <NavGatsbyLink to="/">Contact</NavGatsbyLink>
  </NavBoxDiv>
);

export default NavBox;
