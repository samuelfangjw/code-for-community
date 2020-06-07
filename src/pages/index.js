import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.css";
import { graphql } from "gatsby";
import HomeBanner from "../components/index/HomeBanner";
import Testimonials from "../components/index/Testimonials";
import FeaturedPhotos from "../components/index/FeaturedPhotos";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeBanner/>
    <h2>Some of our projects!</h2>
    <FeaturedPhotos/>
    <Testimonials/>
  </Layout>
)

export default IndexPage