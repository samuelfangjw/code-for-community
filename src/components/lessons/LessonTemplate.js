import React from "react"
import { Link, graphql } from "gatsby"
import Sidebar from "./sidebar.js"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

const Content = styled.div`
  margin: 20px;
`

const LinkRight = styled(Link)`
  border: 1px solid black;
  text-decoration: none;
  color: black;
  padding: 10px;
  border-radius: 5px;
  float: right;
`

const LinkLeft = styled(Link)`
  border: 1px solid black;
  text-decoration: none;
  color: black;
  padding: 10px;
  border-radius: 5px;
  float: left;
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

  const shortcodes = { LinkRight, LinkLeft }

  const content = (
    <Content>
      <h1>{frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </Content>
  )

  return <Sidebar programme={frontmatter.programme} content={content} />
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
