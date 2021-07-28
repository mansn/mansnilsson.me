import * as React from "react"
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Paragraph from '../components/Paragraph'
import logo from '../images/me.webp'
import logoFallback from '../images/me.jpg'
import styled from 'styled-components'

const pageStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr min(65ch, 100%) 1fr', 
  background: "#041122",
  color: "white",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const linkStyle = {
  textDecoration: "none",
  fontWeight: "bold",
  color: "rgb(255, 20, 147)"
}

const Logo = ({className}) => {
  return (
    <picture>
      <source type="image/webp" srcSet={logo} />
      <img
        src={logoFallback}
        className={className}
        alt="månsnilsson"
      />
    </picture>
  )
}

const StyledLogo = styled(Logo)`
  grid-column: logo;
  height: 30vmin;
  pointer-events: none;
  mask-image: radial-gradient(rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%)
`

const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <title>mansnilsson.me</title>
        <header className="App-header">
        <StyledLogo />
          <div className="name">
            <h1>Måns Nilsson</h1>
          </div>
        </header>
          <Paragraph>
            Hello there{' '}
            <span role="img" aria-label="hand waving">
              👋
            </span>
          </Paragraph>
          <Paragraph>
          I&apos;m a Fullstack Developer within the JavaScript stack. I work at{' '}
          <a style={linkStyle} href="https://www.qred.com/">Qred AB</a>.
          </Paragraph>
          <Paragraph>This is my personal site where I share and process thoughts I have on my mind,
          mostly related my experiences in software development, the world of work and my personal development.
          </Paragraph>
          <Paragraph>
          I also provide a list of personal projects at the bottom of the page for anyone that&apos;s interested 🙂
          </Paragraph>
            <Paragraph>
              I think the{' '}
              <a style={linkStyle} href="https://www.angryweasel.com/ABTesting/modern-testing-principles/">
                Modern Testing Principles
              </a>{' '}
              are amazing, and highly recommend everyone to embrace
              them. 🙂
            </Paragraph>
        <Footer />
      </main>
    </Layout>
  )
}

export default IndexPage
