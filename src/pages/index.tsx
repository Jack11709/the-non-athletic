import React from 'react'
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'

interface PageProps {
  location: { href: string }
}

const IndexPage: React.FC<PageProps> = ({ location: { href } }) => {
  return (
    <Layout location={href}>
      <ArticleList />
    </Layout>
  )
}

export default IndexPage
