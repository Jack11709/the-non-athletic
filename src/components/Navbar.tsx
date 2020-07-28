import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  height: 20vh;
`
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #333;
  color: #fff;
`

const Navbar: React.FC = () => {
  return (
    <Header>
      <Nav>
        <h1>The Non-Atheletic</h1>
      </Nav>
    </Header>
  )
}

export default Navbar
