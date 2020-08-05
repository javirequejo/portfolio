import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Lato', sans-serif;
    }

    body {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
    }

    ul {
        list-style-type: none;
    }
`

export default GlobalStyle