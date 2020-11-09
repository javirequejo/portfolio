import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Nunito', sans-serif;
    }

    body {
        color: #f2f2f2;
        font-size: 18px;
        background: linear-gradient(to right, #141e30, #243b55);
    }

    a {
        text-decoration: none;
        color: #d64045;
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle;
