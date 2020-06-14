import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Sidebar from "./sidebar.js"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Content = styled.div`
  margin: 20px;
  flex-grow: 1;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body } = mdx
  return (
    <Layout>
      <Container>
        <Sidebar programme={frontmatter.programme} />
          <Content>
            <h1>{frontmatter.title}</h1>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </Content>
      </Container>
      
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
        programme
      }
    }
  }
`
