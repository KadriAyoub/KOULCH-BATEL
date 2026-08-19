import { useState } from 'react'
import './NavBar.css'
import 'boxicons'

export default function NavBar() {
  const [login, setLogin] = useState(true)
  return (
    <nav className='navBar-container'>
      <h3>KOULCH BATEL</h3>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Products</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div className="logo-container">
        <box-icon className='icone' name='search'></box-icon>
        <box-icon className='icone' name='globe' ></box-icon>
        <box-icon className={`icone ${login ? 'hide' : 'active'}`} name='user'></box-icon>
        <div className={`login ${login ? 'active' : 'hide'}`}>
          <button>Sign In</button>
          <button>Log In</button>
        </div>
      </div>
    </nav>
  )
}
