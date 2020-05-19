import React, { useState } from "react"

const Product = () => {
  const stripe = window.Stripe(process.env.PUBLISHABLE_KEY)
  const [sku, setSku] = useState("sku_HIuQrKxYnguqJ3")

  const placeOrder = () => {
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
    <article>
        <img src="https://picsum.photos/340/400" alt="Level Up TShirt" />
        <h3>Level Up T-Shirts</h3>
        <select defaultValue={sku} onChange={e => setSku(e.target.value)}>
        <option value="sku_HIuQrKxYnguqJ3">Small</option>
        <option value="sku_HIuQTWh9gerR0a">Medium</option>
        <option value="sku_HIuQWj6YMX6YUf">Large</option>
        </select>
        <button onClick={placeOrder}>Buy Me</button>
    </article>
  )
}

export default Product
