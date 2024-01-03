import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: hsl(250deg 45% 8%);
  height: 100vh;
  text-align: left;
  position: absolute;
  left: 0;
  transition: 0.5s;
  opacity: ${({ state }) => (state === 'entered' ? '1' : '0')};
  display: ${({ state }) => (state === 'exited' ? 'none' : 'block')};
  top: ${({ state }) => (state === 'entered' ? '70px' : '65px')};
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    border-top: 0.5px solid gray;
    width: 100%;
    padding: 1.5em 1em;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    align-self: flex-start;
    font-size: 0.8em;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      text-align: left;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`
