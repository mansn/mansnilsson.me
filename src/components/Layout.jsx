import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/typography.css";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0 auto;
    /* background: #041122;
    color: white; */
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

  a:hover svg {
    fill: rgba(255, 20, 147, 0.8);
  }

  a {
    transition: all 0.3s ease-in-out 0s;
  }

  @media (max-width: 767px) {
    body {
      padding: 20px;
    }
  }
`;

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr min(65ch, 100%) 1fr;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
