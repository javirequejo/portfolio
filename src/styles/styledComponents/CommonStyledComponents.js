import styled from 'styled-components';

export const PageSection = styled.section`
    padding: 5vh 10vw;
    background: no-repeat center center fixed;
    background-image: url(${(props) => (props.bg ? props.bg : 'none')});

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

export const SpanSpacer = styled.span`
    padding: 20px;
`;
