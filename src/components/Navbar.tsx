import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Toggle from './Toggle'

interface Props {
  isArticle: boolean | undefined
  toggleTheme?: () => void
}

const Header = styled.header`
  background-color: ${({ theme }) => theme.black};
  position: ${({ isArticle }: Props) => (isArticle ? 'static' : 'fixed')};
  width: 100%;
  z-index: 1;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.2rem;
  h1 {
    font-weight: normal;
    font-size: 1.5rem;
    font-family: 'Anton', sans-serif;
    color: ${({ theme }) => theme.fontWhite};
  }
  div {
    margin-right: 1.5rem;
  }
`

const Navbar: React.FC<Props> = ({ isArticle, toggleTheme }) => {
  return (
    <Header isArticle={isArticle}>
      <Nav>
        <div />
        <Link to="/" data-testid="homepage">
          <h1>The Non-Athletic</h1>
        </Link>
        <Toggle onChange={toggleTheme} />
      </Nav>
    </Header>
  )
}

export default Navbar
