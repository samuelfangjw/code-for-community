import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.css";
import ContactBanner from "../components/contact/ContactBanner";

const IndexPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactBanner/>
    <h1>Contact Us!</h1>
  </Layout>
)

export default IndexPage