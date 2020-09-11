import React from 'react'
import styled from 'styled-components'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share'

interface ShareProps {
  title: string
}

const ShareContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin: 1rem 0 2rem;
`
const commonProps = {
  round: true,
  size: 40,
}

const Share: React.FC<ShareProps> = ({ title }) => {
  const currentUrl = window?.location?.href
  return (
    <ShareContainer>
      <FacebookShareButton quote={title} hashtag="non-athletic" url={currentUrl}>
        <FacebookIcon {...commonProps} />
      </FacebookShareButton>
      <TwitterShareButton url={currentUrl} title={title} via="the-non-athletic" hashtags={['the-non-atheletic']}>
        <TwitterIcon {...commonProps} />
      </TwitterShareButton>
      <WhatsappShareButton url={currentUrl} title={title}>
        <WhatsappIcon {...commonProps} />
      </WhatsappShareButton>
      <RedditShareButton url={currentUrl} title={title}>
        <RedditIcon {...commonProps} />
      </RedditShareButton>
    </ShareContainer>
  )
}

export default Share
