import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import Banner from "../content/about/about_cover.jpg"
import AboutCard from "../components/AboutCard"

const bannerStyles = {
    width: '100%',
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Banner})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
}

const bannerTextStyles = {
    padding: '10%',
    color: 'white',
}

const BannerContainer = () => (
    <div style={bannerStyles}>
        <div style={bannerTextStyles}>
            <h1> Welcome! </h1>
            <h2>CodeForCommunity is an umbrella project of SoC Family, a network of SoC Students, 
            Staff and Alumni who take great pride in helping develop the projects for underserved 
            communities.</h2>
        </div>
    </div>
)

const PartnerCardStyles = {
  width: '100px',
}

const PartnerCard = ({data}) => (
    <div style={PartnerCardStyles}>
        <Img fluid={data.node.frontmatter.profilePicture.childImageSharp.fluid} imgStyle={{borderRadius: '50%'}} />
        {data.node.frontmatter.name}
    </div>
)

// const PartnerContainerStyles = {

// }

const PartnerContainer = ({data}) => (
    <div>
        <PartnerCard data={data.edges[0]}/>
        <PartnerCard data={data.edges[1]}/>
        <PartnerCard data={data.edges[2]}/>
        <PartnerCard data={data.edges[3]}/>
    </div>
)

const AboutPage  = ({data}) => (
    <Layout>
    <BannerContainer/>
    <h1 style={{textAlign: "center", margin: "20px auto"}}>
        Meet the Team!
    </h1>
    <h2>Advisors</h2>
    <AboutCard about={data.bimlesh.edges[0].node.frontmatter}/>
    <h2>Operations</h2>
    <AboutCard about={data.adele.edges[0].node.frontmatter}/>
    <h2>Our Partners</h2>
    <PartnerContainer data={data.partners}/>
    </Layout>
)

export default AboutPage

//GraphQL Query
export const pageQuery = graphql`
  query teamQuery {
    bimlesh: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/bimlesh/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            role
            description
            profilePicture {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

  	adele: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/adele_chiew/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            role
            description
            profilePicture {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  
  	partners: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/partners/"}
      }
      sort: {
        fields: [frontmatter___order]
        order: ASC
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            profilePicture {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
