
import React, { Component } from 'react'

class LogInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render () {
    const {
      id,
      label,
      type,
      placeholder
    } = this.props

    return (
      <div className='mb-3'>
        <label for={id}>
          {label}
        </label>
        <div className='input-group'>
          <input
            type={type}
            className='form-control'
            placeholder={placeholder}
            aria-label={id}
          />
        </div>
      </div>
    )
  }
}

export default LogInput
