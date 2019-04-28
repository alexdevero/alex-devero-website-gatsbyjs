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
          <p>I am founder/CEO of DEVERO Corporation. Entrepreneur, innovator, hacker, tinkerer, developer, programmer, designer, philosopher, blogger, poly(math | glot) and heretic from Czech Republic. I am obsessed with all things startups, business, technology, design and beyond. My goal is to create the biggest company in the history and use technology to change the World and humankind.</p>

          <p>Beside working on <a href="https://devero.io" target="_blank" rel="noopener noreferrer">DEVERO Corporation</a>, I write extensively on <a className="link--red link--underline" href="https://blog.alexdevero.com/" target="_blank" rel="noopener noreferrer">my blog</a>. About social media ... I am very active on <a href="https://twitter.com/alexdevero" target="_blank" rel="noopener noreferrer">Twitter</a> where are share my tips, ideas and everything I learned so far about startups, design and technology and interesting things and news. I also like to share interesting things and news on <a href="https://www.instagram.com/alexdevero/" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
