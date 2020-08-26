import React from 'react'
import Img from 'gatsby-image'
import Layout from './Layout'
import styled from 'styled-components'
import { Article } from '../hooks/useArticles'
import Share from './Share'

interface PageProps {
  pageContext: {
    content: Article
  }
}

const ArticleContainer = styled.div`
  padding: 0 1.5rem;
  h1 {
    line-height: 2rem;
  }
  div,
  h3 {
    line-height: 1.5rem;
  }
  .sub {
    color: ${({ theme }) => theme.fontGrey};
    font-size: 0.9rem;
  }
`

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
  return (
    <Layout isArticle>
      <ArticleContainer>
        <h1>{frontmatter.title}</h1>
        <p className="sub">{new Date(frontmatter.date).toLocaleString('en-GB')}</p>
        <p className="sub">{frontmatter.author}</p>
        <ImageContainer>
          <Img alt={frontmatter.title} fluid={frontmatter.image.childImageSharp.fluid} />
        </ImageContainer>
        <h3>{frontmatter.description}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Share />
      </ArticleContainer>
    </Layout>
  )
}

export default ArticlePage
