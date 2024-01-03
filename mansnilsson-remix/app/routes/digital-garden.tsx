import { Outlet } from '@remix-run/react'
import styled, { ThemeProvider } from 'styled-components'
import Layout from '../shared/components/Layout'
import { theme } from '../theme'

const Content = styled.div`
  grid-column: 2;
  margin: 0 auto;
`

const Garden = styled.div`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`

const GardenLink = styled.a`
  border: hsl(327deg 100% 70%) solid 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 16px;
  white-space: pre-line;
  box-shadow: 0 5px 15px hsl(0deg 0% 100% / 15%);
  transition: all 0.3s ease-in-out;
  width: fit-content;

  &:hover {
    color: hsl(327deg 100% 70%);
    transform: scale(1.1, 1.1);
  }

  &::after {
    @media (min-width: 768px) {
      content: '';
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      opacity: 0;
      border-radius: 5px;
      box-shadow: 0 5px 15px hsl(0deg 0% 100% / 30%);
      transition: opacity 0.3s ease-in-out;
    }
  }

  &:hover::after {
    opacity: 1;
  }
`

const UnpublishedContent = styled.div`
  border: hsl(327deg 100% 70% / 40%) solid 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 5px;
  margin: 16px;
  white-space: pre-line;
  box-shadow: 0 5px 15px hsl(0deg 0% 100% / 15%);
  transition: all 0.3s ease-in-out;
`

const InspiredBy = styled.span`
  font-weight: 600;
  display: block;
  padding-top: 48px;
  padding-left: 16px;
`

const DigitalGarden = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Content>
          <Garden>
            <GardenLink href="/my-journey-2009-2021">
              <span>
                {`My Journey
                2009 - 2021`}
              </span>
            </GardenLink>
            <GardenLink href="/people-that-inspire-me">
              <span>{`People That
              Inspire Me`}</span>
            </GardenLink>
            <UnpublishedContent>
              <span>{`Upcoming Post`}</span>
            </UnpublishedContent>
            <UnpublishedContent>
              <span>{`Upcoming Post`}</span>
            </UnpublishedContent>
            <UnpublishedContent>
              <span>{`Upcoming Post`}</span>
            </UnpublishedContent>
          </Garden>
          <InspiredBy>
            Inspired by:{' '}
            <a href="https://joelhooks.com/digital-garden">
              Joel Hooks' Digital Garden
            </a>
          </InspiredBy>
          <Outlet />
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default DigitalGarden
