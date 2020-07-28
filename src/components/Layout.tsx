import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Navbar from './Navbar'

const Main = styled.main`
  max-width: 960px;
  margin: 3rem auto 1rem;
`

import useSiteMetadata from '../hooks/useSiteMetadata'

const Layout: React.FC = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Navbar />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
