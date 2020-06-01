
import React from 'react'

import Button from './Button'
import LogInput from './LogInput'
import Plan from './Plan'

function TabsContent () {
  return (
    <div className='tab-content' id='pills-tabContent'>

      <div className='tab-pane fade show active' id='pills-home' role='tabpanel' aria-labelledby='pills-home-tab'>

        <LogInput
          id='name'
          label='Nombre'
          type='text'
        />

        <LogInput
          id='lastName'
          label='Apellido'
          type='text'
        />

        <LogInput
          id='email'
          label='Correo electrónico'
          type='email'
        />

        <LogInput
          id='password'
          label='Contraseña'
          type='password'
        />

        <Plan />

        <div className='tab-register__button'>
          <Button
            text='Crear cuenta'
          />
        </div>

      </div>

      <div
        className='tab-pane fade'
        id='pills-profile'
        role='tabpanel'
        aria-labelledby='pills-profile-tab'
      >

        <LogInput
          id='email'
          label='Correo electrónico'
          type='email'
        />

        <LogInput
          id='password'
          label='Contraseña'
          type='password'
        />

        <div className='tab-register__button'>
          <Button
            text='Iniciar sesión'
          />
        </div>

      </div>

    </div>
  )
}

export default TabsContent
