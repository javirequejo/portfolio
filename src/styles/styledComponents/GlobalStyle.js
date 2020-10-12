import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Noto Sans JP', sans-serif;
    }

    body {
        color: ${(props) => props.theme.colors.primary};
        font-size: 18px;
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle;
