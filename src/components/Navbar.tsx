import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

interface Props {
  home: string | undefined
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.black};
  position: ${({ home }: Props) => (home ? 'fixed' : 'static ')};
  width: 100%;
  z-index: 1;
  h1 {
    font-weight: normal;
    font-size: 1.5rem;
    font-family: 'Anton', sans-serif;
    color: ${({ theme }) => theme.fontWhite};
  }
`

const Navbar: React.FC<Props> = ({ home }) => {
  return (
    <header>
      <Nav home={home}>
        <Link to="/">
          <h1>The Non-Athletic</h1>
        </Link>
      </Nav>
    </header>
  )
}

export default Navbar
