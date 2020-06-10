import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.css";
import styled from "styled-components"
import HomeBanner from "../components/index/HomeBanner";
import Testimonials from "../components/index/Testimonials";
import FeaturedPhotos from "../components/index/FeaturedPhotos";
import AboutSection from "../components/index/AboutSection";
import JoinUs from "../components/index/JoinUs";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeBanner/>
    <AboutSection/>
    <FeaturedPhotos/>
    <Testimonials/>
    <JoinUs/>
  </Layout>
)

export default IndexPage