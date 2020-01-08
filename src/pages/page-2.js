import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'

const SecondPage = () => (
  <>
    <SEO title="Who is Chi?" />
    <h1>Who is Chi?</h1>
    <p>Well let me tell you</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
