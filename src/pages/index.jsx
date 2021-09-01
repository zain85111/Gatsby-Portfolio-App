import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import "../styles/home.css"
// import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <div>
      <Layout>
        <section className="header">
          <div>
            <h2>Developer & Designer</h2>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, totam.</h3>
            <Link className="btn" to="/projects">See Projects</Link>
          </div>
          <img src="/banner.png" alt="Site Banner" style={{width:'70%'}}/>
        </section>
      </Layout>
    </div>
  )
}
