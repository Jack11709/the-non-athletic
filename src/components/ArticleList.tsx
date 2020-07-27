import React from 'react'
import useArticles from '../hooks/useArticles'

const ArticleList: React.FC = () => {
  const articles = useArticles()

  console.log(articles)
  return <div>Articles List</div>
}

export default ArticleList
