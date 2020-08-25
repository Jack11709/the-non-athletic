import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

import useSiteMetadata from '../hooks/useSiteMetadata'
import Navbar from './Navbar'

const theme = {
  black: '#000',
  fontWhite: '#f5f5f5',
  grey: '#ccc',
}

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Raleway', sans-serif;
  }
`

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto;
  @media (min-width: 550px) {
    padding: 1rem;
  }
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