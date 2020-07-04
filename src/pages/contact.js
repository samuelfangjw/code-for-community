import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.css";
import ContactBanner from "../components/contact/ContactBanner";
import ContactForm from "../components/contact/ContactForm";

const IndexPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactBanner/>
    <ContactForm />
  </Layout>
)

export default IndexPage