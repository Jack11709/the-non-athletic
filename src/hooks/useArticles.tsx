import { graphql, useStaticQuery } from 'gatsby'

interface Node {
  node: Article
}

export interface Article {
  fields: {
    slug: string
  }
  id: string
  html: string
  frontmatter: {
    title: string
    templateKey: string
    featuredpost: boolean
    date: string
    description: string
  }
}

const useArticles = (): Article[] => {
  const {
    allMarkdownRemark: { edges: data },
  } = useStaticQuery(
    graphql`
      query GET_ALL_ARTICLES {
        allMarkdownRemark {
          edges {
            node {
              id
              html
              frontmatter {
                title
                templateKey
                featuredpost
                date
                description
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  return data.map((i: Node) => i.node)
}

export default useArticles
