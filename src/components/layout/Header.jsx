import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <header>
      <div className='container'>
        <div className='flexheader flex justify-between'>
          <Link to={'/'}>Logo</Link>
          <ul className='navItems lg:flex block items-center gap-3'>
            <li> <Link to={'/'}>Home</Link> </li>
            <li> <Link to={'/'}>Movie List</Link> </li>
          </ul>
          <div className='headerRight'>
            <span className='login'>Login</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header