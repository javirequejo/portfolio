import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'


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
                Hi, I'm {author.site.siteMetadata.author},<br /> a Full Stack Developer
                </MainH1Title>
        </MainDivTitle>
    )
}

export default MainTitleContainer
