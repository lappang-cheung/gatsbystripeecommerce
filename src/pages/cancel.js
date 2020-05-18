import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
const CancelPage = () => {
    return (
        <Layout>
            <h1>Order Cancelled </h1>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default CancelPage
