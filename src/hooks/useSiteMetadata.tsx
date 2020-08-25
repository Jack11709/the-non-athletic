import { graphql, useStaticQuery } from 'gatsby'

interface MetadataValue {
  title: string
  description: string
}

const useSiteMetadata = (): MetadataValue => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
