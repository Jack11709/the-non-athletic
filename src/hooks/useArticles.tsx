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
    image: {
      childImageSharp: {
        fluid: {
          aspectRatio: number
          base64: string
          sizes: string
          src: string
          srcSet: string
        }
      }
    }
    author: string
    sport: string
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
                date
                description
                author
                sport
                image {
                  childImageSharp {
                    fluid(maxWidth: 960) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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

  return data.map((i: Node) => i.node).reverse()
}

export default useArticles
