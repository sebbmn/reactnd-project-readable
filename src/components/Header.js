import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'

const Header = () => (
  <header>
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      Here the api test for now...
    </p>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <a href='/'>home</a>
      </ul>
    </nav>
  </header>
)

export default Header