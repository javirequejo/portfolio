import styled from 'styled-components';

export const MainDivTitle = styled.div`
    width: 35em;
    display: flex;
    align-items: left;
    justify-content: center;
    margin: 10em 0 0 5em;
    padding: 1rem;
    border: 2px solid ${(props) => props.theme.colors.primary};
`;

export const MainH1Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
`;

export const NavUlStyled = styled.ul`
    display: flex;
    width: 40rem;
    margin: 0 auto;
    flex-direction: row;
`;

export const NavLiStyled = styled.li`
    margin: 1em 2em;
    font-weight: 700;
    
`;
