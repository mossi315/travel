import React from 'react'
import Button from './Button'
import '../App.css'
import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
const HeroSection = () => {
  return (
    <div className='hero-container'>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER <FontAwesomeIcon className = 'iCircle'icon={faPlayCircle} />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection