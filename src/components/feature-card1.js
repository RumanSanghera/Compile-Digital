import React from 'react'

import PropTypes from 'prop-types'

import './feature-card1.css'

const FeatureCard1 = (props) => {
  return (
    <div className={`feature-card1-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card1-image"
      />
      <h2 className="feature-card1-text">{props.title}</h2>
      <span className="feature-card1-text1">{props.description}</span>
    </div>
  )
}

FeatureCard1.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  rootClassName: '',
  image_src: '/playground_assets/features1-200h.png',
  image_alt: 'image',
  title: 'Features',
}

FeatureCard1.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard1
