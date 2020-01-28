import React from 'react'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`art`, `abstract art`, `art store`]} />
    <h1>Hi people</h1>
    <p>Welcome To Chi's Art Store.</p>
    <ProductGrid />
  </>
)

export default IndexPage
