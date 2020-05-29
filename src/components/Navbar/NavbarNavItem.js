import React from 'react'

function NavbarNavItem (props) {
  return (
    <li className='nav-item'>
      <a
        className='nav-link active'
        href={props.to}
      >
        {props.text}
      </a>
    </li>
  )
}

export default NavbarNavItem
