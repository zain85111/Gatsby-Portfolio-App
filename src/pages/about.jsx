import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import  "../styles/about.css"
// import styles from "../styles/about.module.css"

export default function About() {
  return (
    <div>
      <Layout>
        <div className="main">
          <h3>About</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum tenetur rem nihil voluptates minus, ut dolores fuga magnam itaque perferendis similique laborum ducimus reiciendis quae veniam. Consequatur, dolorum eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus voluptate unde provident ullam magnam modi ipsam nobis assumenda quia, in corporis aut iste harum impedit architecto. Id, consectetur? Quaerat.</p>
          <Link className="btn" to="/projects">See Projects</Link>
        </div>
      </Layout>
    </div>
  )
}
