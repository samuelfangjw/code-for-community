import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.css";
import HomeBanner from "../components/index/HomeBanner";
import Testimonials from "../components/index/Testimonials";
import AboutSection from "../components/index/AboutSection";
import AboutSection2 from "../components/index/AboutSection2";

import JoinUs from "../components/index/JoinUs";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeBanner/>
    <div id="about"></div>
    <AboutSection/>
    <AboutSection2/>
    <Testimonials/>
    <JoinUs/>
  </Layout>
)

export default IndexPage