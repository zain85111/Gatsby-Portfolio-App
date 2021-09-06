import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import "../styles/home.css"
import Img from "gatsby-image"

export default function Home({ data }) {

  return (
    <div>
      <Layout>
        <section className="header">
          <div>
            <h2>Developer & Designer</h2>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, totam.</h3>
            <Link className="btn" to="/projects">See Projects</Link>
          </div>
          {/* <img src="/banner.png" alt="Site Banner" style={{ width: '60%' }} /> */}
          <Img fluid={data.file.childImageSharp.fluid } style={{ width: '60%' }}/>
        </section>
      </Layout>
    </div>
  )
}

export const query = graphql`
query ImagesQuery {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`