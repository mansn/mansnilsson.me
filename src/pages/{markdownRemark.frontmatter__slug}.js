import React from "react"
import { graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Layout from "../components/Layout"
import { theme } from "../theme"

const StyledContent = styled.div`
display: grid;
grid-auto-columns: 1fr 1fr;
justify-content: center;
text-align: center;
grid-column: 2;
z-index: -1;
`

const StyledIntro = styled.div`
display: grid;
grid-auto-columns: 1fr 1fr;
justify-content: center;
text-align: center;
grid-column: 2;
z-index: -1;
`
export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <StyledIntro>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
        </StyledIntro>
        <StyledContent
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`