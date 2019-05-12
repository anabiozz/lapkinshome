import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ style, action, type, title }) => {

  return (
    <button type="button" style={style} className={type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={action}>
      {title}
    </button>
  )
}

Button.propTypes = {
  style: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Button