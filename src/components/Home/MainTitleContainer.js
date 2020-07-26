import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { SpanSpacer } from '../../styles/styledComponents/CommonStyledComponents'


const MainDivTitle = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    padding: 1rem;
`

const MainH1Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    background: #0e153a;
    background: rgba(14, 21, 58, 0.7);
    border-radius: 0.1em;
`

const MainTitleContainer = () => {
    const author = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <MainDivTitle>
            <MainH1Title>
                Hi, I'm {author.site.siteMetadata.author},<SpanSpacer></SpanSpacer>
                <br /><SpanSpacer></SpanSpacer> a Full Stack Developer<SpanSpacer></SpanSpacer>
                </MainH1Title>
        </MainDivTitle>
    )
}

export default MainTitleContainer
