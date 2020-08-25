import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.black};
  /* border-bottom: 5px solid ${({ theme }) => theme.grey}; */
  h1 {
    font-weight: normal;
    font-size: 1.6rem;
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
