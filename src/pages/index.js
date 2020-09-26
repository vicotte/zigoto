import React from "react"
import Header from "../components/header"

import { Link } from "gatsby"
import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)

  function fctEssais() {
    setCount(count + 1)
  }

  return (
    <div style={{ color: `purple` }}>
      <Link to="/about/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <p>{count}</p>
      <button onClick={fctEssais}>cliquer ici </button>

      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
