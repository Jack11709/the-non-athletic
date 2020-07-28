import React from 'react'
import styled from 'styled-components'
import { Article } from '../hooks/useArticles'

const ArticleImage = styled.div`
  background-image: url(${({ image }: { image: string }) => '.' + image});
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(80%);
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  border-bottom: 1px solid black;
  h2 {
    margin: 0;
    font-size: 1.5rem;
  }
`

const ArticleCard: React.FC<Article> = ({ frontmatter: { title, featuredimage } }) => {
  return (
    <ArticleImage image={featuredimage.publicURL}>
      <h2>{title}</h2>
    </ArticleImage>
  )
}

export default ArticleCard
