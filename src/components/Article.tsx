import React from 'react'
import Layout from './Layout'
import styled from 'styled-components'
import { Article } from '../hooks/useArticles'

interface PageProps {
  pageContext: {
    content: Article
  }
}

const ImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`

const ArticlePage: React.FC<PageProps> = ({
  pageContext: {
    content: { frontmatter, html },
  },
}) => {
  console.log(frontmatter)
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <ImageContainer>
        <img alt={frontmatter.title} src={frontmatter.image.childImageSharp.fluid.src} />
      </ImageContainer>
      <h3>{frontmatter.description}</h3>
      {html}
    </Layout>
  )
}

export default ArticlePage
