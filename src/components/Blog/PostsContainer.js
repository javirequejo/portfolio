import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const PostsContainer = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                }
            }
        }
    }
    `)

    const posts = data.allMarkdownRemark.edges

    return (
        <ol>
            {posts.map((elem,key) => {
            return <li key={key}>
                <h2>{elem.node.frontmatter.title}</h2>
                <p>{elem.node.frontmatter.date}</p>
                </li>
        })}
        </ol>

    )
}

export default PostsContainer