import React from 'react'
import styled from 'styled-components'

const facebook = require('../img/social/facebook.svg')
const instagram = require('../img/social/instagram.svg')
const twitter = require('../img/social/twitter.svg')

const ShareContainer = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  margin: 1rem 0 2rem;
`
const ShareButton = styled.a`
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  img {
    width: 100%;
    height: auto;
  }
`

const Share: React.FC = () => {
  return (
    <ShareContainer>
      <ShareButton>
        <img src={facebook} alt="Facebook" />
      </ShareButton>
      <ShareButton>
        <img src={twitter} alt="Twitter" />
      </ShareButton>
      <ShareButton>
        <img src={instagram} alt="Instagram" />
      </ShareButton>
    </ShareContainer>
  )
}

export default Share
