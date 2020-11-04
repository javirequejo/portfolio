import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Noto Sans JP', sans-serif;
    }

    body {
        color: ${(props) => props.theme.colors.white};
        font-size: 18px;
        background: #2b5876; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #2b5876, #4e4376); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #2b5876, #4e4376); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle;
