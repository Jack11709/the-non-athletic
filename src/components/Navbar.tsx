import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f5f5f5;
`

const Navbar: React.FC = () => {
  return (
    <header>
      <Nav>
        <h1>The Non-Atheletic</h1>
      </Nav>
    </header>
  )
}

export default Navbar
