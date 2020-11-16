import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const PostsContainer = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        description
                        slug
                    }
                }
            }
        }
    }
`);
  const posts = data.allMarkdownRemark.edges;

  return (
    <ul>
      {posts.reverse().map((elem) => (
        <li key={elem.node.frontmatter.title}>
          <Link to={elem.node.frontmatter.slug}>
            <h2 style={{ color: '#f8c630' }}>{elem.node.frontmatter.title}</h2>
          </Link>
        </li>
      ))}
    </ul>

  );
};

export default PostsContainer;
