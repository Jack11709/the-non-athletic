import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
import useSiteMetadata from '../hooks/useSiteMetadata'
import Navbar from './Navbar'
import Footer from './Footer'
import useDarkMode from 'use-dark-mode'

interface PageProps {
  isArticle?: boolean
}

const themeLight = {
  isDark: false,
  black: '#181818',
  fontWhite: '#f5f5f5',
  fontMain: '#fff',
  grey: '#ccc',
  fontGrey: '#696969',
  background: '#030303',
}

const themeDark = {
  isDark: true,
  black: '#181818',
  fontWhite: '#f5f5f5',
  fontMain: '#030303',
  grey: '#ccc',
  fontGrey: '#696969',
  background: '#fff',
}

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Raleway', sans-serif;
    background-color: ${({ theme: { background } }: { theme: { background: string } }) => background}
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Main = styled.main`
  max-width: 840px;
  margin: 0 auto;
  @media (min-width: 550px) {
    padding: 0 2rem;
  }
  @media (min-width: 960px) {
    padding: 0 1rem;
  }
`

const Layout: React.FC<PageProps> = ({ children, isArticle }) => {
  const { title, description } = useSiteMetadata()
  const darkTheme = useDarkMode(false)

  const toggleTheme = () => {
    darkTheme.value ? darkTheme.disable() : darkTheme.enable()
  }

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <ThemeProvider theme={darkTheme.value ? themeDark : themeLight}>
        <GlobalStyle />
        <Navbar isArticle={isArticle} toggleTheme={toggleTheme} />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
