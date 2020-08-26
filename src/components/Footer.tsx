import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.black};
  div {
    max-width: 840px;
    margin: 0 auto;
    padding: 2rem 2rem 4rem;
  }
  h1,
  p {
    margin-left: 1rem;
  }
  h1 {
    font-weight: normal;
    font-size: 1rem;
    font-family: 'Anton', sans-serif;
    color: ${({ theme }) => theme.fontWhite};
  }
  p {
    color: ${({ theme }) => theme.fontWhite};
    font-size: 0.8rem;
    margin: 1.5rem 1rem;
  }
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>
        <h1>The Non-Athletic 2020</h1>
        <a href="https://github.com/Jack11709" rel="noopener" target="_blank">
          <p>A silly site built by Jack</p>
        </a>
      </div>
    </FooterContainer>
  )
}

export default Footer
