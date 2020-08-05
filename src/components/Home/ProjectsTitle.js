import React from 'react'
import styled from 'styled-components'
import {SectionTitle} from '../../styles/styledComponents/CommonStyledComponents'

const TitleContainer = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    padding: 1rem;
    margin: 2rem;
`

const ProjectsTitle = () => {
    return (
        <TitleContainer>
            <SectionTitle>Things that I've built</SectionTitle>
        </TitleContainer>
    )
}

export default ProjectsTitle