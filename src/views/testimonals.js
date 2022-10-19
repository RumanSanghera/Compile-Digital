import React from 'react'

import { Helmet } from 'react-helmet'

import FooterGray from '../components/footer-gray'
import './testimonals.css'

const Testimonals = (props) => {
  return (
    <div className="testimonals-container">
      <Helmet>
        <title>Testimonals - Compile Digital</title>
        <meta property="og:title" content="Testimonals - Compile Digital" />
      </Helmet>
      <FooterGray rootClassName="footer-gray-root-class-name"></FooterGray>
    </div>
  )
}

export default Testimonals
