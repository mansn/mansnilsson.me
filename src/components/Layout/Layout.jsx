import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
import { StyledMain } from './Layout.styled'
import '../../styles/typography.css'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0 auto;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    padding: 40px;
    font-family: MontSerrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.7;
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
    font-weight: bold;
    color: hsl(327deg 100% 70%);
  }

  @media (max-width: 767px) {
    body {
      padding: 20px;
    }
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
