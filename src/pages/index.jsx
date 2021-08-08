import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import { theme } from "../theme";

const StyledExternalLink = styled.a`
  margin-top: 1em;
  text-decoration: none;
  font-weight: bold;
  color: hsl(327deg 100% 70%);
`;

const StyledName = styled.div`
  grid-column: name;
  font-weight: 100;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.75em;
  }
`;

const StyledMe = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  justify-content: center;
  text-align: center;
  grid-column: 2;
  z-index: -1;
`;

const Me = () => {
  return (
    <StyledMe>
      <Logo />
      <StyledName>
        <h1>Måns Nilsson</h1>
      </StyledName>
    </StyledMe>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPortfolio = styled.div`
  grid-column: 2;
`;

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <h3>Portfolio</h3>
      <List className="portfolio">
        <StyledExternalLink href="https://github.com/weaddquality/business-model-canvas">
          Business Model Canvas (React Web App)
        </StyledExternalLink>
        <StyledExternalLink href="https://github.com/weaddquality/bmc-aws-lambda-serverless">
          Business Model Canvas (Serverless backend)
        </StyledExternalLink>
        <StyledExternalLink href="https://github.com/mansn/workout">
          Workout App{" "}
          <span role="img" aria-label="man weightlifter">
            🏋️‍♂️ (React JAMStack App)
          </span>
        </StyledExternalLink>
      </List>
    </StyledPortfolio>
  );
};

const StyledIntro = styled.div`
  grid-column: 2;
`;

const Intro = () => {
  return (
    <StyledIntro>
      <p>
        Hello there{" "}
        <span role="img" aria-label="hand waving">
          👋
        </span>
      </p>
      <p>
        I&apos;m a Fullstack Developer within JavaScript. I work at{" "}
        <StyledExternalLink href="https://www.qred.com/">Qred AB</StyledExternalLink>.
      </p>
      <p>
        This is my personal site where I'll soon™️ start working on my{" "}
        <StyledExternalLink href="https://joelhooks.com/digital-garden">
          digital garden
        </StyledExternalLink>{" "}
        and share knowledge by{" "}
        <StyledExternalLink href="https://twitter.com/swyx/status/1009174159690264579">
          learning in public
        </StyledExternalLink>
        .
      </p>
      <p>
        I also provide a list of personal projects at the bottom of the page for anyone that&apos;s
        interested{" "}
        <span role="img" aria-label="slightly smiling face">
          🙂
        </span>
      </p>
      <p>
        Oh, btw: I think the{" "}
        <StyledExternalLink href="https://www.angryweasel.com/ABTesting/modern-testing-principles/">
          Modern Testing Principles
        </StyledExternalLink>{" "}
        are amazing, and highly recommend everyone to embrace them.{" "}
        <span role="img" aria-label="slightly smiling face">
          🙂
        </span>
      </p>
    </StyledIntro>
  );
};

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <title>mansnilsson.me</title>
        <Me />
        <Intro />
        <Portfolio />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
