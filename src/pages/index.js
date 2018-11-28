import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout page="home">
    <div className="container">
      <h1>Alex Devero</h1>

      <p>Entrepreneur, designer and developer from Czech Republic.</p>

      <p>
        Member of{' '}
        <a href="https://opensourcedesign.net/" rel="noopener noreferrer nofollow" target="_blank">
          Open Source Design
        </a>
        .
      </p>
    </div>
  </Layout>
)

export default IndexPage
