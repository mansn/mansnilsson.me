import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MontSerrat';
    src: local('MontSerrat'), url(./fonts/Montserrat/Montserrat-Light.ttf)
    format('truetype');
  }

  body {
    box-sizing: border-box;
    margin: 0 auto;
    background: #041122;
    color: white;
    padding: 96px;
    font-family: -apple-system, Roboto, sans-serif, serif;
  }

  svg {
    fill: hsl(0deg 0% 100%)
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
