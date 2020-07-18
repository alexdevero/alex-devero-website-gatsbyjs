import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ThanksPage = () => (
  <Layout>
    <SEO keywords={['design', 'web design', 'entrepreneur', 'founder', 'ceo', 'thank you']} title="Thank you" />

    <h1>Thank you</h1>

    <p>Thank you very much</p>

    <p>I'm truly grateful to all the wonderful humans and companies supporting my open source work on <a href="https://www.patreon.com/alexdevero">Patreon</a>.</p>

    <h3 className="support-tier-heading">Gold Supporters <small className="support-tier-price"><a href="https://www.patreon.com/join/alexdevero/checkout?rid=5109499">&doll;100/months</a></small></h3>

    <ul style={{ display: 'none' }}>
      <li><a href="">Supporter name</a></li>
    </ul>

    <h3 className="support-tier-heading">Silver Supporter <small className="support-tier-price"><a href="https://www.patreon.com/join/alexdevero/checkout?rid=5109494">&doll;50/months</a></small></h3>

    <ul style={{ display: 'none' }}>
      <li><a href="">Supporter name</a></li>
    </ul>

    <h3 className="support-tier-heading">Bronze Supporter <small className="support-tier-price"><a href="https://www.patreon.com/join/alexdevero/checkout?rid=5109490">&doll;25/months</a></small></h3>

    <ul style={{ display: 'none' }}>
      <li><a href="">Supporter name</a></li>
    </ul>

    <h3 className="support-tier-heading">Supporters <small className="support-tier-price"><a href="https://www.patreon.com/join/alexdevero/checkout?rid=5109489">&doll;8/months</a></small></h3>

    <ul style={{ display: 'none' }}>
      <li><a href="">Supporter name</a></li>
    </ul>
  </Layout>
)

export default ThanksPage
