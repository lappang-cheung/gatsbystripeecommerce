import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  const stripe = window.Stripe("pk_test_VHkZtUPbeQs29wIEEUpe6CQI")
  
  const placeOrder = (sku) => {
    stripe.redirectToCheckout({
      items: [
        {
          sku,
          quantity: 1,
        },
      ],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Level Up Store</h1>
      <div>
        <article>
          <img src="https://picsum.photos/340/400" alt="Level Up TShirt" />
          <h3>Level Up T-Shirts</h3>
          <button onClick={() => placeOrder("sku_HIteQ4VNRPobol")}>
            Buy Me
          </button>
        </article>
      </div>
    </Layout>
  )
}

export default IndexPage