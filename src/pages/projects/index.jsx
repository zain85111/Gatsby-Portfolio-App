import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import "../../styles/projects.css"
import Img  from "gatsby-image"

const Projects = ({ data }) => {
  console.log(data)
  const projects = data.projects.nodes

  return (
    <Layout>
      <div className="portfolio">
        <h3>My Projects</h3>
        <div className="projects">
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div className="projectLink">
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} style={{ width: '100%', heigth:'100px' }}/>
                <h3>{ project.frontmatter.title }</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;

export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {order: ASC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        date
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`