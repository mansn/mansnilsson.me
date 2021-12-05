import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { theme } from '../theme'

const Content = styled.div`
  grid-column: 2;
`

const Garden = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
`

const GardenLink = styled(Link)`
  border: hsl(327deg 100% 70%) solid 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  border-radius: 5px;
  margin: 0.5em;
  white-space: pre-line;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;

  &:hover {
    color: hsl(327deg 100% 70%);
    transform: scale(1.1, 1.1);
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    // width: 100%;
    // height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`

const DigitalGarden = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Content>
          <Garden>
            <GardenLink to="/my-journey-2009-2021">
              <span>
                {`My Journey
                2009 - 2021`}
              </span>
            </GardenLink>
            <GardenLink to="/my-journey-2009-2021">
              <span>{`Upcoming Post`}</span>
            </GardenLink>
            <GardenLink to="/my-journey-2009-2021">
              <span>{`Upcoming Post`}</span>
            </GardenLink>
            <GardenLink to="/my-journey-2009-2021">
              <span>{`Upcoming Post`}</span>
            </GardenLink>
            <GardenLink to="/my-journey-2009-2021">
              <span>{`Upcoming Post`}</span>
            </GardenLink>
          </Garden>
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default DigitalGarden
