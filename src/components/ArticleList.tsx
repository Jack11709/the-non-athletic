import React from 'react'
import styled from 'styled-components'
import useArticles from '../hooks/useArticles'
import ArticleCard from './ArticleCard'

const ArticleListContainer = styled.div`
  padding-top: 5rem;
`

const ArticleList: React.FC = () => {
  const articles = useArticles()
  return (
    <ArticleListContainer>
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </ArticleListContainer>
  )
}

export default ArticleList
