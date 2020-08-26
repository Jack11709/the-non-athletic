import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

interface Props {
  isArticle: boolean | undefined
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.black};
  position: ${({ isArticle }: Props) => (isArticle ? 'static' : 'fixed')};
  width: 100%;
  z-index: 1;
  padding: 0.2rem;
  h1 {
    font-weight: normal;
    font-size: 1.5rem;
    font-family: 'Anton', sans-serif;
    color: ${({ theme }) => theme.fontWhite};
  }
`

const Navbar: React.FC<Props> = ({ isArticle }) => {
  return (
    <header>
      <Nav isArticle={isArticle}>
        <Link to="/">
          <h1>The Non-Athletic</h1>
        </Link>
      </Nav>
    </header>
  )
}

export default Navbar
