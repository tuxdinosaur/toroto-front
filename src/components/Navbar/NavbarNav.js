import React from 'react'

import NavbarNavItem from './NavbarNavItem'

function NavbarNav () {
  return (
    <ul className='navbar-nav ml-auto'>
      <NavbarNavItem
        text='Ayuda'
        to='#'
      />
    </ul>
  )
}

export default NavbarNav
