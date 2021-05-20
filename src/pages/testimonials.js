import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TestimonialsList from "../components/testimonials-list"

const Testimonials = () => {
  return (
    <Layout passedPath={"/testimonials"}>
      <Seo title="Testimonials" />
      <TestimonialsList />
    </Layout>
  );
}

export default Testimonials;
