import React from 'react'
import { Link } from 'react-router-dom'
import Insta from './Insta'
import Mail from './Mail'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      
      <h2>Contact Page</h2>
      <Routes>
        <Route path='/contact/insta' element={<Insta/>}/>
      </Routes>
      <Link to='/contact/insta'><h4>Contact via Insta</h4></Link>
      <Link to='/contact/mail'><h4>Contact via Mail</h4></Link>
      
    </div>
  )
}

export default Contact
