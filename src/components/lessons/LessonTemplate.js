import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Sidebar from "./Sidebar.js"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Content = styled.div`
  margin: 20px;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container>
        <Sidebar programme={frontmatter.programme} />
        <div>
          <Content>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Content>
          </div>
      </Container>
      
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        programme
      }
    }
  }
`
