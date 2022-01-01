import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
import { StyledMain } from './Layout.styled'
import '../../styles/typography.css'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    padding: 48px;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    font-family: MontSerrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.4;
  }

  svg {
    fill: hsl(0deg 0% 100%)
  }

  a:hover {
    color: hsl(280deg 45% 64%)
  }

  a:hover svg {
    fill: rgba(255, 20, 147, 0.8);
  }

  a {
    transition: all 0.3s ease-in-out 0s;
    margin-top: 1em;
    text-decoration: none;
    font-weight: 600;
    color: hsl(327deg 100% 70%);
  }

  @media (max-width: 768px) {
    body {
      padding: 20px;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  )
}

export default Layout
