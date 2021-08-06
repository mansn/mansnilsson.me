import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Burger, Menu } from "../components";
import { useOnClickOutside } from "../hooks";

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

const Header = ({ className }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <header className={className}>
      <Nav>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
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
};

const StyledHeader = styled(Header)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 1em;
`;

export default StyledHeader;
