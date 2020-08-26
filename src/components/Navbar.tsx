import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.black};
  h1 {
    font-weight: normal;
    font-size: 1.5rem;
    font-family: 'Anton', sans-serif;
    color: ${({ theme }) => theme.fontWhite};
  }
`

const Navbar: React.FC = () => {
  return (
    <header>
      <Nav>
        <h1>The Non-Athletic</h1>
      </Nav>
    </header>
  )
}

export default Navbar
