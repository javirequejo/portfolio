import styled from 'styled-components'
import { Link } from 'gatsby'

export const PageSection = styled.section`
    height: 90vh; /* 100vh (screen) - 10vh (nav) */ 
    background: no-repeat center center fixed;
    background-image: url(${props => props.bg ? props.bg : 'none'});
`

export const SpanSpacer = styled.span`
    padding: 20px;
`

export const NavGatsbyLink = styled(Link)`
    text-decoration: none;
    color: white;
    display: inline-block;
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
        background: goldenrod;
        height: 1px;
        transition: all 0.4s ease-in;
    }

    :hover {
        color: goldenrod;
        ::after {
        width: 100%;
        }
    }

    @media (max-width: 768px) {
        padding: 20px 0;
        font-size: 1.5rem;
        z-index: 6;
    }
`