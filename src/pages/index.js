import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">page 2</Link> &nbsp;
    <Link to="/page-3/">page 3</Link>&nbsp;
    <Link to="/page-4/">page 4</Link>&nbsp;
    <Link to="/page-5/">page 5</Link>
  </Layout>
)

export default IndexPage
