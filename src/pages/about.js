import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={['about', 'design', 'web design', 'startup', 'startups', 'entrepreneur', 'founder', 'ceo']} />

    <div className="hero">
      <h1>About</h1>
    </div>

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <p>I am founder/CEO of DEVERO Corporation. Entrepreneur, innovator, hacker, tinkerer, developer, programmer, designer, philosopher, blogger, poly(math | glot) and heretic from Czech Republic. I am obsessed with all things startups, business, technology, design and beyond. Beside working on <a href="https://devero.io" target="_blank">DEVERO Corporation</a>, I write extensively on <a className="link--red link--underline" href="https://blog.alexdevero.com/">my blog</a>.</p>

          <p>My goal is to create the biggest company in the history and use technology to change the World and humankind.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
