import React from 'react'
import styled from 'styled-components'
import SocialIcon from './SocialIcon'

const SocialIconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


const MainSocialIcons = () => {
    return (
        <SocialIconsContainer>
            <SocialIcon socialLink="https://www.linkedin.com/in/javier-requejo/" iconLink="https://res.cloudinary.com/dls511fr9/image/upload/v1595759560/portfolio/linkedin.svg" />
            <SocialIcon socialLink="https://github.com/javirequejo" iconLink="https://res.cloudinary.com/dls511fr9/image/upload/v1595759560/portfolio/github.svg" />
            <SocialIcon socialLink="https://twitter.com/javirequejo_" iconLink="https://res.cloudinary.com/dls511fr9/image/upload/v1595759560/portfolio/gorjeo.svg" />
        </SocialIconsContainer>
    )
}

export default MainSocialIcons