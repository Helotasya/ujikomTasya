import React from 'react'
import ImageLogo from '../components/assets1/logo.png'
import '../components/style/card.css';
import img from '../components/assets1/churros.jpg'

const Card = () => {
  return (
    <div className='card-container'>
      {/* <img src={ImageLogo} alt="#" className="menulogo" /> */}
      <div className="container-1">
        <div className="box-1">
          <div className='menu-container'>
            <h2>Burger</h2>
            <div className="menu-box">
              <div className="menu-1">
                <h3>Burger Kecil<sup>100</sup></h3>
                <p>Bun, Beef, Salada, Cucumber</p>
              </div>
              <div className="menu-1">
                <h3>Burger Sedang <sup>100</sup></h3>
                <p>$500</p>
              </div>
              <div className="menu-1">
                <h3>Burger Besar<sup>100</sup></h3>
                <p>$500</p>
              </div>
            </div>
          </div>
          <div>
            <h2>Burger</h2>
            <div className="menu-box">
              <div className="menu-1">
                <h3>Burger Kecil<sup>100</sup></h3>
                <p>Bun, Beef, Salada, Cucumber</p>
              </div>
              <div className="menu-1">
                <h3>Burger Sedang <sup>100</sup></h3>
                <p>$500</p>
              </div>
              <div className="menu-1">
                <h3>Burger Besar<sup>100</sup></h3>
                <p>$500</p>
              </div>
            </div>
          </div>
          <div>
            <h2>Burger</h2>
            <div className="menu-box">
              <div className="menu-1">
                <h3>Burger Kecil<sup>100</sup></h3>
                <p>Bun, Beef, Salada, Cucumber</p>
              </div>
              <div className="menu-1">
                <h3>Burger Sedang <sup>100</sup></h3>
                <p>$500</p>
              </div>
              <div className="menu-1">
                <h3>Burger Besar<sup>100</sup></h3>
                <p>$500</p>
              </div>
            </div>
          </div>

        </div>
        <div className="box-2">
          <h2>Burger</h2>
          <div className="menu-box">
            <div className="menu-1">
              <h3>Burger Kecil<sup>100</sup></h3>
              <p>Bun, Beef, Salada, Cucumber</p>
            </div>
            <div className="menu-1">
              <h3>Burger Sedang <sup>100</sup></h3>
              <p>$500</p>
            </div>
            <div className="menu-1">
              <h3>Burger Besar<sup>100</sup></h3>
              <p>$500</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="container-2">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Card
