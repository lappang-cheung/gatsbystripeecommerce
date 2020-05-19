import React, { useState } from "react"

import Layout from "../components/layout"
import Product from "../components/product"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Product />
        <Product />
        <Product />
      </div>
    </Layout>
  )
}

export default IndexPage