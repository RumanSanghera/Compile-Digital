import React from 'react'

import PropTypes from 'prop-types'

import './outline-gray-button.css'

const OutlineGrayButton = (props) => {
  return (
    <div className="outline-gray-button-container">
      <button className="outline-gray-button-button button buttonSmall">
        {props.button}
      </button>
    </div>
  )
}

OutlineGrayButton.defaultProps = {
  button: 'Button',
}

OutlineGrayButton.propTypes = {
  button: PropTypes.string,
}

export default OutlineGrayButton
