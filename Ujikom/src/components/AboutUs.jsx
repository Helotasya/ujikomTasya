import React from 'react'
import '../components/style/aboutus.css'
import BgBottom from '../components/assets1/bg.jpg'

const AboutUs = () => {
  return (
    <div className='resto'>
      <div className="all-about">
        <h1>Hello, We are Monsieur Spoon.
          Established 2012 – Bali.</h1>
        <h2>Since 2012, Monsieur Spoon has been striving to find the best flour to make out finest breads, the Artisan Bucheron and the Baguette Tradition every night, ready for you to enjoy in the morning. Our wild yeast is an 8-year long secret, fermenting naturally somewhere in Bali. Started by two Parisian cousins in 2012.</h2>
        <h3>
          Based in Bali’s most-visited spots, Monsieur Spoon serves a tempting range of high-quality handmade French pastries, cakes, artisan bread and savouries in a relaxed, friendly environment. The bakery is ideal for breakfast and lunch gatherings, and we strive to serve a healthy and delicious menu whatever the time of day.</h3>
      </div>
      <div className='garis'></div>
      <div className="our-resto">
        <h1>
          French Bakery is part of our heritage and was introduced to us in our early years.</h1>
        <div className="img-bottom">
          <div className="item">
            <img src={BgBottom} alt="" />
          </div>
          <div className="item">
            <img src={BgBottom} alt="" />
          </div>
          <div className="item">
            <img src={BgBottom} alt="" />
          </div>
          <div className="item">
            <img src={BgBottom} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutUs
