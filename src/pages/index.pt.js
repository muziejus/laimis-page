import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout-en"
import Seo from "../components/seo"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <Seo title="Home" />

    <p>TK</p>
  </Layout>)

export default IndexPage
