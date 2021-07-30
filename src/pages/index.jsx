import * as React from "react";
import { Layout } from "../components";
import Logo from "../components/Logo";
import styled from "styled-components";

const linkStyle = {
  marginTop: "1em",
  textDecoration: "none",
  fontWeight: "bold",
  color: "rgb(255, 20, 147)"
};

const StyledLogo = styled(Logo)`
  grid-column: logo;
  height: 30vmin;
  pointer-events: none;
  mask-image: radial-gradient(rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%);
`;

const StyledName = styled.div`
  grid-column: name;
  margin: auto;
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
        I&apos;m a Fullstack Developer within the JavaScript stack. I work at{" "}
        <a style={linkStyle} href="https://www.qred.com/">
          Qred AB
        </a>
        .
      </p>
      <p>
        This is my personal site where I share and process thoughts I have on my mind, mostly
        related my experiences in software development, the world of work and my personal
        development.
      </p>
      <p>
        I also provide a list of personal projects at the bottom of the page for anyone that&apos;s
        interested{" "}
        <span role="img" aria-label="slightly smiling face">
          🙂
        </span>
      </p>
      <p>
        I think the{" "}
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
`;

const StyledPortfolio = styled(Portfolio)`
  grid-column: 2;
`;

const IndexPage = () => {
  return (
    <Layout>
      <title>mansnilsson.me</title>
      <StyledMe />
      <StyledIntro />
      <StyledPortfolio />
    </Layout>
  );
};

export default IndexPage;
