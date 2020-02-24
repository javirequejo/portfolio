import React from 'react'
import Layout from '../components/Layout'
import PostsContainer from '../components/Blog/PostsContainer'

const Blog = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <PostsContainer />
        </Layout>
    )
}

export default Blog