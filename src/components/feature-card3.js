import React from 'react'

import PropTypes from 'prop-types'

import './feature-card3.css'

const FeatureCard3 = (props) => {
  return (
    <div className={`feature-card3-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card3-image"
      />
      <h2 className="feature-card3-text">{props.title}</h2>
      <span className="feature-card3-text1">{props.description}</span>
    </div>
  )
}

FeatureCard3.defaultProps = {
  image_src: '/playground_assets/money-200h.png',
  image_alt: 'image',
  title: 'Low Cost',
  rootClassName: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
}

FeatureCard3.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard3
