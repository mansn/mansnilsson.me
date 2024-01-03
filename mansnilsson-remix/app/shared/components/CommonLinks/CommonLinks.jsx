import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  padding: 0 20px;
  text-decoration: none;
  color: hsl(327deg 100% 70%);
  &:hover {
    color: hsl(0deg 0% 100%);
  }
  border-radius: 8px;
`

const CommonLinks = () => (
  <>
    <StyledLink href="/digital-garden">Digital Garden</StyledLink>
    <StyledLink href="/">About</StyledLink>
  </>
)

export default CommonLinks
