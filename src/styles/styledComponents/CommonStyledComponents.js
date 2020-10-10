import styled from 'styled-components';

export const PageSection = styled.section`
    padding: 5vh 0;
    height: 100vh; /* 100vh (screen) - 10vh (nav) */ 
    background: no-repeat center center fixed;
    background-image: url(${(props) => (props.bg ? props.bg : 'none')});
    scroll-snap-align: start;
`;

export const SpanSpacer = styled.span`
    padding: 20px;
`;
