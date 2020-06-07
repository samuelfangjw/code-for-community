import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link, graphql } from "gatsby"

const Kickstart = ({ data }) => {
  const PostsLinks = data.allMarkdownRemark.edges.map(edge => (
    <Link to={edge.node.frontmatter.slug}>
      <p>{edge.node.frontmatter.title}</p>
    </Link>
  ))
  return <div>{PostsLinks}</div>
}

export default Kickstart

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/lessons/kickstart/" } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
