import React from 'react'
import { graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { theme } from '../theme'

const StyledContent = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  justify-content: center;
  text-align: left;
  grid-column: 2;
`

const StyledIntro = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  justify-content: center;
  text-align: center;
  grid-column: 2;
`
export default function Template({ data }) {
  const { mdx } = data
  const { frontmatter, body } = mdx
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <StyledIntro>
          <h1>{frontmatter.title}</h1>
        </StyledIntro>
        <StyledContent className="blog-post-content">
          <MDXRenderer>{body}</MDXRenderer>
        </StyledContent>
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
