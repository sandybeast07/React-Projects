import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' name='hero'>
        <div className="hero-section">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex earum pariatur est doloremque dicta.</p>
            <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
