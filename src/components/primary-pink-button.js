import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button.css'

const PrimaryPinkButton = (props) => {
  return (
    <div className={`primary-pink-button-container ${props.rootClassName} `}>
      <button className="primary-pink-button-button button buttonSmall">
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

PrimaryPinkButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default PrimaryPinkButton
