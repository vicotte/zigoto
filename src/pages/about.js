import React from "react"
import Header from "../components/header"

import photo from "../../media/real.jpg"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="hello Victor" />
      <p>Such wow. Very React.</p>
      <img src={photo} />
    </div>
  )
}
