import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Logo from '../components/Logo'
import ExternalLink from '../components/ExternalLink'
import { theme } from '../theme'

const StyledName = styled.div`
  grid-column: name;
  font-weight: 100;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.75em;
  }
`

const StyledMe = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  justify-content: center;
  text-align: center;
  grid-column: 2;
  z-index: -1;
`

const Me = () => {
  return (
    <StyledMe>
      <Logo />
      <StyledName>
        <h1>Måns Nilsson</h1>
      </StyledName>
    </StyledMe>
  )
}

const StyledIntro = styled.div`
  grid-column: 2;
`

const Intro = () => {
  return (
    <StyledIntro>
      <p>
        Hello there{' '}
        <span role="img" aria-label="hand waving">
          👋
        </span>
      </p>
      <p>
        I&apos;m working as an Engineering Manager & Fullstack Developer (within
        JavaScript) at{' '}
        <ExternalLink href="https://www.qred.com/">Qred AB</ExternalLink>.
      </p>
      <p>
        This is my personal site where I'm taking care of my{' '}
        <Link to="/digital-garden">Digital Garden</Link>, and sharing knowledge
        by{' '}
        <ExternalLink href="https://twitter.com/swyx/status/1009174159690264579">
          learning in public
        </ExternalLink>
        .
      </p>
    </StyledIntro>
  )
}

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <title>mansnilsson.me</title>
        <Me />
        <Intro />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
