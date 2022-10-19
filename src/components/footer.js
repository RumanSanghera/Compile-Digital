import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">Compile Digital</span>
          <span>Based in the UK</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text02 large">Company</span>
            <span className="footer-text03 large">About Us</span>
            <span className="footer-text04 large">Careers</span>
            <span className="footer-text05 large">Press</span>
          </div>
          <div className="footer-container4">
            <span className="footer-text06 large">Pages</span>
            <span className="footer-text07 large">Login</span>
            <span className="footer-text08 large">Register</span>
            <span className="footer-text09 large">About</span>
          </div>
          <div className="footer-container5">
            <span className="footer-text10 large">Products</span>
            <span className="footer-text11 large">Free</span>
            <span className="footer-text12 large">PRO</span>
            <span className="footer-text13 large">Latest</span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className="footer-image"
      />
    </footer>
  )
}

export default Footer
