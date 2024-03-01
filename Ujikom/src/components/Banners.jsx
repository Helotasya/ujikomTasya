import React from 'react'
import bg from "./assets1/bn.jpg"
import img from "../components/assets1/churros.jpg"
import './style/banners.css'

const Banners = () => {
  return (
    <div className="main-banners">
      <div className='banner'>
        <span><img className="bnr" src={bg} alt="" /></span>
      </div>
      <div className="text">
        <span><h1>WELCOME PARVIZERS</h1></span>
        <p>Exquisite Flavors, Expertly Crafted.</p>
      </div>
      <div className="break">

      </div>
      <div className="grid-content">
        <div className="item">
          <img src={img} alt="" />
        </div>
        <div className="item">
          <img src={img} alt="" />
        </div>
        <div className="item">
          <img src={img} alt="" />
        </div>
        <div className="item">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="grid-card">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
    </div>

  )
}

export default Banners
