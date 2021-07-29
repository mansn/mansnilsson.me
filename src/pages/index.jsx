import * as React from "react";
import { Layout } from "../components";
import logo from "../images/me.webp";
import logoFallback from "../images/me.jpg";
import styled from "styled-components";

const linkStyle = {
  marginTop: "1em",
  textDecoration: "none",
  fontWeight: "bold",
  color: "rgb(255, 20, 147)"
};

const Logo = ({ className }) => {
  return (
    <picture>
      <source type="image/webp" srcSet={logo} />
      <img src={logoFallback} className={className} alt="månsnilsson" />
    </picture>
  );
};

const StyledLogo = styled(Logo)`
  grid-column: logo;
  height: 30vmin;
  pointer-events: none;
  mask-image: radial-gradient(rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%);
`;

const Me = ({ className }) => {
  return (
    <div className={className}>
      <StyledLogo />
      <div className="name">
        <h1>Måns Nilsson</h1>
      </div>
    </div>
  );
};

const Portfolio = ({ className }) => {
  const StyledList = styled.div`
    display: flex;
    flex-direction: column;
  `;

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
        interested 🙂
      </p>
      <p>
        I think the{" "}
        <a
          style={linkStyle}
          href="https://www.angryweasel.com/ABTesting/modern-testing-principles/"
        >
          Modern Testing Principles
        </a>{" "}
        are amazing, and highly recommend everyone to embrace them. 🙂
      </p>
    </div>
  );
};

const StyledIntro = styled(Intro)`
  grid-column: 2;
`;

const StyledMe = styled(Me)`
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
