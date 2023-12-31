import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTypo3 } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import './Navbar.css'
const Navbar = () => {
  // Handle Hamburger Menu
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  // Handle Menu Items
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) setButton(false);
    else setButton(true);
  }

  window.addEventListener('resize', showButton);
  useEffect(()=>{
    showButton();
  },[])
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
              {/* Title */}
               <Link to = '/' className='navbar-logo' onClick={closeMobileMenu}>
                 TRVL <FontAwesomeIcon  icon={faTypo3} />
                </Link>

                {/* Hamburger Menu */}
                <div className="menu-icon" onClick={handleClick}>
                  <FontAwesomeIcon  className = 'iWhite' icon = {click ? faTimes : faBars} />
                </div>

                {/* Menu Items */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    {/* Home */}
                    <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  {/* Services */}
                  <li className='nav-item'>
                    <Link to = '/services' className='nav-links' onClick={closeMobileMenu}>
                      Services
                    </Link>
                  </li>
                  {/* Products */}
                  <li className='nav-item'>
                    <Link to = '/products' className='nav-links' onClick={closeMobileMenu}>
                      Products
                    </Link>
                  </li>
                  {/* Sign up */}
                  <li className='nav-item'>
                    <Link to = '/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar