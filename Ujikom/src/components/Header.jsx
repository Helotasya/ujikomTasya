import React from 'react';
import ImageLogo from '../components/assets1/resto.png';
import './style/header.css';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <>
      <div className="header-all">
        <div className='nav'>
          <ul>
            <Link to="contact"><strong><li>Contact</li></strong></Link>
            <Link to="about"><strong><li>About Us</li></strong></Link>
          </ul>
        </div>
        <img className="logo" src={ImageLogo} alt="Logo" />
        <div className='nav'>
          <ul>
            <Link to="menu"><strong><li>Menu</li></strong></Link>
            <Link to="/"><strong><li>Home</li></strong></Link>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Header
