import React from 'react'

function Tabs () {
  return (
    <ul className='nav nav-pills mb-3 log__container--tabs' id='pills-tab' role='tablist'>

      <li
        className='nav-item' role='presentation'
      >
        <a
          className='nav-link active'
          id='pills-home-tab'
          data-toggle='pill'
          href='#pills-home'
          role='tab'
          aria-controls='pills-home'
          aria-selected='true'
        >
          Registro
        </a>
      </li>

      <li
        className='nav-item' role='presentation'
      >
        <a
          className='nav-link'
          id='pills-profile-tab'
          data-toggle='pill'
          href='#pills-profile'
          role='tab'
          aria-controls='pills-profile'
          aria-selected='false'
        >
          Inicia sesión
        </a>
      </li>

    </ul>
  )
}

export default Tabs
