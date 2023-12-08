import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Navbar() {
  return (
    <>
    <nav className='NavBar'>
        <Link to="/" className='KalviumBtn'>KALVIUM ❤️</Link>
        <div>
            <Link to='/contactus' className='Contact'>Contacts</Link>
            <Link to='/about' className='About'>About</Link>
        </div>
    </nav>

    </>
  )
}

export default Navbar