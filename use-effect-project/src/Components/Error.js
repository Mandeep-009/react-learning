import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h4>404 Page not found</h4>
      <Link to={(-1)}><button>Go to previous page</button></Link>
    </div>
  )
}

export default Error
