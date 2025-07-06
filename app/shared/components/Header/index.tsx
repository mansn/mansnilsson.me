import { styled } from '@linaria/react'
import Link from '../Link'

const HeaderContainer = styled.header`
  width: 100%;
  font-family: 'Hind Siliguri', sans-serif;
  text-align: left;
  color: white;
  display: flex;
  justify-content: space-between;
`

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`

const SocialList = styled.ul`
  display: flex;
  gap: 1rem;
  margin-left: auto;
`

const SocialItem = styled.li`
  list-style: none;
`

const SocialIcon = styled.svg`
  fill: white;
  &:hover {
    fill: #fda4af; /* rose-300 in Tailwind */
  }
`

const NavLink = styled.a`
  color: white;
`

export default function Header() {
  return (
    <HeaderContainer style={{ maxWidth: '100%' }}>
      <Nav>
        <NavLink href="/">
          {' '}
          <span>Måns Nilsson</span>
        </NavLink>
        <a href="/blog">Blog</a>
      </Nav>
      <SocialList>
        <SocialItem>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/mansnilsson1/"
          >
            <SocialIcon
              role="img"
              height="28"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn icon</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </SocialIcon>
          </a>
        </SocialItem>
        <SocialItem>
          <a rel="me" href="https://bsky.app/profile/mansnilsson.me">
            <SocialIcon
              role="img"
              height="28"
              viewBox="0 0 600 530"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Link to Måns' BlueSky</title>
              <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"></path>
            </SocialIcon>
          </a>
        </SocialItem>
        <SocialItem>
          <a className="github" href="https://github.com/mansn">
            <SocialIcon
              role="img"
              height="28"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub icon</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </SocialIcon>
          </a>
        </SocialItem>
      </SocialList>
    </HeaderContainer>
  )
}
