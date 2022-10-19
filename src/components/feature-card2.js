import React from 'react'

import PropTypes from 'prop-types'

import './feature-card2.css'

const FeatureCard2 = (props) => {
  return (
    <div className={`feature-card2-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card2-image"
      />
      <h2 className="feature-card2-text">{props.title}</h2>
      <span className="feature-card2-text1">{props.description}</span>
    </div>
  )
}

FeatureCard2.defaultProps = {
  image_alt: 'image',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  image_src: '/playground_assets/first-aid-kit1-200h.png',
  title: 'Support',
  rootClassName: '',
}

FeatureCard2.propTypes = {
  image_alt: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard2
