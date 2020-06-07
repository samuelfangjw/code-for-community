import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const SidebarContainer = styled.div`
  height: 100vh;
  width: 200px;
  background: blue;
`

const Sidebar = ({ programme }) => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/lessons/" } }
        sort: { order: ASC, fields: [frontmatter___order] }
      ) {
        edges {
          node {
            frontmatter {
              title
              programme
            }
          }
        }
      }
    }
  `)

  const links = data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.programme == programme)
        .map(edge => 
            <div>
                {edge.node.frontmatter.title}
            </div>)
  return <SidebarContainer>{ links }</SidebarContainer>
}

export default Sidebar