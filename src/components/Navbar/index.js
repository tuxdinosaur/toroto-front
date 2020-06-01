import React from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarCollapse from './NavbarCollapse'

function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>

      <NavbarBrand />
      <NavbarToggler />
      <NavbarCollapse />

    </nav>
  )
}

export default Navbar
