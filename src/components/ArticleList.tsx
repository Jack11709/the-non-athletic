import React from 'react'

import useArticles from '../hooks/useArticles'
import ArticleCard from './ArticleCard'

const ArticleList: React.FC = () => {
  const articles = useArticles()
  return (
    <div>
      {articles.reverse().map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  )
}

export default ArticleList
