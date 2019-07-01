import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  var photos = data.allPixabayPhoto.edges
  return(
   <Layout>
   <SEO title="Home" />
   <h1>Hi people</h1>
   <p>Welcome to your new Gatsby site.</p>
   <p>Now go build something great.</p>
   <figure style={{ display: `flex`, flexWrap: `wrap`, justifyContent: `flex-start`}}>

   {photos.map(photo => 
    <img src={photo.node.largeImageURL} style={{flex: `1 0 calc(100%/3 - 2rem)`, minWidth: `250px`, width: `100%`, margin: `0.5rem`}} />
      )}
      </figure>

      <Link to="/page-2/">page 2</Link> &nbsp;
      <Link to="/page-3/">page 3</Link>&nbsp;
      <Link to="/page-4/">page 4</Link>&nbsp;
      <Link to="/page-5/">page 5</Link>
      </Layout>

      )
  }

  export const query = graphql`
  query photoQuery {
      allPixabayPhoto(limit: 10) {
        edges {
          node {
            largeImageURL
            pageURL
            tags
            user
        }
    }
}
}
`

export default IndexPage
