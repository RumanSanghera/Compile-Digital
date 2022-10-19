import React from 'react'

import PropTypes from 'prop-types'

import './feature-card4.css'

const FeatureCard4 = (props) => {
  return (
    <div className={`feature-card4-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card4-image"
      />
      <h2 className="feature-card4-text">{props.title}</h2>
      <span className="feature-card4-text1">{props.description}</span>
    </div>
  )
}

FeatureCard4.defaultProps = {
  image_src: '/playground_assets/settings1-200h.png',
  rootClassName: '',
  title: 'Bespoke Designs',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  image_alt: 'image',
}

FeatureCard4.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard4
