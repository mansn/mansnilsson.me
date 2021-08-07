import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import { theme } from "../theme";

const linkStyle = {
  marginTop: "1em",
  textDecoration: "none",
  fontWeight: "bold",
  color: "hsl(327deg 100% 70%)"
};

const StyledLogo = styled(Logo)`
  grid-column: logo;
  height: 30vmin;
  pointer-events: none;
`;

const StyledName = styled.div`
  grid-column: name;
  font-weight: 100;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.75em;
  }
`;

const Me = ({ className }) => {
  return (
    <div className={className}>
      <StyledLogo />
      <StyledName>
        <h1>Måns Nilsson</h1>
      </StyledName>
    </div>
  );
};

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Portfolio = ({ className }) => {
  return (
    <div className={className}>
      <h3>Portfolio</h3>
      <StyledList className="portfolio">
        <a style={linkStyle} href="https://github.com/weaddquality/business-model-canvas">
          Business Model Canvas (React Web App)
        </a>
        <a style={linkStyle} href="https://github.com/weaddquality/bmc-aws-lambda-serverless">
          Business Model Canvas (Serverless backend)
        </a>
        <a style={linkStyle} href="https://github.com/mansn/workout">
          Workout App{" "}
          <span role="img" aria-label="man weightlifter">
            🏋️‍♂️ (React JAMStack App)
          </span>
        </a>
      </StyledList>
    </div>
  );
};

const Intro = ({ className }) => {
  return (
    <div className={className}>
      <p>
        Hello there{" "}
        <span role="img" aria-label="hand waving">
          👋
        </span>
      </p>
      <p>
        I&apos;m a Fullstack Developer within JavaScript. I work at{" "}
        <a style={linkStyle} href="https://www.qred.com/">
          Qred AB
        </a>
        .
      </p>
      <p>
        This is my personal site where I'll soon™️ start working on my{" "}
        <a style={linkStyle} href="https://joelhooks.com/digital-garden">
          digital garden
        </a>{" "}
        and share knowledge by{" "}
        <a style={linkStyle} href="https://twitter.com/swyx/status/1009174159690264579">
          learning in public
        </a>
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
        <a
          style={linkStyle}
          href="https://www.angryweasel.com/ABTesting/modern-testing-principles/"
        >
          Modern Testing Principles
        </a>{" "}
        are amazing, and highly recommend everyone to embrace them.{" "}
        <span role="img" aria-label="slightly smiling face">
          🙂
        </span>
      </p>
    </div>
  );
};

const StyledIntro = styled(Intro)`
  grid-column: 2;
`;

const StyledMe = styled(Me)`
  display: grid;
  grid-template-columns: [logo] 1fr [name] 1fr;
  justify-content: center;
  text-align: center;
  grid-column: 2;
  z-index: -1;
`;

const StyledPortfolio = styled(Portfolio)`
  grid-column: 2;
`;

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <title>mansnilsson.me</title>
        <StyledMe />
        <StyledIntro />
        <StyledPortfolio />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
