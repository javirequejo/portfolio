import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        font-family: 'Lato', sans-serif;
    }

    body {
        background-color: #0e153a;
        color: #e2f3f5;
    }

    ul {
        list-style-type: none;
    }
`

export default GlobalStyle