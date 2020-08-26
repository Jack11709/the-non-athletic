import React from 'react'
import Img from 'gatsby-image'
import { Article } from '../hooks/useArticles'
import styled from 'styled-components'

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px ${({ theme }) => theme.grey};
  @media (min-width: 550px) {
    border: solid 1px ${({ theme }) => theme.grey};
    box-shadow: 0 1px 0 0 ${({ theme }) => theme.grey};
    border-radius: 4px;
    margin-bottom: 1rem;
  }
`

const ArticleHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 0.7rem;
    padding: 0 0.5rem;
    font-weight: 700;
  }
  p:first-of-type {
    border-left: 2px solid ${({ theme }) => theme.black};
  }
  p:last-of-type {
    color: ${({ theme }) => theme.grey};
  }
`

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
`

const ArticleImage = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`

const ArticlePreview = styled.div`
  padding: 1rem;
  h2 {
    font-size: 1.3rem;
    margin: 0;
  }
  p:first-of-type {
    color: ${({ theme }) => theme.grey};
    font-size: 0.8rem;
  }
  p:last-of-type {
    font-size: 0.9rem;
    display: none;
    @media (min-width: 550px) {
      display: block;
    }
  }
`

const ArticleCard: React.FC<Article> = ({ frontmatter: { title, image, sport, author, description } }) => {
  return (
    <ArticleContainer>
      <ArticleHeader>
        <p>{sport}</p>
        <p>2h Ago</p>
      </ArticleHeader>
      <ArticleContent>
        <ArticleImage>
          <Img alt={title} fluid={image.childImageSharp.fluid} />
        </ArticleImage>
        <ArticlePreview>
          <h2>{title}</h2>
          <p>{author}</p>
          <p>{description}</p>
        </ArticlePreview>
      </ArticleContent>
    </ArticleContainer>
  )
}

export default ArticleCard
