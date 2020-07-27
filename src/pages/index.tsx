import React from 'react'

import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <h1>Index Page</h1>
      <ArticleList />
    </Layout>
  )
}

export default IndexPage
