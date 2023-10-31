import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'><h2>Home</h2></Link>
      <Link to='/about'><h2>About</h2></Link>
      <Link to='/contact'><h2>Contact</h2></Link>
    </div>
  )
}

export default Header
