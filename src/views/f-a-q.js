import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import './f-a-q.css'

const FAQ = (props) => {
  return (
    <div className="f-a-q-container">
      <Helmet>
        <title>
          FAQ - Compile Digital - Low Cost Bespoke Web Development Company UK
        </title>
        <meta
          name="description"
          content="We are a web development agency with high-quality desginers and a wide range of features for your needs based in the UK"
        />
        <meta
          property="og:title"
          content="FAQ - Compile Digital - Low Cost Bespoke Web Development Company UK"
        />
        <meta
          property="og:description"
          content="We are a web development agency with high-quality desginers and a wide range of features for your needs based in the UK"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <h1 className="f-a-q-text">FAQ&apos;s Coming Soon...</h1>
      <FooterGray rootClassName="footer-gray-root-class-name"></FooterGray>
    </div>
  )
}

export default FAQ
