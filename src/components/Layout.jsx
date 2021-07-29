import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";
import "../css/typography.css";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0 auto;
    background: #041122;
    color: white;
    padding: 96px;
    font-family: 'MontSerrat';
    /* font-family: MontSerrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; */
    line-height: 1.7;
  }

  svg {
    fill: hsl(0deg 0% 100%)
  }

  a:hover svg {
    fill: rgba(255, 20, 147, 0.8);
  }

  @media (max-width: 767px) {
    body {
      padding: 20px;
    }
    
    h1 {
      font-size: 1.40em
    }
  }
`;

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr min(65ch, 100%) 1fr;
`;

const Layout = ({ children }) => {
  return (
    <StyledMain>
      <GlobalStyle />
      {children}
      <Footer />
    </StyledMain>
  );
};

export default Layout;
