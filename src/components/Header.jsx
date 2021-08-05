import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Home = styled.div`
  border-radius: 3px;
  border: none;
  color: palevioletred;
  grid-column: home;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const StyledHomeLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: hsl(0deg 0% 100%);
`;

const StyledLink = styled(Link)`
  padding: 0 20px;
  text-decoration: none;
  color: hsl(327deg 100% 70%);
  &:hover {
    color: hsl(0deg 0% 100%);
  }
  border-radius: 8px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const Header = ({ className }) => (
  <header className={className}>
    <Nav>
      <StyledHomeLink to="/">
        <span>Måns Nilsson</span>
      </StyledHomeLink>
      <Links>
        <StyledLink to="/">Digital Garden</StyledLink>
        <StyledLink to="/">Portfolio</StyledLink>
        <StyledLink to="/">About</StyledLink>
      </Links>
    </Nav>
  </header>
);

const StyledHeader = styled(Header)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 1em;
`;

export default StyledHeader;
