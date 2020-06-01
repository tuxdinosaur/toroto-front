
import React, { Component } from 'react'

class LogInputRadio extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render () {
    const {
      id,
      classNameElement,
      label,
      type,
      value
    } = this.props

    return (
      <div className={classNameElement}>
        <input
          className='form-check-input'
          type={type}
          name='inlineRadioOptions'
          id={id}
          value={value}
        />
        <label
          className='form-check-label'
          for={id}
        >
          {label}
        </label>
      </div>
    )
  }
}

export default LogInputRadio
