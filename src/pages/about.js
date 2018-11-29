import React from 'react'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <div className="hero">
      <h1>About</h1>
    </div>

    <div className="container">
      <p>I am founder/CEO of DEVERO Corporation. An entrepreneur, self-taught designer &amp; developer from Czech Republic. I am obsessed with all things business, technology and design and often step inside related fields.</p>

      <p>
        My journey in designing and developing websites, building interactive experiences and creating businesses began when I was 11. Beside work, I write extensively on{' '}
        <a className="link--red link--underline" href="https://blog.alexdevero.com/">
          my blog
        </a>
        .
      </p>

      <p>My goal is to use technology to make positive impact on the World and humankind, and change both in the process.</p>
    </div>
  </Layout>
)

export default AboutPage
