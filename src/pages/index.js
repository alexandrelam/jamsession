import React, { useState } from "react"
import Header from "../components/Header"

export default function IndexPage() {
  const [batiment, setBatiment] = useState(localStorage.getItem('batiment') || 'Lavoisier')

  return (
    <div>
      <Header batiment={batiment} setBatiment={setBatiment}/>
    </div>
  )
}
