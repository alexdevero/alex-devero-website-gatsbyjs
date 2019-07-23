import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout page="home">
    <SEO title="Home" keywords={['design', 'web design', 'entrepreneur', 'founder', 'ceo']} />

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1>Alex Devero</h1>

          <p>Entrepreneur, designer and developer from Czech Republic.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
