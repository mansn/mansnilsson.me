import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Burger from "../Burger";
import Menu from "../Menu";
import { StyledHeader } from "./Header.styled";
import { useOnClickOutside } from "../../hooks";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const LinksMobile = styled.div`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

const StyledHomeLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: hsl(0deg 0% 100%);
  font-weight: 900;
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

const LinksDesktop = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setMenuOpen(false));

  return (
    <StyledHeader>
      <Nav>
        <StyledHomeLink to="/">
          <span>Måns Nilsson</span>
        </StyledHomeLink>
        <LinksMobile ref={node}>
          <Burger open={menuOpen} setOpen={setMenuOpen} />
          <Menu open={menuOpen} setOpen={setMenuOpen} />
        </LinksMobile>
        <LinksDesktop>
          <StyledLink to="/">Digital Garden</StyledLink>
          <StyledLink to="/">Portfolio</StyledLink>
          <StyledLink to="/">About</StyledLink>
        </LinksDesktop>
      </Nav>
    </StyledHeader>
  );
};

export default Header;