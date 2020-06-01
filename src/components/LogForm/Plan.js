
import React, { Component } from 'react'
import LogInputRadio from './LogInputRadio'

class Plan extends Component {
  render () {
    return (
      <div className='mb-3'>

        <label for='basic-url'>
          Elige un plan
        </label>

        <div class='radio-options'>

          <LogInputRadio
            id='inlineRadio1'
            classNameElement='form-check form-check-inline radio--1'
            label='Básico'
            type='radio'
            value='option1'
          />

          <LogInputRadio
            id='inlineRadio2'
            classNameElement='form-check form-check-inline radio--2'
            label='Pro'
            type='radio'
            value='option2'
          />

        </div>

      </div>
    )
  }
}

export default Plan
