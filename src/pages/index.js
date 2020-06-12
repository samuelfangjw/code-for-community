import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.css";
import HomeBanner from "../components/index/HomeBanner";
import Testimonials from "../components/index/Testimonials";
import AboutSection from "../components/index/AboutSection";
import JoinUs from "../components/index/JoinUs";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeBanner/>
    <AboutSection/>
    <Testimonials/>
    <JoinUs/>
  </Layout>
)

export default IndexPage