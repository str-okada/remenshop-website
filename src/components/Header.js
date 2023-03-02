import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo/gmen.jpg'
import './Header.css'

const Header = () => {
    return (
        <header>
            <Link to='/' >
                <img src={logo} className="logoImage" />
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link to='about'>About</Link>
                    </li>
                    <li>
                        <Link to='menu'>Menu</Link>
                    </li>
                    <li>
                        <Link to='contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header