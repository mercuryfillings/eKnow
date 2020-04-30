import React from 'react'
import { Link, Route } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div>
      <nav className="navbar">
        <Link to='/'><h1 className='logo'>eKnow</h1></Link>
      </nav>
    </div>
  )
}
