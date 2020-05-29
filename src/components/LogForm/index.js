import React from 'react'

function LogForm () {
  return (
    <div className='log__container'>

      <ul className='nav nav-pills mb-3 log__container--tabs' id='pills-tab' role='tablist'>
        <li className='nav-item' role='presentation'>
          <a
            className='nav-link active' id='pills-home-tab' data-toggle='pill' href='#pills-home' role='tab'
            aria-controls='pills-home' aria-selected='true'
          >
            Registro
          </a>
        </li>

        <li className='nav-item' role='presentation'>
          <a
            className='nav-link'
            id='pills-profile-tab' data-toggle='pill' href='#pills-profile' role='tab'
            aria-controls='pills-profile' aria-selected='false'
          >
            Inicia sesión
          </a>
        </li>
      </ul>

      <div className='tab-content' id='pills-tabContent'>

        <div className='tab-pane fade show active' id='pills-home' role='tabpanel' aria-labelledby='pills-home-tab'>

          <label for='basic-url'>Nombre</label>
          <div className='input-group mb-3'>
            <input
              type='text' className='form-control' placeholder='' aria-label='Username'
              aria-describedby='basic-addon1'
            />
          </div>

          <label for='basic-url'>Apellido</label>
          <div className='input-group mb-3'>
            <input
              type='text' className='form-control' placeholder='' aria-label="Recipient's username"
              aria-describedby='basic-addon2'
            />
          </div>

          <label for='basic-url'>Correo electrónico</label>
          <div className='input-group mb-3'>
            <input
              type='email' className='form-control' placeholder='' aria-label="Recipient's username"
              aria-describedby='basic-addon2'
            />
          </div>

          <label for='basic-url'>Contraseña</label>
          <div className='input-group mb-3'>
            <input
              type='password' className='form-control' placeholder='' aria-label="Recipient's username"
              aria-describedby='basic-addon2'
            />
          </div>

          <label for='basic-url'>Elige un plan</label>

          <div class='radio-options mb-3'>
            <div className='form-check form-check-inline radio--1'>
              <input
                className='form-check-input' type='radio' name='inlineRadioOptions' id='inlineRadio1'
                value='option1'
              />
              <label className='form-check-label' for='inlineRadio1'>Básico</label>
            </div>

            <div className='form-check form-check-inline radio--2'>
              <input
                className='form-check-input' type='radio' name='inlineRadioOptions' id='inlineRadio2'
                value='option2'
              />
              <label className='form-check-label' for='inlineRadio2'>Pro</label>
            </div>
          </div>

          <div className='tab-register__button'>
            <button type='button' className='btn btn-toroto'>Crear cuenta</button>
          </div>

        </div>

        <div className='tab-pane fade' id='pills-profile' role='tabpanel' aria-labelledby='pills-profile-tab'>

          <label for='basic-url'>Correo electrónico</label>
          <div className='input-group mb-3'>
            <input
              type='email' className='form-control' placeholder='' aria-label='Correo electrónico'
              aria-describedby='basic-addon1'
            />
          </div>

          <label for='basic-url'>Contraseña</label>
          <div className='input-group mb-3'>
            <input
              type='password' className='form-control' placeholder='' aria-label='Contraseña'
              aria-describedby='basic-addon2'
            />
          </div>

          <div className='tab-register__button'>
            <button type='button' className='btn btn-toroto'>Inicia sesión</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default LogForm
