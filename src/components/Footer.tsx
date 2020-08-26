import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.black};
  padding: 2rem 3rem;
  justify-content: space-between;
  h1 {
    font-weight: normal;
    font-size: 1rem;
    font-family: 'Anton', sans-serif;
    color: ${({ theme }) => theme.fontWhite};
  }
  p {
    color: ${({ theme }) => theme.fontWhite};
    font-size: 0.8rem;
  }
`

const Footer: React.FC = () => {
  return (
    <footer>
      <FooterContainer>
        <Link to="/">
          <h1>The Non-Athletic 2020</h1>
        </Link>
        <a href="https://github.com/Jack11709" rel="noopener" target="_blank">
          <p>A silly site built by Jack 🤖</p>
        </a>
      </FooterContainer>
    </footer>
  )
}

export default Footer
