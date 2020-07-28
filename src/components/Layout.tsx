import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import useSiteMetadata from '../hooks/useSiteMetadata'
import Navbar from './Navbar'

const theme = {
  background: '#333',
  color: '#f5f5f5',
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${theme.background};
    font-family: sans-serif;
    min-height: 100vh;
    color: ${theme.color};
  }
`

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto;
`

const Layout: React.FC = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Main>{children}</Main>
      </ThemeProvider>
    </>
  )
}

export default Layout
