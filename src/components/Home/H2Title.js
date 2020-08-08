import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    padding: 1rem;
    margin: 2rem;
`

export const SectionTitle = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
`

const H2Title = props => {
    return (
        <TitleContainer>
            <SectionTitle>{props.title}</SectionTitle>
        </TitleContainer>
    )
}

export default H2Title