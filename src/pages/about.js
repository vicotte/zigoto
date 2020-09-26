import React from "react"
import Header from "../components/header"

import photo from "../images/real.jpg"
import { graphql } from "gatsby"

import Img from "gatsby-image"

export default function About({ data }) {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="hello Victor" />
      <p>Such wow. Very React.</p>
      <Img fluid={data.zigoto.childImageSharp.fluid} />
    </div>
  )
}
export const query = graphql`
  {
    zigoto: file(relativePath: { eq: "real.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
