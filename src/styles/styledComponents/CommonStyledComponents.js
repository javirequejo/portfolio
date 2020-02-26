import styled from 'styled-components'
import { Link } from 'gatsby'

export const PageContainer = styled.div`
    width: 80em;
    height: 40em;
    margin: auto;
    border: 1px red solid;
`

export const StyledSection = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const NavGatsbyLink = styled(Link)`
    text-decoration: none;
    color: #111;
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