import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ExternalLink from '../components/ExternalLink'
import Layout from '../components/Layout'
import { theme } from '../theme'

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledPortfolio = styled.div`
  grid-column: 2;
`

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <StyledPortfolio>
          <List>
            <ExternalLink href="https://github.com/weaddquality/business-model-canvas">
              Business Model Canvas (React Web App)
            </ExternalLink>
            <ExternalLink href="https://github.com/weaddquality/bmc-aws-lambda-serverless">
              Business Model Canvas (Serverless backend)
            </ExternalLink>
            <ExternalLink href="https://github.com/mansn/workout">
              Workout App{' '}
              <span role="img" aria-label="man weightlifter">
                🏋️‍♂️ (React JAMStack App)
              </span>
            </ExternalLink>
          </List>
        </StyledPortfolio>
      </Layout>
    </ThemeProvider>
  )
}

export default Portfolio
