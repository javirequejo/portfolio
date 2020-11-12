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

    .yellow-text {
        color: #f8c630;
    }

    @keyframes slide-in-left {
        0% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-right {
        0% {
            -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-bottom {
        0% {
            -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }
    }
    
`;

export default GlobalStyle;
