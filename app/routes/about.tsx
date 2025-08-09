import { styled } from '@linaria/react'
import AnchorOrLink from '~/shared/components/AnchorOrLink'

const MainContainer = styled.div`
  min-width: min-content;
  line-height: 1.75rem;
`

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 7rem 0;
  margin-top: 2rem;
  gap: 2rem;

  @media (max-width: 1023px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const Title = styled.h1`
  font-size: 3.25rem;
  line-height: 3.5rem;
  font-weight: 400;
  align-self: center;

  @media (min-width: 1024px) {
    font-size: 3rem;
    line-height: 1;
  }
`

const ProfileImage = styled.img`
  width: auto;
  border-radius: 50%;
  margin-left: 2rem;
  max-height: 40vh;
`

export default function About() {
  return (
    <MainContainer>
      <HeroContainer>
        <div>
          <Title>
            Hi, I'm Måns Nilsson. I'm a fullstack developer based in Stockholm,
            Sweden.
          </Title>
        </div>
        <ProfileImage src="../images/me.webp" alt="Måns Nilsson in grayscale" />
      </HeroContainer>
      <p>
        I was born in 1987 in Malmö, Sweden. I started my career as a QA
        engineer, but nowadays I work as a fullstack developer within
        JavaScript/TypeScript.
      </p>
      <p>
        A few of my guiding principles is to be a responsible developer, humble,
        open-minded, calm and always staying curious. I believe this has opened
        up significant opportunities to me, such as: hosting competence forums,
        representing teams in various groups/
        <AnchorOrLink to="https://www.atlassian.com/agile/agile-at-scale/spotify">
          <span>guilds</span>
        </AnchorOrLink>{' '}
        as well leading a team of 6-7 developers as an Engineering Manager.
      </p>
      <p>
        I love working with React, TypeScript, and Node.js. I've also worked on
        a mobile app (React Native) with thousands of users. I'm always eager to
        learn new technologies and improve my skills, and that's how I've been
        able to pivot from QA engineer to a fullstack developer.
      </p>
    </MainContainer>
  )
}
