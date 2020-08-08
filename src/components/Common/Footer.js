import React from 'react'
import styled from 'styled-components'

const FooterParagraph = styled.p`
    padding: 2vh 8vw;
`

const Footer = () => {
    return (
        <footer>
            <FooterParagraph>Created by Javi Requejo with love in 2020</FooterParagraph>
        </footer>
    )
}

export default Footer