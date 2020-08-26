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
  div,
  h3 {
    line-height: 1.5rem;
  }
  .sub {
    color: ${({ theme }) => theme.fontGrey};
    font-size: 0.9rem;
  }
  @media (min-width: 550px) {
    h1 {
      font-size: 2.5em;
    }
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
        <p className="sub">{frontmatter.date}</p>
        <p className="sub">{frontmatter.author}</p>
        <ImageContainer>
          <Img alt={frontmatter.title} fluid={frontmatter.image.childImageSharp.fluid} />
        </ImageContainer>
        <p className="sub">Share this Story:</p>
        <Share />
        <h3>{frontmatter.description}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p className="sub">Share this Story:</p>
        <Share />
      </ArticleContainer>
    </Layout>
  )
}

export default ArticlePage
