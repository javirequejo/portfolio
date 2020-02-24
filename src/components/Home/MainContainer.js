import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MainDivTitle, MainH1Title } from '../../styles/styledComponents/HomeStyledComponents'

export const MainContainer = () => {
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
        <div>
            <MainDivTitle>
                <MainH1Title>
                    Hi, I'm {author.site.siteMetadata.author}<br /> a Full Stack Developer.
                </MainH1Title>
            </MainDivTitle>
        </div>
    )
}
