import React from "react"
import { graphql } from "gatsby"
import Sidebar from "./sidebar.js"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Content = styled.div`
  margin: 20px;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body } = mdx

  // Detecting screen width
  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  )

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  const content = (
    <Content>
      <h1>{frontmatter.title}</h1>
      <MDXRenderer style={{}}>{data.mdx.body}</MDXRenderer>
    </Content>
  )

  return (
    <Sidebar programme={frontmatter.programme} content={content}/>
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
