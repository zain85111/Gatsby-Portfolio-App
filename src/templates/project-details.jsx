import React from 'react'
import Layout from '../components/Layout'
import Img from "gatsby-image"
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featured } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div >
                    <Img fluid={featured.childImageSharp.fluid } style={{ height:"120px", margin:"40px 0"}}/>
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }}/>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featured {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`